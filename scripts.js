document.addEventListener("DOMContentLoaded", () => {
  // Parallax Effect for Hero Section
  const hero = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  });

  // Button Liquid Ripple Effect
  document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("click", function (e) {
      let ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      let x = e.clientX - this.offsetLeft;
      let y = e.clientY - this.offsetTop;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Modal Controls
  const modal = document.querySelector(".cocktail-modal");
  const closeModal = document.querySelector(".close-btn");

  document.querySelectorAll(".cocktail-card").forEach(card => {
    card.addEventListener("click", function () {
      modal.classList.add("show");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".cocktail-modal-content")) {
      modal.classList.remove("show");
    }
  });

  // Search Bar Effects
  const searchInput = document.querySelector(".search-bar input");
  searchInput.addEventListener("focus", () => {
    document.querySelector(".search-bar").classList.add("active");
  });

  searchInput.addEventListener("blur", () => {
    document.querySelector(".search-bar").classList.remove("active");
  });
});
