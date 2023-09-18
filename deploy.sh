rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:zengzhui/king-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://zengzhui.github.io/king-ui-website/