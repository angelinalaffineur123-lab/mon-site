let cart = [];
let total = 0;

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("total").textContent = total.toFixed(2);

  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price.toFixed(2)} €
      <button onclick="removeItem(${i})">❌</button>`;
    list.appendChild(li);
  });
}

function checkout() {
  alert("Merci pour ta commande 🐱 (paiement fictif)");
  cart = [];
  total = 0;
  updateCart();
}
