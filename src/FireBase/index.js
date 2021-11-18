import {initializeApp} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBgD-lhuP7-M9ZlASRfgGaQGq3kB85mn4",

    authDomain: "candyland-b6848.firebaseapp.com",

    projectId: "candyland-b6848",

    storageBucket: "candyland-b6848.appspot.com",

    messagingSenderId: "983412328482",

    appId: "1:983412328482:web:62c7ea223e9b3e6ddc227b"

};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => {return app};

export { getFirestore };
