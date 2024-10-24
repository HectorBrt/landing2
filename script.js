let cart = [];
let totalPrice = 0;

// Fonction pour ajouter un article au panier
function addToCart(name, price) {
    // Ajouter l'article au panier
    cart.push({name, price});
    
    // Mettre à jour le total
    totalPrice += parseInt(price);

    // Afficher les articles dans le panier
    updateCartDisplay();
}

// Fonction pour mettre à jour l'affichage du panier
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    // Réinitialiser l'affichage du panier
    cartItemsContainer.innerHTML = "";

    // Afficher chaque article du panier
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} €`;
        cartItemsContainer.appendChild(li);
    });

    // Afficher le total
    cartTotal.textContent = totalPrice;
}

// Sélectionner tous les boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Ajouter un événement à chaque bouton pour gérer l'ajout au panier
addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemName = button.getAttribute("data-name");
        const itemPrice = button.getAttribute("data-price");

        // Ajouter l'article au panier
        addToCart(itemName, itemPrice);
    });
});

// Écouter le clic sur le bouton de connexion pour afficher le formulaire
document.getElementById('login-button').addEventListener('click', function() {
    const loginSection = document.getElementById('login');
    // Toggle pour afficher ou cacher le formulaire
    loginSection.style.display = (loginSection.style.display === "none") ? "block" : "none";
});

// Écouter l'événement de soumission du formulaire de connexion
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Afficher un message de connexion (pour l'exemple)
    alert(`Connexion avec : ${email} et le mot de passe ${password}`);
    
    
