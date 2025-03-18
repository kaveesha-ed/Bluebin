document.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("total");
  localStorage.removeItem("orderSummary");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let total = 0;
  let orderSummary = []; // Array to store order summary details

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const product = button.parentNode;
      const productName = product.querySelector("h2").textContent;
      const productImage = product.querySelector("img").src;
      const productPrice = parseFloat(
        product.querySelector("#price").textContent.slice(1)
      );
      const size =
        product.querySelector(`#size${index + 1}`)?.value || "Standard";
      const quantity = parseInt(
        product.querySelector(`#quantity${index + 1}`).value
      );
      const color = product.querySelector("#color")
        ? product.querySelector("#color").value
        : "N/A";

      const item = document.createElement("div");
      item.classList.add("cart-item");
      item.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <p>${productName} - ${size}, ${color}</p>
        <p>$${productPrice.toFixed(2)} each</p>
        <p>Quantity: ${quantity}</p>
        <button class="delete-item">Delete</button> 
      `;
      cartItems.appendChild(item);
      cartItems.appendChild(document.createElement("hr"));
      total += productPrice * quantity;
      totalElement.textContent = `Total: $${total.toFixed(2)}`;

      // Add item to order summary array
      orderSummary.push({
        name: productName,
        price: productPrice,
        size: size,
        color: color,
        quantity: quantity,
      });

      // Add event listener for delete button
      const deleteButton = item.querySelector(".delete-item");
      deleteButton.addEventListener("click", function () {
        total -= productPrice * quantity;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        const nextSibling = item.nextSibling;
        if (nextSibling.tagName === "HR") {
          cartItems.removeChild(nextSibling);
        }
        cartItems.removeChild(item);

        // Remove item from order summary array
        orderSummary = orderSummary.filter((item) => item.name !== productName);
      });
    });
  });

  const checkoutButton = document.getElementById("checkout");
  checkoutButton.addEventListener("click", function () {
    if (total === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
    } else {
      // Save order summary details to local storage
      saveOrderSummaryToLocalStorage(orderSummary, total);

      // Proceed to checkout logic
      // alert('Proceeding to checkout...');
    }
  });

  // Save order summary details to local storage
  function saveOrderSummaryToLocalStorage(orderSummary, total) {
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
    localStorage.setItem("total", total);
    // Redirect to the checkout page after saving the order summary
    location.href = "checkout.html";
  }
});
