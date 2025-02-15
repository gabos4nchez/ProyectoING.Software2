const orderDateInput = document.getElementById("order-date");
const deliveryTimeInput = document.getElementById("delivery-time");
const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const orderDate = new Date(orderDateInput.value);
    const deliveryTime = parseInt(deliveryTimeInput.value);

    if (isNaN(orderDate) || isNaN(deliveryTime)) {
        resultDiv.textContent = "Por favor, ingresa una fecha y hora válidas y un tiempo de entrega en horas.";
        return;
    }

    const deliveryDate = new Date(orderDate.getTime() + deliveryTime * 60 * 60 * 1000);
    const formattedDeliveryDate = deliveryDate.toLocaleString();

    resultDiv.textContent = `La entrega estimada es el: ${formattedDeliveryDate}`;
});