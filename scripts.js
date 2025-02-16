document.addEventListener("DOMContentLoaded", () => {
    const cocktailList = document.getElementById("cocktail-list");
    const searchInput = document.getElementById("search");
    const surpriseBtn = document.getElementById("surprise-btn");
    const modal = document.getElementById("cocktail-modal");
    const closeModal = document.getElementById("close-modal");
    const modalName = document.getElementById("modal-name");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-description");
    const modalIngredients = document.getElementById("modal-ingredients");

    let cocktails = [];

    // Fetch cocktail data
    fetch("cocktails.json")
        .then(response => response.json())
        .then(data => {
            cocktails = data;
            displayCocktails(cocktails);
        });

    function displayCocktails(cocktails) {
        cocktailList.innerHTML = "";
        cocktails.forEach(cocktail => {
            const item = document.createElement("div");
            item.classList.add("cocktail-item");
            item.innerHTML = `
                <img src="${cocktail.image || 'default.jpg'}" alt="${cocktail.name}" class="cocktail-img">
                <h2>${cocktail.name}</h2>
            `;
            item.addEventListener("click", () => openModal(cocktail));
            cocktailList.appendChild(item);
        });
    }

    function openModal(cocktail) {
        modal.style.display = "flex";
        modalImg.src = cocktail.image || "default.jpg";
        modalName.textContent = cocktail.name;
        modalDesc.textContent = cocktail.description;
        modalIngredients.innerHTML = cocktail.ingredients.map(i => `<li>${i}</li>`).join("");

        const sound = new Howl({ src: ["/sounds/shake.mp3"] });
        sound.play();
    }

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    searchInput.addEventListener("input", () => {
        const filtered = cocktails.filter(c => c.name.toLowerCase().includes(searchInput.value.toLowerCase()));
        displayCocktails(filtered);
    });

    surpriseBtn.addEventListener("click", () => {
        const randomCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
        openModal(randomCocktail);
    });
});

