(function ($) {
  "use strict";

  $(document).ready(function() {
      // NAVBAR
      $('.navbar-nav .nav-link').click(function () {
          $(".navbar-collapse").collapse('hide');
      });

      // Ensure navbar stays visible on scroll
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
          let currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
              document.getElementById("navbar").style.top = "0";
          } else {
              document.getElementById("navbar").style.top = "-80px";
          }
          prevScrollpos = currentScrollPos;
      };

      // CART FUNCTIONALITY
      const cart = [];

      // Function to add the price to the cart
      function addToCart(price) {
          cart.push(price);
          alert(`Price $${price} added to cart!`);
      }

      // Function to show the cart content
      function showCart() {
          if (cart.length === 0) {
              alert("Your cart is empty.");
          } else {
              const total = cart.reduce((acc, price) => acc + price, 0);
              alert(`You have ${cart.length} items in your cart. Total: $${total.toFixed(2)}`);
          }
      }

      // Attach click event handlers to price buttons
      $('.price-tag').click(function() {
          const priceText = $(this).text().replace('$', '').trim();
          const price = parseFloat(priceText);
          addToCart(price);
      });

      // Attach event handler for "View Cart" button
      $('.cart-button').click(function() {
          showCart();
      });

  });

})(window.jQuery);
