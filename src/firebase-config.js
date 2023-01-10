// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBnO4Y8yiAOPQkZedGdyI1opgxkjXJNhxM",
	authDomain: "wall-street-crushers.firebaseapp.com",
	databaseURL:
		"https://wall-street-crushers-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "wall-street-crushers",
	storageBucket: "wall-street-crushers.appspot.com",
	messagingSenderId: "145306949508",
	appId: "1:145306949508:web:b437a1811e27aebf14efd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { app, database };