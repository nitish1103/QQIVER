# Install ionic and cordova

npm install -g ionic cordova

#run ionic app in browser

ionic serve

#run ionic app in browser but in mobile size view/ionic-lab

ionic serve --l

#run ionic on android

1. Development mode

ionic cordova run android

2. Production mode

ionic cordova run android --prod

3. Production + Release mode

ionic cordova run android --prod --release

#build android apk

ionic cordova build android --prod --release

#hc-lib is mentioned in the package.json, if you want to install it explicitly

npm install hc-lib
