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
ver_types=("major" "minor" "patch")
if [[ ! "${ver_types[@]}" =~ "$1" ]] ; then
    echo "${br}Invalid version argument. Please specify 'major', 'minor', or 'patch'.${nc}"
    exit 1 ; fi

# Determine new version to bump to
OLD_VERSION=$(node -pe "require('./package.json').version")
IFS='.' read -ra subvers <<< "$OLD_VERSION" # split OLD_VERSION into subvers array
case $1 in # edit subvers based on version type
    "patch") subvers[2]=$((subvers[2] + 1)) ;;
    "minor") subvers[1]=$((subvers[1] + 1)) ; subvers[2]=0 ;;
    "major") subvers[0]=$((subvers[0] + 1)) ; subvers[1]=0 ; subvers[2]=0 ;;
esac
new_ver=$(printf "%s.%s.%s" "${subvers[@]}")

# Bump version in package.json + package-lock.json
echo -e "${by}Bumping versions in package manifests...${bw}"
npm version --no-git-tag-version "$new_ver"

# Bump versions in READMEs
echo -e "${by}\nBumping versions in READMEs...${bw}"
sed -i \
    -e "s/\(chatgpt\(-\|\.js@\)\)[0-9]\+\(\.[0-9]\+\)\{2\}/\1$new_ver/g" `# jsDelivr URLs` \
    -e "s|v[0-9]\+\.[0-9]\+\.[0-9]\+|v$new_ver|g" `# Minified Size shield link/src + userguide links` \
    $(find docs -regex ".*/\(README\|USERGUIDE\)\.md") ./README.md
echo "v$new_ver"

# Bump chatgpt.js version in Greasemonkey starter
echo -e "${by}\nBumping versions in Greasemonkey starter...${bw}"
sed -i "s|\(chatgpt\.js@\)[0-9.]\+|\1$new_ver|g" starters/greasemonkey/*.user.js
echo "chatgpt.js v$new_ver"

# Bump userscript version in Greasemonkey starter
today=$(date +'%Y.%-m.%-d') # YYYY.M.D format
if grep -q "@version\s*${today}$" starters/greasemonkey/*.user.js # exact match for $today
    then # bump to $today.1
        sed -i "s|\(@version\s*\).*$|\1$today.1|" starters/greasemonkey/*.user.js
elif grep -q "@version\s*${today}" starters/greasemonkey/*.user.js # partial match for $today
    then # bump to $today.n+1
        last_ver=$(sed -n "/@version\s*${today%.*}/{p;q}" starters/greasemonkey/*.user.js | grep -o '.$')
        sed -i "s|\(@version\s*\).*$|\1$today.$((last_ver + 1))|" starters/greasemonkey/*.user.js
else # no match for $today
    # bump to $today
        sed -i "s|\(@version\s*\).*$|\1$today|" starters/greasemonkey/*.user.js ; fi
new_gm_ver=$(sed -n "s/.*@version\s*\(.*\)/\1/p" starters/greasemonkey/*.user.js)
echo "chatgpt.js-greasemonkey-starter.user.js v$new_gm_ver"

# Commit bumps to Git
echo -e "${by}\nCommitting bumps to Git...\n${nc}"
git add package*.json
git commit -n -m "Bumped versions in manifests to $new_ver"
git add "README.md" "./**/README.md" "./**/USERGUIDE.md"
git commit -n -m "Bumped versions in jsDelivr URLs to $new_ver"
git add ./*greasemonkey-starter.user.js
git commit -n -m "Bumped chatgpt.js to $new_ver"

# Build chatgpt.min.js to dist/
echo -e "${by}\nBuilding chatgpt.min.js...\n${nc}"
bash utils/build.sh

# Update jsDelivr URLs for GitHub assets w/ commit hash
echo -e "${by}\nUpdating jsDelivr URLs for GitHub assets w/ commit hash...${nc}"
bump_hash=$(git rev-parse HEAD)
old_file=$(<dist/chatgpt.min.js)
sed -i -E "s|(cdn\.jsdelivr\.net\/gh\/[^/]+\/[^@/\"']+)[^/\"']*|\1@$bump_hash|g" dist/chatgpt.min.js
new_file=$(<dist/chatgpt.min.js)
if [[ "$old_file" != "$new_file" ]]
    then echo -e "${bw}$bump_hash${nc}"
    else echo "No jsDelivr URLs for GH assets found in built files"
fi

# Commit build to Git
echo -e "${by}\nCommitting build to Git...\n${nc}"
git add ./**/chatgpt.min.js
git commit -n -m "Built chatgpt.js $new_ver"

# Push to GiHub
echo -e "${by}\nPushing to GitHub...\n${nc}"
git push

# Publish to NPM
if [[ "$*" == *"--publish"* ]] ; then
    echo -e "${by}\nPublishing to npm...\n${nc}"
    npm publish ; fi

# Print final summary
echo -e "\n${bg}Successfully bumped to v$new_ver$(
    [[ "$*" == *"--publish"* ]] && echo ' and published to npm' || echo ''
)!${nc}"
