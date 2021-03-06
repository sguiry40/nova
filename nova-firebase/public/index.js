import { collection, setDoc, getFirestore, addDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js"

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

function signup(){
    let userEmail = document.getElementById("email_field").value;
    let userPass = document.getElementById("password_field").value;

    createUserWithEmailAndPassword(getAuth(), userEmail, userPass)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            try {
                const docRef = await addDoc(collection(db, "users", user.uid, {merge: true}), {
                    name: user.name
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            window.location.replace('profile.html')
        })
        .catch(function(error) {
            let errorMessage = error.message;

            window.alert("Error : " + errorMessage);
        });
}

function login(){

    let userEmail = document.getElementById("email_field").value;
    let userPass = document.getElementById("password_field").value;

    signInWithEmailAndPassword(getAuth(), userEmail, userPass)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            // try {
            //     const docRef = await addDoc(collection(db, "users", user.uid, {merge: true}), {
            //         name: user.name
            //     });
            //     console.log("Document written with ID: ", docRef.id);
            // } catch (e) {
            //     console.error("Error adding document: ", e);
            // }
            window.location.replace('profile.html')
        })
        .catch(function(error) {
            let errorMessage = error.message;

            window.alert("Error : " + errorMessage);
        });

    createUserWithEmailAndPassword(getAuth(), userEmail, userPass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            try {
                const docRef = doc(db, "users", user.uid);
                setDoc(docRef, {name: user.name }, { merge: true});
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            window.location.replace('profile.html')
        })
        .catch(function(error) {
            let errorMessage = error.message;
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

function logout() {
    signOut(getAuth()).then(() => {
        console.log("signed out");
    }).catch((error) => {
        console.log(error);
    })
    window.location.replace('index.html');
}
if (document.getElementById("login_button") != null) {
    document.getElementById("login_button").addEventListener("click", login, false);
}
if (document.getElementById("signup_button") != null) {
    document.getElementById("signup_button").addEventListener("click", signup, false)
}
if (document.getElementById("logout_button") != null) {
    document.getElementById("logout_button").addEventListener("click", logout, false);
}

// function addNewInfo() {
//     db.collection("users").document(getAuth().user.userId).update({"name": document.getElementById("starting").value,
//     "age": document.getElementById("OutputIdAge").value, "gender": document.getElementById("gender").value})
//
//     console.log("added new info to database");
// }

// async function submit() {
//     console.log("submitted");
//
//     let name = document.getElementById("starting").value;
//     let gender = document.getElementById("gender").value;
//     let pronouns = document.getElementById("pronouns").value;
//     let preferred_gender = document.getElementById("preferred_gender").value;
//
//     await setDoc(doc(db, "users", "85HDG1FCgKcIEoEq2yIQ9x1G0Gs2"), {
//         name: "DADWAWD",
//         age: "8",
//         gender: "Maleeee"
//     });
// }
//
// async function newFunc() {
//     // await updateDoc(doc(db, "users", getAuth().user.uid), {name: "lolol", age: 20 });
//     await setDoc(doc(db, "users", "85HDG1FCgKcIEoEq2yIQ9x1G0Gs2"), {
//         name: "DADWAWD",
//         age: "8",
//         gender: "Maleeee"
//     });
// }

// // Add a new document in collection "cities"
// await setDoc(doc(db, "users", "85HDG1FCgKcIEoEq2yIQ9x1G0Gs2"), {
//     name: "Atta",
//     age: "4141",
//     gender: "Mddale"
// });