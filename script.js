function buyData(data, price){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let network = document.getElementById("network").value;


if(name.trim()===""){
alert("Please enter your name");
return;
}

if(phone.trim()===""){
alert("Please enter your phone number");
return;
}


let message =
"Hello CND Instant Data Bundle\n\n"+
"Name: "+name+
"\nPhone: "+phone+
"\nNetwork: "+network+
"\nPackage: "+data+
"\nPrice: GHS "+price;


let whatsapp =
"https://wa.me/233543553686?text="+encodeURIComponent(message);


window.open(whatsapp,"_blank");

}