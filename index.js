const prices = {
    "Chicken Biryani": 100,
    "Mutton Biryani": 150,
    "Fish Biryani": 200,
    "Prawns Biryani": 250,
    "Gulab Jamun": 10
};

const orderItems = [];
const orderList = document.getElementById("order-items");
const totalBillElement = document.getElementById("total-bill");
let totalBill = 0;

// Add items to order
document.getElementById("add-to-order").addEventListener("click", () => {
    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (quantity > 0) {
        const price = prices[item] * quantity;
        orderItems.push({ item, quantity, price });

        // Add to order list display
        const listItem = document.createElement("li");
        listItem.textContent = `${item} x ${quantity} = RS ${price}`;
        orderList.appendChild(listItem);

        // Update total bill
        totalBill += price;
        totalBillElement.textContent = `Total: RS ${totalBill}`;
    } else {
        alert("Please enter a valid quantity greater than 0.");
    }
});

// Handle payment submission
document.getElementById("submit-order").addEventListener("click", () => {
    const paymentMethod = document.getElementById("payment").value;
    const paymentMessage = document.getElementById("payment-message");

    if (orderItems.length === 0) {
        paymentMessage.textContent = "Your order is empty. Please add items before proceeding.";
        return;
    }

    if (paymentMethod === "cash") {
        paymentMessage.textContent = "Sorry, cash payments are not accepted. Please choose online payment.";
    } else {
        paymentMessage.textContent = `Please send RS ${totalBill} to this number: 9398669434.`;
    }
});
