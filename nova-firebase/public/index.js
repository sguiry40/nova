import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"
import * as admin from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

const app = admin.initializeApp({
    apiKey: "AIzaSyAScu_-xjhfkbmDqjSmO71zSIhU-j1tlD0",
    authDomain: "nova-f2979.firebaseapp.com",
    databaseURL: "https://nova-f2979-default-rtdb.firebaseio.com",
    projectId: "nova-f2979",
    storageBucket: "nova-f2979.appspot.com",
    messagingSenderId: "490015709518",
    appId: "1:490015709518:web:e87ba1ea9b98e810a8a61f"
}, 'nova');

// Get a reference to the database service
const database = getDatabase(app);
