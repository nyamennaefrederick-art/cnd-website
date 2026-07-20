import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


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

onAuthStateChanged(auth, (user)=>{

if(!user){

window.location.href = "admin-login.html";

}

});
const db = getFirestore(app);


async function loadOrders(){

const orders = await getDocs(collection(db,"orders"));

let box = document.getElementById("orders");

box.innerHTML = "";

orders.forEach((doc)=>{

let order = doc.data();

box.innerHTML += `

<div class="order">

<p><b>Name:</b> ${order.name}</p>
<p><b>Phone:</b> ${order.phone}</p>
<p><b>Network:</b> ${order.network}</p>
<p><b>Package:</b> ${order.package}</p>
<p><b>Price:</b> GHS ${order.price}</p>
<p><b>Status:</b> ${order.status}</p>

</div>

`;

});

}

loadOrders();