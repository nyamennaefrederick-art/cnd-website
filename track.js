alert("Track JS loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpD5ShNaSByzGPxF1FlNGS0zgRZPAtnDg",
  authDomain: "cnd-data-bundle.firebaseapp.com",
  projectId: "cnd-data-bundle",
  storageBucket: "cnd-data-bundle.firebasestorage.app",
  messagingSenderId: "667849737543",
  appId: "1:667849737543:web:a8571f7123483b4765f862"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


window.trackOrder = async function(){

let phone = document.getElementById("phone").value;

if(phone === ""){
alert("Enter your phone number");
return;
}


const q = query(
collection(db,"orders"),
where("phone","==",phone)
);


let result;

try {
  result = await getDocs(q);
} catch(error) {
  console.log(error);
  alert("Firebase error: " + error.message);
  return;
}


let output = document.getElementById("result");


if(result.empty){

output.innerHTML = "<p>No order found</p>";

}else{

output.innerHTML = "";

result.forEach((doc)=>{

let order = doc.data();

output.innerHTML += `

<div class="order">

<p><b>Name:</b> ${order.name}</p>
<p><b>Network:</b> ${order.network}</p>
<p><b>Package:</b> ${order.package}</p>
<p><b>Price:</b> GHS ${order.price}</p>
<p><b>Status:</b> ${order.status}</p>

</div>

`;

});

}

}