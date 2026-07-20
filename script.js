import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

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


window.buyData = async function(data, price){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let network = document.getElementById("network").value;

let paymentMethod = document.getElementById("paymentMethod").value;
let transactionId = document.getElementById("transactionId").value;
let paymentPhone = document.getElementById("paymentPhone").value;


if(name === "" || phone === ""){
alert("Please enter your name and phone number");
return;
}

if(paymentMethod === "" || transactionId === "" || paymentPhone === ""){
alert("Please enter payment details");
return;
}


try{

let orderRef = await addDoc(collection(db,"orders"),{

name:name,
phone:phone,
network:network,
package:data,
price:price,

paymentMethod: paymentMethod,
transactionId: transactionId,
paymentPhone: paymentPhone,

paymentStatus:"Pending Verification",
status:"Pending",
date:serverTimestamp()

});


alert("Order received successfully");


let message =
"CND Instant Data Bundle Order\n\n"+
"Name: "+name+
"\nPhone: "+phone+
"\nNetwork: "+network+
"\nPackage: "+data+
"\nPrice: GHS "+price+
"\nPayment Method: "+paymentMethod+
"\nTransaction ID: "+transactionId+
"\nPayment Phone: "+paymentPhone;


window.open(
"https://wa.me/233543553686?text="+encodeURIComponent(message),
"_blank"
);


}catch(error){

console.log(error);
alert("Order failed. Try again.");

}

}