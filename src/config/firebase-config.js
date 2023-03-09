// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDplRRgand7PyBTofil6atv5yPufZ8kqv8',
    authDomain: 'anime-app-ui.firebaseapp.com',
    projectId: 'anime-app-ui',
    storageBucket: 'anime-app-ui.appspot.com',
    messagingSenderId: '1066912747107',
    appId: '1:1066912747107:web:cfd41e8fae0633aa64f256',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
