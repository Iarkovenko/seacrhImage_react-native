# Setup

1.  Clone current repository.
2.  yarn install && npm install

3.  #To jetify / convert node_modules dependencies to AndroidX

    First, use Android Studio's refactoring tool to convert your app re: the Android developer docs

        npm install --save-dev jetifier
        npx jetify
        npx react-native run-android (your app should correctly compile and work)
        Call npx jetify run in the postinstall target of your package.json (Any time your dependencies update you have to jetify again)

    On iOS, to complete the linking, make sure you have Cocoapods installed. Then run:

         cd ios
         pod install
         cd ..

# Run the app

Then run the expo server using:  
`yarn start` or `npm run start`

_For Android:_  
Open the `android/` directory in Android Studio and Run/Build the project from there.

_For iOS:_  
Open the `ios/` directory in Xcode and Run/Build the project from there.
