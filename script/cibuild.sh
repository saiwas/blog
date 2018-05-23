#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf _site
mkdir _site

# clone remote repo to "_site"
git clone https://github.com/saiwas/blog.git --branch gh-pages _site

# build with Jekyll into "_site"
bundle exec jekyll build

# push
cd _site
git config user.email $USER_EMAIL
git config user.name $USER_NAME
git add --all
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --force origin gh-pages
