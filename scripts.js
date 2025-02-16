document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const modal = document.getElementById("cocktail-modal");
  const modalContent = modal.querySelector(".cocktail-modal-content");
  const closeModal = modal.querySelector(".close-btn");
  const cocktailList = document.getElementById("cocktail-list");
  const cocktails = [
    { name: "Mojito", image: "mojito.jpg", description: "A refreshing cocktail with mint, lime, and rum.", ingredients: ["Rum", "Mint", "Lime", "Soda Water", "Sugar"] },
    { name: "Cosmopolitan", image: "cosmopolitan.jpg", description: "A classic vodka-based cocktail with cranberry and lime.", ingredients: ["Vodka", "Cranberry Juice", "Lime Juice", "Triple Sec"] }
  ];

  // Scroll effect on header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Generate cocktail cards
  cocktails.forEach((cocktail, index) => {
    const div = document.createElement("div");
    div.classList.add("cocktail-item");
    div.innerHTML = `<img src="${cocktail.image}" alt="${cocktail.name}">
                     <h3>${cocktail.name}</h3>`;
    div.addEventListener("click", () => openCocktail(index));
    cocktailList.appendChild(div);
  });

  // Open cocktail modal
  function openCocktail(index) {
    const cocktail = cocktails[index];
    modal.querySelector("#modal-img").src = cocktail.image;
    modal.querySelector("#modal-title").textContent = cocktail.name;
    modal.querySelector("#modal-description").textContent = cocktail.description;
    const ingredientList = modal.querySelector("#modal-ingredients");
    ingredientList.innerHTML = "";
    cocktail.ingredients.forEach((ing) => {
      const li = document.createElement("li");
      li.textContent = ing;
      ingredientList.appendChild(li);
    });

    modal.classList.add("show");
    new Howl({ src: ["/sounds/shake.mp3"] }).play();
  }

  // Close cocktail modal
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".cocktail-modal-content")) {
      modal.classList.remove("show");
    }
  });
});
