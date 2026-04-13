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

# Determine new version to bump to
BUMP_TYPES=("major" "minor" "patch")
old_ver=$(node -pe "require('./package.json').version")
IFS='.' read -ra subvers <<< "$old_ver" # split old_ver into subvers array
case $1 in # edit subvers based on version type
    "patch") subvers[2]=$((subvers[2] + 1)) ;;
    "minor") subvers[1]=$((subvers[1] + 1)) ; subvers[2]=0 ;;
    "major") subvers[0]=$((subvers[0] + 1)) ; subvers[1]=0 ; subvers[2]=0 ;;
    *) echo -e "\n${BR}Invalid bump type arg provided: $1${NC}" ;
       echo -e "\n${BY}Valid args are: ${BUMP_TYPES[*]/#/--}${NC}" ;
       exit 1 ;;
esac
new_ver=$(printf "%s.%s.%s" "${subvers[@]}")

echo -e "${BY}Pulling latest changes from remote to sync local repository...${NC}\n"
git pull || (echo -e "${BR}Merge failed, please resolve conflicts!${NC}" && exit 1)
echo ''

echo -e "${BY}Bumping versions in package manifests...${BW}"
npm version --no-git-tag-version "$new_ver"

echo -e "${BY}\nBumping versions in READMEs...${BW}"
sed -i \
    -e "s/\(chatgpt\(-\|\.js@\)\)[0-9]\+\(\.[0-9]\+\)\{2\}/\1$new_ver/g" `# jsDelivr URLs` \
    -e "s|v[0-9]\+\.[0-9]\+\.[0-9]\+|v$new_ver|g" `# Minified Size shield link/src + userguide links` \
    $(find docs -regex ".*/\(README\|USERGUIDE\)\.md") ./README.md
echo "v$new_ver"

echo -e "${BY}\nBumping versions in Greasemonkey starter...${BW}\n"
sed -i "s|\(@require.*chatgpt\.js@\)[0-9.]\+|\1$new_ver|g" starters/greasemonkey/*.user.js
echo "chatgpt.js v$new_ver"
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

echo -e "${BY}\nChanging Git author/committer to kudo-sync-bot...\n${NC}"
if [ -n "$GPG_KEYS_PATH" ] ; then
    KEY_PATH="$GPG_KEYS_PATH/kudo-sync-bot-private-key.asc"
    if [ -f "$KEY_PATH" ] ; then gpg --batch --import "$KEY_PATH" ; fi
    KEY_ID_PATH="$GPG_KEYS_PATH/kudo-sync-bot-key-id.txt"
    if [ -f "$KEY_ID_PATH" ] ; then KEY_ID="$(cat "$KEY_ID_PATH")" ; fi
fi
export GIT_AUTHOR_NAME="kudo-sync-bot"
export GIT_AUTHOR_EMAIL="auto-sync@kudoai.com"
export GIT_COMMITTER_NAME="kudo-sync-bot"
export GIT_COMMITTER_EMAIL="auto-sync@kudoai.com"

echo -e "${BY}\nCommitting bumps to Git...\n${NC}"
git add package*.json
git commit -n -m "Bumped versions in manifests to $new_ver" -S$KEY_ID
git add "README.md" "./**/README.md" "./**/USERGUIDE.md"
git commit -n -m "Bumped versions in jsDelivr URLs to $new_ver" -S$KEY_ID
git add ./*greasemonkey-starter.user.js
git commit -n -m "Bumped chatgpt.js to $new_ver" -S$KEY_ID

echo -e "${BY}\nBuilding chatgpt.min.js...\n${NC}"
bash utils/build.sh

echo -e "${BY}\nUpdating jsDelivr URLs for GitHub assets w/ commit hash...${NC}"
bump_hash=$(git rev-parse HEAD)
old_file=$(<dist/chatgpt.min.js)
sed -i -E "s|(cdn\.jsdelivr\.net\/gh\/[^/]+\/[^@/\"']+)[^/\"']*|\1@$bump_hash|g" dist/chatgpt.min.js
new_file=$(<dist/chatgpt.min.js)
if [[ "$old_file" != "$new_file" ]]
    then echo -e "${BW}$bump_hash${NC}"
    else echo "No jsDelivr URLs for GH assets found in built files"
fi

echo -e "${BY}\nCommitting build to Git...\n${NC}"
git add ./**/chatgpt.min.js
git commit -n -m "Built chatgpt.js $new_ver" -S$KEY_ID

echo -e "${BY}\nPushing to GitHub...\n${NC}"
git push

if [[ "$*" == *"--publish"* ]] ; then
    echo -e "${BY}\nPublishing to npm...\n${NC}" ; npm publish ; fi

echo -e "${BY}\nRestoring original Git config...\n${NC}"
while IFS='=' read -r key val ; do git config --global "$key" "$val" ; done < ~/.gitconfig.backup

echo -e "${BG}\nSuccessfully bumped to v$new_ver$([[ "$*" == *"--publish"* ]] && echo ' and published to npm')!${NC}"
