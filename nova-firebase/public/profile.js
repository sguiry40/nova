import {getAuth} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js"

const auth = getAuth()
const user = auth.currentUser

console.log(user)