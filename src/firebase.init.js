// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgJkCb2dn_zC3vDvTvmgy9M3YU0dTN2Y8",
    authDomain: "p-hero-assignment-11.firebaseapp.com",
    projectId: "p-hero-assignment-11",
    storageBucket: "p-hero-assignment-11.appspot.com",
    messagingSenderId: "772050671598",
    appId: "1:772050671598:web:1539b77ea9d4c711cae0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth