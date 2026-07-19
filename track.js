function trackOrder(){

let phone = document.getElementById("phone").value;

let order = localStorage.getItem(phone);

let result = document.getElementById("result");


if(order){

let data = JSON.parse(order);

result.innerHTML = `
<div class="order">
<h3>Order Found ✅</h3>
<p><b>Name:</b> ${data.name}</p>
<p><b>Phone:</b> ${data.phone}</p>
<p><b>Network:</b> ${data.network}</p>
<p><b>Package:</b> ${data.package}</p>
<p><b>Price:</b> GHS ${data.price}</p>
<p><b>Status:</b> ${data.status}</p>
</div>
`;

}else{

result.innerHTML = `
<div class="order">
No order found ❌<br>
Check the phone number and try again.
</div>
`;

}

}