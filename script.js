console.log("CND script loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
function buyData(data, price) {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let network = document.getElementById("network").value;

    if (phone.trim() === "") {
        alert("Please enter your phone number.");
        return;
    }

    let confirmOrder = confirm(
        "CND INSTANT DATA BUNDLE\n\n" +
        "Network: " + network +
        "\nPackage: " + data +
        "\nAmount: GHS " + price +
        "\nReceiver: " + phone +
        "\n\nContinue to WhatsApp?"
    );

    if(confirmOrder){
alert("Processing your order...");
        let orderId = "CND" + Date.now();
        let orderDate = new Date().toLocaleString();

let order = {
    id: orderId,
    date: orderDate,
    name: name,
    phone: phone,
    network: network,
    data: data,
    price: price,
    status: "Pending"
};

addDoc(collection(db, "orders"), order)
.then(() => {

    console.log("Order saved to Firebase");

    let message =
    "CND INSTANT DATA BUNDLE\n\n" +
    "Order ID: " + orderId +
    "\nDate: " + orderDate +
    "\nCustomer Name: " + name +
    "\nPhone: " + phone +
    "\nNetwork: " + network +
    "\nData Package: " + data +
    "\nAmount: GHS " + price;

    window.location.href =
    "https://wa.me/233543553686?text=" + encodeURIComponent(message);

})

.catch((error) => {

    alert("Order failed. Try again.");
    console.error(error);

});

}

window.buyData = buyData;