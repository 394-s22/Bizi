# Bizi 2.0

## Setting up Firebase
1. create a project [here](https://console.firebase.google.com/)
2. after the project is created, navigate to 'Realtime Database' within the project
3. start in test mode and change the rules to match:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
4. in the kebab menu (three vertical dots) select 'Import JSON' and upload `businesses.json` found in `src/data`

### Modifying the `firebaseConfig` object in `src/utilities/firebase.ts`
You have to get firebaseConfig from the Firebase web console.

1. In Firebase, click on the "gear" icon in the upper left and select Project settings.
2. Click on the General tab.
3. Scroll down to the 'Your apps' section, and click on the web app you registered for this project.
4. If you haven't registered a web app, do so now by clicking 'Add app'.
5. On the right, click the config radio button under SDK setup and configuration.
6. Copy the JavaScript code you see there into `firebase.ts` as shown below:
```
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "....",
  messagingSenderId: "...",
  appId: "..."
};
```



To update the deployed app, in the terminal, use the commands `npm run build` (see "Available Scripts" below) and then `firebase deploy`.
## Google Maps
Helpful references:
* [The Google Maps React library](https://www.npmjs.com/package/google-maps-react)
* [How to use the Google Maps API w/ React](https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2)

We converted addresses to geolocations (latitude and longitude) with this [React Geocode module](https://www.npmjs.com/package/react-geocode). The `setLocations` function in `src/utilities/map.tsx` does this conversion. Call it to update the database as more businesses join Bizi. Please note that a [Google Maps Geocoding api key](https://developers.google.com/maps/documentation/geocoding) is required.
## Notes on Images
* value icons are located in the `src/logos` folder
* all placeholder images are generated from [Lorem Picsum](https://picsum.photos/)
* replace image urls in the `businesses.json` once businesses images are available and update the database in Firebase
## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:


### `npm install`
Installs all required dependencies.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run pretty`

Formats all .ts, .tsx, and .json files.

## Learn More (React)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
