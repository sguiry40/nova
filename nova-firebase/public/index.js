import { collection, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"
import {getAuth} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js"

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAScu_-xjhfkbmDqjSmO71zSIhU-j1tlD0",
    authDomain: "nova-f2979.firebaseapp.com",
    databaseURL: "https://nova-f2979-default-rtdb.firebaseio.com",
    projectId: "nova-f2979",
    storageBucket: "nova-f2979.appspot.com",
    messagingSenderId: "490015709518",
    appId: "1:490015709518:web:e87ba1ea9b98e810a8a61f",
};

const app = initializeApp({
    apiKey: "AIzaSyAScu_-xjhfkbmDqjSmO71zSIhU-j1tlD0",
    authDomain: "nova-f2979.firebaseapp.com",
    databaseURL: "https://nova-f2979-default-rtdb.firebaseio.com",
    projectId: "nova-f2979",
    storageBucket: "nova-f2979.appspot.com",
    messagingSenderId: "490015709518",
    appId: "1:490015709518:web:e87ba1ea9b98e810a8a61f",
})

// Get a reference to the database service
const db = getFirestore();

function login(){

    let userEmail = document.getElementById("email_field").value;
    let userPass = document.getElementById("password_field").value;

    getAuth().signInWithEmailAndPassword(userEmail, userPass)
    .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        try {
            const docRef = await setDoc(collection(db, "users", user.uid, {merge: true}), {
                name: user.name
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })
    .catch(function(error) {
        let errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });
    
    // example of getting data
    //const docSnapshot = await getDoc(doc(db, "users", user.uid);
	//if (docSnapshot.exists()) {
	//	console.log(docSnapshot.data);
	//}
	
	// example of updating data
	//await updateDoc(doc(db, "users", user.uid), { age: 20 });

}

getAuth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    let uid = user.uid;
    console.log(user);
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

console.log(db);
