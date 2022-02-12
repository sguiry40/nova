// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAScu_-xjhfkbmDqjSmO71zSIhU-j1tlD0",
    authDomain: "nova-f2979.firebaseapp.com",
    databaseURL: "https://nova-f2979-default-rtdb.firebaseio.com",
    projectId: "nova-f2979",
    storageBucket: "nova-f2979.appspot.com",
    messagingSenderId: "490015709518",
    appId: "1:490015709518:web:e87ba1ea9b98e810a8a61f"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

//Detect auth state
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = auth.currentUser;

        if(user != null){

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAScu_-xjhfkbmDqjSmO71zSIhU-j1tlD0",
    authDomain: "nova-f2979.firebaseapp.com",
    databaseURL: "https://nova-f2979-default-rtdb.firebaseio.com",
    projectId: "nova-f2979",
    storageBucket: "nova-f2979.appspot.com",
    messagingSenderId: "490015709518",
    appId: "1:490015709518:web:e87ba1ea9b98e810a8a61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(email, pass) {
    const db = getDatabase(app);
    set(ref(db, 'users/' + userId), {
        email: email,
        password: pass
    });
}

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });
}

function logout(){
    auth.signOut();
}