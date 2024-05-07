#!/bin/bash

# This script automates:
# >>> bump versions in manifests + READMEs + Greasemonkey starter script >>> commit bumps to Git
# >>> build chatgpt.min.js to dist/ >>> update jsDelivr URLs for GH assets >>> commit build to Git
# >>> publish to npm (optional)

# Init UI colors
nc="\033[0m"    # no color
br="\033[1;91m" # bright red
by="\033[1;33m" # bright yellow
bg="\033[1;92m" # bright green
bw="\033[1;97m" # bright white

# Validate version arg
VERSION_TYPES=("major" "minor" "patch")
if [[ ! "${VERSION_TYPES[@]}" =~ "$1" ]] ; then
    echo "${br}Invalid version argument. Please specify 'major', 'minor', or 'patch'.${nc}"
    exit 1 ; fi

# Determine new version to bump to
OLD_VERSION=$(node -pe "require('./package.json').version")
IFS='.' read -ra SUBVERS <<< "$OLD_VERSION" # split OLD_VERSION into SUBVERS array
case $1 in # edit SUBVERS based on version type
    "patch") SUBVERS[2]=$((SUBVERS[2] + 1)) ;;
    "minor") SUBVERS[1]=$((SUBVERS[1] + 1)) ; SUBVERS[2]=0 ;;
    "major") SUBVERS[0]=$((SUBVERS[0] + 1)) ; SUBVERS[1]=0 ; SUBVERS[2]=0 ;;
esac
NEW_VERSION=$(printf "%s.%s.%s" "${SUBVERS[@]}")

# Bump version in package.json + package-lock.json
echo -e "${by}Bumping versions in package manifests...${bw}"
npm version --no-git-tag-version "$NEW_VERSION"

# Bump versions in READMEs
echo -e "${by}\nBumping versions in READMEs...${bw}"
sed -i \
    -e "s/\(chatgpt\(-\|\.js@\)\)[0-9]\+\(\.[0-9]\+\)\{2\}/\1$NEW_VERSION/g" `# jsDelivr URLs` \
    -e "s|v[0-9]\+\.[0-9]\+\.[0-9]\+|v$NEW_VERSION|g" `# Minified Size shield link/src` \
    $(find docs -regex ".*/\(README\|USERGUIDE\)\.md") ./README.md
echo "v$NEW_VERSION"

# Bump chatgpt.js version in Greasemonkey starter
echo -e "${by}\nBumping versions in Greasemonkey starter...${bw}"
sed -i "s|\(chatgpt\.js@\)[0-9.]\+|\1$NEW_VERSION|g" starters/greasemonkey/*.user.js
echo "chatgpt.js v$NEW_VERSION"

# Bump userscript version in Greasemonkey starter
TODAY=$(date +'%Y.%-m.%-d') # YYYY.M.D format
if grep -q "@version\s*${TODAY}$" starters/greasemonkey/*.user.js # exact match for $TODAY
    then # bump to $TODAY.1
        sed -i "s|\(@version\s*\).*$|\1$TODAY.1|" starters/greasemonkey/*.user.js
elif grep -q "@version\s*${TODAY}" starters/greasemonkey/*.user.js # partial match for $TODAY
    then # bump to $TODAY.n+1
        last_ver=$(sed -n "/@version\s*${TODAY%.*}/{p;q}" starters/greasemonkey/*.user.js | grep -o '.$')
        sed -i "s|\(@version\s*\).*$|\1$TODAY.$((last_ver + 1))|" starters/greasemonkey/*.user.js
else # no match for $TODAY
    # bump to $TODAY
        sed -i "s|\(@version\s*\).*$|\1$TODAY|" starters/greasemonkey/*.user.js ; fi
NEW_GM_VERSION=$(sed -n "s/.*@version\s*\(.*\)/\1/p" starters/greasemonkey/*.user.js)
echo "chatgpt.js-greasemonkey-starter.user.js v$NEW_GM_VERSION"

# Commit bumps to Git
echo -e "${by}\nCommitting bumps to Git...\n${nc}"
git add package*.json
git commit -n -m "Bumped versions in manifests to $NEW_VERSION"
git add "README.md" "./**/README.md" "./**/USERGUIDE.md"
git commit -n -m "Bumped versions in jsDelivr URLs to $NEW_VERSION"
git add ./*greasemonkey-starter.user.js
git commit -n -m "Bumped chatgpt.js to $NEW_VERSION"

# Build chatgpt.min.js to dist/
echo -e "${by}\nBuilding chatgpt.min.js...\n${nc}"
bash utils/build.sh

# Update jsDelivr URLs for GitHub assets w/ commit hash
echo -e "${by}\nUpdating jsDelivr URLs for GitHub assets w/ commit hash...${nc}"
BUMP_HASH=$(git rev-parse HEAD)
OLD_FILE=$(<dist/chatgpt.min.js)
sed -i -E "s|(cdn\.jsdelivr\.net\/gh\/[^/]+\/[^@/\"']+)[^/\"']*|\1@$BUMP_HASH|g" dist/chatgpt.min.js
NEW_FILE=$(<dist/chatgpt.min.js)
if [[ "$OLD_FILE" != "$NEW_FILE" ]]
    then echo -e "${bw}$BUMP_HASH${nc}"
    else echo "No jsDelivr URLs for GH assets found in built files"
fi

# Commit build to Git
echo -e "${by}\nCommitting build to Git...\n${nc}"
git add ./**/chatgpt.min.js
git commit -n -m "Built chatgpt.js $NEW_VERSION"

# Push to GiHub
echo -e "${by}\nPushing to GitHub...\n${nc}"
git push

# Publish to NPM
if [[ "$*" == *"--publish"* ]] ; then
    echo -e "${by}\nPublishing to npm...\n${nc}"
    npm publish ; fi

# Print final summary
echo -e "\n${bg}Successfully bumped to v$NEW_VERSION$(
    [[ "$*" == *"--publish"* ]] && echo ' and published to npm' || echo ''
)!${nc}"
