// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cart notification
  const cartNotification = document.getElementById('cart-notification');
  if (cartNotification) {
    document.addEventListener('cart:item-added', function() {
      cartNotification.classList.remove('hidden');
      setTimeout(function() {
        cartNotification.classList.add('hidden');
      }, 3000);
    });
  }
});

// Add to cart functionality
function addToCart(productId, quantity) {
  fetch(window.routes.cart_add_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      items: [{
        id: productId,
        quantity: quantity
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          cartCount.textContent = cart.item_count;
        });
    }

    // Show notification
    document.dispatchEvent(new CustomEvent('cart:item-added'));
  })
  .catch(error => {
    console.error('Error adding to cart:', error);
    alert('Error al añadir el producto al carrito');
  });
}

// Update cart item quantity
function updateCartItem(line, quantity) {
  fetch(window.routes.cart_change_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  })
  .then(response => response.json())
  .then(data => {
    location.reload();
  })
  .catch(error => {
    console.error('Error updating cart:', error);
    alert('Error al actualizar el carrito');
  });
}

// Remove cart item
function removeCartItem(line) {
  updateCartItem(line, 0);
}
