import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDpD5ShNaSByzGPxF1FlNGS0zgRZPAtnDg",
  authDomain: "cnd-data-bundle.firebaseapp.com",
  projectId: "cnd-data-bundle",
  storageBucket: "cnd-data-bundle.firebasestorage.app",
  messagingSenderId: "667849737543",
  appId: "1:667849737543:web:a8571f7123483b4765f862"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


window.login = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


if(email === "" || password === ""){

alert("Enter email and password");
return;

}


try{

await signInWithEmailAndPassword(auth,email,password);

localStorage.setItem("cndAdmin","logged");

alert("Login successful");

window.location.href="admin.html";

}catch(error){

alert("Login failed: " + error.message);

}

}