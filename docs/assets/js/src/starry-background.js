/*          *     .        *  .    *    *   . 
 .  *  Add starry background to <canvas>    
 *  .  .      .      *     .      .   *     */

// Init variables
const starColor = '#fff', starSize = 5, starMinScale = 0.1, overflowThreshold = 50,
      starCount = ( window.innerWidth + window.innerHeight ) / 21,
      canvas = document.querySelector( 'canvas' ),
      context = canvas.getContext( '2d' );
let scale = 1, // device pixel ratio
    stars = [], width, height, pointerX, pointerY,
    velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 },
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
    scale = window.devicePixelRatio || 1;
    width = window.innerWidth * scale; height = window.innerHeight * scale;
    canvas.width = width; canvas.height = height;
    stars.forEach((star) => { // position it
        star.x = Math.random() * width; star.y = Math.random() * height; });
}

function animateStars() {

    // Clear previous frame
    context.clearRect(0, 0, width, height);

    // Update star positions
    velocity.tx *= 0.86; velocity.ty *= 0.86; // proportional to momentum
    velocity.x += ( velocity.tx - velocity.x ) * 0.8;
    velocity.y += ( velocity.ty - velocity.y ) * 0.8;
    stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width/2) * velocity.z * star.z;
        star.y += (star.y - height/2) * velocity.z * star.z;
        star.z += velocity.z;
  
        // Recycle star when out-of-bounds
        if (star.x < -overflowThreshold || star.x > width + overflowThreshold ||
                star.y < -overflowThreshold || star.y > height + overflowThreshold) {            
            let direction = 'z', vx = Math.abs(velocity.x), vy = Math.abs(velocity.y);
            if (vx > 1 || vy > 1) {
                let axis;
                if (vx > vy) axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
                else axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
                if (axis === 'h') direction = velocity.x > 0 ? 'l' : 'r';
                else direction = velocity.y > 0 ? 't' : 'b';
            }
            star.z = starMinScale + Math.random() * ( 1 - starMinScale );
            if (direction === 'z') { star.z = 0.1; star.x = Math.random() * width; star.y = Math.random() * height; }
            else if (direction === 'l') { star.x = -overflowThreshold; star.y = height * Math.random(); }
            else if (direction === 'r') { star.x = width + overflowThreshold; star.y = height * Math.random(); }
            else if( direction === 't' ) { star.x = width * Math.random(); star.y = -overflowThreshold; }
            else if( direction === 'b' ) { star.x = width * Math.random(); star.y = height + overflowThreshold; }
        }
    });
    
    // Render stars
    stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = starSize * star.z * scale;
        context.globalAlpha = 0.5 + 0.5*Math.random();
        context.strokeStyle = starColor;
        context.beginPath();
        context.moveTo( star.x, star.y );
        let tailX = velocity.x * 2,
            tailY = velocity.y * 2;

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
        velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
        velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
    }
    pointerX = x; pointerY = y;
}
