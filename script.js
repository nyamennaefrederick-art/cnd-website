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
        let orderDate = new Date().toLocaleString();

        let order = {
            id: orderId,
            date: orderDate,
            name: name,
            phone: phone,
            network: network,
            data: data,
            price: price
        };

        let orders = JSON.parse(localStorage.getItem("CNDOrders")) || [];

        orders.push(order);

        localStorage.setItem("CNDOrders", JSON.stringify(orders));


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
    }
}
