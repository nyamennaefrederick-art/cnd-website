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

let orderId = "CND" + Date.now();

let message =
"CND INSTANT DATA BUNDLE\n\n" +
"Order ID: " + orderId +
"\nCustomer Name: " + name +
"\nPhone: " + phone +
"\nNetwork: " + network +
"\nData Package: " + data +
"\nAmount: GHS " + price +
"\n\nThank you for choosing CND.";

        window.location.href =
        "https://wa.me/233543553686?text=" + encodeURIComponent(message);
    }
}


// Search
document.addEventListener("DOMContentLoaded", function(){

let search = document.getElementById("search");

if(search){
search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(function(card){

card.style.display =
card.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});
}

});