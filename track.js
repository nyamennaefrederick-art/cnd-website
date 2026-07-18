import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpD5ShNaSByzGPxF1FlNGS0zgRZPAtnDg",
  authDomain: "cnd-data-bundle.firebaseapp.com",
  projectId: "cnd-data-bundle",
  storageBucket: "cnd-data-bundle.firebasestorage.app",
  messagingSenderId: "667849737543",
  appId: "1:667849737543:web:a8571f7123483b4765f862",
  measurementId: "G-PB7MHHHMYW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function trackOrder(){

let phone = document.getElementById("phone").value;

let result = document.getElementById("result");

if(phone.trim()==""){
    result.innerHTML = "Enter your phone number";
    return;
}


result.innerHTML = "Searching...";


const q = query(
collection(db,"orders"),
where("phone","==",phone)
);


const snapshot = await getDocs(q);


if(snapshot.empty){

result.innerHTML = "No order found";

return;

}


result.innerHTML="";


snapshot.forEach((doc)=>{

let order = doc.data();


result.innerHTML += `

<div class="order">

<b>Order ID:</b> ${order.id}<br>

<b>Package:</b> ${order.data}<br>

<b>Network:</b> ${order.network}<br>

<b>Amount:</b> GHS ${order.price}<br>

<b>Date:</b> ${order.date}<br>

<b>Status:</b> ${order.status}

</div>

`;

});

}


window.trackOrder = trackOrder;
