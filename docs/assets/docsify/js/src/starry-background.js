/*          *     .        *  .    *    *   . 
 .  *  Add starry background to <canvas>    
 *  .  .      .      *     .      .   *     */

// Init variables
window.starColor = 'white';
window.starVelocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
const starSize = 6, starMinScale = 0.00000000025, overflowThreshold = 50,
      starCount = ( window.innerWidth + window.innerHeight ) /
          ( navigator.userAgent.indexOf('Firefox') > -1 ? 18 : 11 ),
      canvas = document.querySelector( 'canvas' ),
      context = canvas.getContext( '2d' );
let scale = 0.5, // device pixel ratio
    stars = [], width, height, pointerX, pointerY,
    touchInput = false;

// Generate/animate stars
for (let i = 0; i < starCount; i++)
    stars.push({ x: 0, y: 0, z: starMinScale + Math.random() * ( 1 - starMinScale )});
updateCanvasSize(); animateStars();

// Add listeners
window.onresize = updateCanvasSize;
document.onmousemove = (event) => {
    touchInput = false; movePointer(event.clientX, event.clientY);
};
document.ontouchmove = (event) => {
    touchInput = true;
    movePointer(event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault();
};
document.ontouchend = () => { pointerX = null; pointerY = null; };
document.onmouseleave = () => { pointerX = null; pointerY = null; };

// Define FUNCTIONS

function updateCanvasSize() {
    width = window.innerWidth * scale; height = window.innerHeight * scale;
    canvas.width = width; canvas.height = height;
    stars.forEach((star) => { // position it
        star.x = Math.random() * width; star.y = Math.random() * height; });
}

function animateStars() {

    // Clear previous frame
    context.clearRect(0, 0, width, height);

    // Update star positions
    window.starVelocity.tx *= 0.86; window.starVelocity.ty *= 0.86; // proportional to momentum
    window.starVelocity.x += ( window.starVelocity.tx - window.starVelocity.x ) * 0.8;
    window.starVelocity.y += ( window.starVelocity.ty - window.starVelocity.y ) * 0.8;
    stars.forEach((star) => {
        star.x += window.starVelocity.x * star.z;
        star.y += window.starVelocity.y * star.z;
        star.x += (star.x - width/2) * window.starVelocity.z * star.z;
        star.y += (star.y - height/2) * window.starVelocity.z * star.z;
        star.z += window.starVelocity.z;
  
        // Recycle star when out-of-bounds
        if (star.x < -overflowThreshold || star.x > width + overflowThreshold ||
                star.y < -overflowThreshold || star.y > height + overflowThreshold) {            
            let direction = 'z', vx = Math.abs(window.starVelocity.x), vy = Math.abs(window.starVelocity.y);
            if (vx > 1 || vy > 1) {
                let axis;
                if (vx > vy) axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
                else axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
                if (axis === 'h') direction = window.starVelocity.x > 0 ? 'l' : 'r';
                else direction = window.starVelocity.y > 0 ? 't' : 'b';
            }
            star.z = starMinScale + Math.random() * ( 1 - starMinScale );
            if (direction === 'z') { star.z = 0.1; star.x = Math.random() * width; star.y = Math.random() * height; }
            else if (direction === 'l') { star.x = -overflowThreshold; star.y = height * Math.random(); }
            else if (direction === 'r') { star.x = width + overflowThreshold; star.y = height * Math.random(); }
            else if (direction === 't') { star.x = width * Math.random(); star.y = -overflowThreshold; }
            else if (direction === 'b') { star.x = width * Math.random(); star.y = height + overflowThreshold; }
        }
    });
    
    // Render stars
    stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = starSize * star.z * scale;
        context.globalAlpha = 0.5 + 0.5*Math.random();
        context.strokeStyle = window.starColor;
        context.beginPath();
        context.moveTo( star.x, star.y );
        let tailX = window.starVelocity.x * 2,
            tailY = window.starVelocity.y * 2;

        // stroke() wont work on an invisible line
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo( star.x + tailX, star.y + tailY );
        context.stroke();
    });

    // Loop animation
    requestAnimationFrame(animateStars);
}

function movePointer(x, y) {
    if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        let ox = x - pointerX, oy = y - pointerY;
        window.starVelocity.tx = window.starVelocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
        window.starVelocity.ty = window.starVelocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
    }
    pointerX = x; pointerY = y;
}
