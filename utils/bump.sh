#!/bin/bash

# This script automates:
# >>> bump versions in manifests + READMEs + Greasemonkey starter script >>> commit bumps to Git
# >>> build chatgpt.min.js to dist/ >>> update jsDelivr URLs for GH assets >>> commit build to Git
# >>> publish to npm (optional)

# Init UI colors
NC="\033[0m"    # no color
BR="\033[1;91m" # bright red
BY="\033[1;33m" # bright yellow
BG="\033[1;92m" # bright green
BW="\033[1;97m" # bright white

# Validate version arg
ver_types=("major" "minor" "patch")
if [[ ! "${ver_types[@]}" =~ "$1" ]] ; then
    echo "${BR}Invalid version argument. Please specify 'major', 'minor', or 'patch'.${NC}"
    exit 1 ; fi

# PULL latest changes
echo -e "${BY}Pulling latest changes from remote to sync local repository...${NC}\n"
git pull || (echo -e "${BR}Merge failed, please resolve conflicts!${NC}" && exit 1)
echo ''

# Determine new version to bump to
old_ver=$(node -pe "require('./package.json').version")
IFS='.' read -ra subvers <<< "$old_ver" # split old_ver into subvers array
case $1 in # edit subvers based on version type
    "patch") subvers[2]=$((subvers[2] + 1)) ;;
    "minor") subvers[1]=$((subvers[1] + 1)) ; subvers[2]=0 ;;
    "major") subvers[0]=$((subvers[0] + 1)) ; subvers[1]=0 ; subvers[2]=0 ;;
esac
NEW_VER=$(printf "%s.%s.%s" "${subvers[@]}")

# Bump version in package.json + package-lock.json
echo -e "${BY}Bumping versions in package manifests...${BW}"
npm version --no-git-tag-version "$NEW_VER"

# Bump versions in READMEs
echo -e "${BY}\nBumping versions in READMEs...${BW}"
sed -i \
    -e "s/\(chatgpt\(-\|\.js@\)\)[0-9]\+\(\.[0-9]\+\)\{2\}/\1$NEW_VER/g" `# jsDelivr URLs` \
    -e "s|v[0-9]\+\.[0-9]\+\.[0-9]\+|v$NEW_VER|g" `# Minified Size shield link/src + userguide links` \
    $(find docs -regex ".*/\(README\|USERGUIDE\)\.md") ./README.md
echo "v$NEW_VER"

# Bump chatgpt.js version in Greasemonkey starter
echo -e "${BY}\nBumping versions in Greasemonkey starter...${BW}\n"
sed -i "s|\(chatgpt\.js@\)[0-9.]\+|\1$NEW_VER|g" starters/greasemonkey/*.user.js
echo "chatgpt.js v$NEW_VER"

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
new_gm_ver=$(sed -n "s/.*@version\s*\(.*\)/\1/p" starters/greasemonkey/*.user.js)
echo "chatgpt.js-greasemonkey-starter.user.js v$new_gm_ver"

# Commit bumps to Git
echo -e "${BY}\nCommitting bumps to Git...\n${NC}"
git add package*.json
git commit -n -m "Bumped versions in manifests to $NEW_VER"
git add "README.md" "./**/README.md" "./**/USERGUIDE.md"
git commit -n -m "Bumped versions in jsDelivr URLs to $NEW_VER"
git add ./*greasemonkey-starter.user.js
git commit -n -m "Bumped chatgpt.js to $NEW_VER"

# Build chatgpt.min.js to dist/
echo -e "${BY}\nBuilding chatgpt.min.js...\n${NC}"
bash utils/build.sh

# Update jsDelivr URLs for GitHub assets w/ commit hash
echo -e "${BY}\nUpdating jsDelivr URLs for GitHub assets w/ commit hash...${NC}"
BUMP_HASH=$(git rev-parse HEAD)
old_file=$(<dist/chatgpt.min.js)
sed -i -E "s|(cdn\.jsdelivr\.net\/gh\/[^/]+\/[^@/\"']+)[^/\"']*|\1@$BUMP_HASH|g" dist/chatgpt.min.js
new_file=$(<dist/chatgpt.min.js)
if [[ "$old_file" != "$new_file" ]]
    then echo -e "${BW}$BUMP_HASH${NC}"
    else echo "No jsDelivr URLs for GH assets found in built files"
fi

# Commit build to Git
echo -e "${BY}\nCommitting build to Git...\n${NC}"
git add ./**/chatgpt.min.js
git commit -n -m "Built chatgpt.js $NEW_VER"

# Push to GiHub
echo -e "${BY}\nPushing to GitHub...\n${NC}"
git git push

# Publish to NPM
if [[ "$*" == *"--publish"* ]] ; then
    echo -e "${BY}\nPublishing to npm...\n${NC}" ; npm publish ; fi

# Print final summary
echo -e "\n${BG}Successfully bumped to v$NEW_VER$(
    [[ "$*" == *"--publish"* ]] && echo ' and published to npm' || echo ''
)!${NC}"
