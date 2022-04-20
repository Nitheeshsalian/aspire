# aspire 

Nitheesh S 🙂
nitheeshsalian@gmail.com
[https://www.linkedin.com/in/nitheeshsalian/](https://www.linkedin.com/in/nitheeshsalian/)

This is code challenge for Aspire.

This app have created using react native init  `npx react-native init AwesomeProject`

## PrerequisitesCancel changes

- [Node.js](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/)
- [redux](https://redux.js.org/introduction/getting-started)
- [react-redux](https://react-redux.js.org/) 
- [redux-saga](https://redux-saga.js.org/) 
- [axios](https://github.com/axios/axios) 

## Other libraries
- [font-awesome](https://fontawesome.com/start)
- [react-native-svg](https://www.npmjs.com/package/react-native-svg)
- [redux-mock-store](https://github.com/reduxjs/redux-mock-store)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

## Folder structure 


    .src
    ├── actions                   # all actions defined inside this folder
    ├── api                       # required api fetch calls defined in this folder
    ├── assets                    # assets required by app (Images etc)
    ├── components                # components for app
    ├── reduceers                 # reducers are listed inside (index file will have all reducers combined and store will have reducer setup)
    ├── saga                      # saga files are listed here
    └── utils                     # utility functions are listed here
   
   
## To run app

Make sure your machine have required set up to run app <br />
Please follow this [link](https://reactnative.dev/docs/environment-setup) to setting up the development environment
Install dependencies  <br />

`npm install`  <br />

After that install pods for ios  <br />

`cd ios && pod install` <br />

To run app in ios device use command  <br />

`npx react-native run-ios`  <br />

To run app in ios device use command  <br />

`npx react-native run-android`  <br />

Running test cases 

`npm run test`
    
    
## Addtional info
- This app is developed using IOS device, but it works in android device also.
- This app have Layout scalability. 
- This app have mock api call from [jsonplaceholder](https://jsonplaceholder.typicode.com/) is only used for GET request to show working of network request handling by app.
- Server code have not have been implemented.
- I have used redux store as single source of truth
- For getting card details we can implement api call to server.
- Home screen debit card slide implemented using [panrespinder](https://reactnative.dev/docs/panresponder) currently its sliding from top to bottom as per design it should have fixed movement, this should be fixed since i had limited time i have not worked on it.


  
