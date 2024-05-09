// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByoA_jC2jyUOEDwD-jYb5996t8O5rXzf8",
    authDomain: "b9a11-ecofood-solutions.firebaseapp.com",
    projectId: "b9a11-ecofood-solutions",
    storageBucket: "b9a11-ecofood-solutions.appspot.com",
    messagingSenderId: "472635003948",
    appId: "1:472635003948:web:5892395ddeb98b37616d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;