function buyData(data, price){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let network = document.getElementById("network").value;

if(name === "" || phone === ""){
alert("Please enter your name and phone number");
return;
}

let order = {
name: name,
phone: phone,
network: network,
package: data,
price: price,
status: "Pending"
};

// Save order using phone number
localStorage.setItem(phone, JSON.stringify(order));


let message =
"CND Instant Data Bundle Order\n\n"+
"Name: "+name+
"\nPhone: "+phone+
"\nNetwork: "+network+
"\nPackage: "+data+
"\nPrice: GHS "+price;

let url =
"https://wa.me/233543553686?text="+encodeURIComponent(message);

alert("Order placed successfully!");

window.open(url,"_blank");

}