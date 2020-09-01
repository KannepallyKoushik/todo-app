 # [TODO-App](https://todo-app-da655.web.app/ "Click Here ")
 A Well-designed to-do app that fit into your workflow so you can get back to what you're supposed to be doing.This App makes it fast to add and organize tasks.

## Available Scripts

 Move to project directory and run this below command to install the dependencies

### `npm install`
1.Go to console.firebase.com<br />
2.Create a project in Firebase<br />
3.Create a Database<br />
4.Copy the configuration key from database<br />
5.Create `firebase.js` in src directory in your project<br />
6.Copy the below code and paste it in `firebase.js`<br />
7.Replace the keys in configuration with the code you copied from database<br />

```JavaScript
import firebase from "firebase";
 
const config = {
  // PapiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
```


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any slight errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
