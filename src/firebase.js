// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyD90jokLWd_NvQbxJchErY8KXdLWpTtWWg",
	authDomain: "whatapps-cl.firebaseapp.com",
	projectId: "whatapps-cl",
	storageBucket: "whatapps-cl.appspot.com",
	messagingSenderId: "584324015152",
	appId: "1:584324015152:web:a409a557d3bc41c73ab9f5",
	measurementId: "G-K77Y11Y0DR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
