function buyData(data, price){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let network = document.getElementById("network").value;

if(name.trim() === "" || phone.trim() === ""){
alert("Please enter your name and phone number");
return;
}

let message =
"CND Instant Data Bundle Order\n\n"+
"Name: "+name+
"\nPhone: "+phone+
"\nNetwork: "+network+
"\nPackage: "+data+
"\nPrice: GHS "+price;

let url =
"https://wa.me/233543553686?text="+encodeURIComponent(message);

window.open(url,"_blank");

}