#!/bin/bash

# This script automates: build chatgpt.min.js >>> bump versions in manifests + READMEs
# + Greasemonkey starter script >>> commit changes to Git >>> push changes to GitHub
# >>> publish to npm (optional)

# Init UI colors
nc="\033[0m" # no color
bg="\033[1;92m" # bright green
br="\033[1;91m" # bright red

# Validate version arg
version_types=("major" "minor" "patch")
if [[ ! "${version_types[@]}" =~ "$1" ]] ; then
    echo "${br}Invalid version argument. Please specify 'major', 'minor', or 'patch'.${nc}"
    exit 1 ; fi

# Determine new version to bump to
old_version=$(node -pe "require('./package.json').version")
IFS='.' read -ra subvers <<< "$old_version" # split old_version into subvers array
case $1 in # edit subvers based on version type
    "patch") subvers[2]=$((subvers[2] + 1)) ;;
    "minor") subvers[1]=$((subvers[1] + 1)) ; subvers[2]=0 ;;
    "major") subvers[0]=$((subvers[0] + 1)) ; subvers[1]=0 ; subvers[2]=0 ;;
esac
new_version=$(printf "%s.%s.%s" "${subvers[@]}")

# Build chatgpt.min.js
npm run build:js

# Bump version in package.json + package-lock.json
echo -e "\nBumping versions in package manifests..."
npm version --no-git-tag-version "$new_version"

# Bump versions in READMEs
echo -e "\nBumping versions in READMEs..."
sed -i "s/\(chatgpt\(-\|\.js@\)\)[0-9]\+\(\.[0-9]\+\)\{2\}/\1$new_version/g" \
    $(find docs -regex ".*/\(README\|USERGUIDE\)\.md") ./README.md
echo "v$new_version"

# Bump chatgpt.js version in Greasemonkey starter
echo -e "\nBumping versions in Greasemonkey starter..."
sed -i "s|\(chatgpt\.js@\)[0-9.]\+|\1$new_version|g" starters/greasemonkey/*.user.js
echo "chatgpt.js v$new_version"

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
new_gm_version=$(sed -n "s/.*@version\s*\(.*\)/\1/p" starters/greasemonkey/*.user.js)
echo "chatgpt.js-greasemonkey-starter.user.js v$new_gm_version"

# Commit changes to Git
echo -e "\nCommitting changes...\n"
git add ./**/chatgpt.min.js
git commit -n -m "Built chatgpt.js $new_version"
git add package*.json
git commit -n -m "Bumped versions in manifests to $new_version"
git add "README.md" "./**/README.md" "./**/USERGUIDE.md"
git commit -n -m "Bumped versions in jsDelivr URLs to $new_version"
git add ./*greasemonkey-starter.user.js
git commit -n -m "Bumped chatgpt.js to $new_version"

# Push to GiHub
echo -e "\nPushing to GitHub...\n"
git push

# Publish to NPM
if [[ "$*" == *"--publish"* ]] ; then
    echo -e "\nPublishing to npm...\n"
    npm publish ; fi

# Print final summary
echo -e "\n${bg}Successfully bumped to v$new_version$(
    [[ "$*" == *"--publish"* ]] && echo ' and published to npm' || echo ''
)!${nc}"
