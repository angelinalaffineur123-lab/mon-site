// ===== PANIER =====
let cart = [];
let total = 0;

// ===== AFFICHER UNE PAGE =====
function showPage(id) {
  const page = document.getElementById(id);
  if (!page) return; // sécurité si l'ID n'existe pas
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  page.classList.add("active");
}

// ===== AJOUTER UN PRODUIT =====
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// ===== SUPPRIMER UN PRODUIT =====
function removeItem(index) {
  if (index < 0 || index >= cart.length) return;
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// ===== METTRE À JOUR L'AFFICHAGE DU PANIER =====
function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("total").textContent = total.toFixed(2);

  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ${item.price.toFixed(2)} €
      <button onclick="removeItem(${i})">❌</button>
    `;
    list.appendChild(li);
  });
}

// ===== CHECKOUT =====
function checkout() {
  if (cart.length === 0) {
    alert("Ton panier est vide 🐾");
    return;
  }
  alert("Merci pour ta commande 🐱 (paiement fictif)");
  cart = [];
  total = 0;
  updateCart();
}

// ===== ASSURER QUE TOUT LE DOM EST CHARGÉ =====
document.addEventListener("DOMContentLoaded", () => {
  updateCart(); // initialise le panier
  showPage("home"); // affiche la page d'accueil au démarrage
});
