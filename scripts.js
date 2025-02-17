// Smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cocktail Pop-up Logic
const cocktailItems = document.querySelectorAll('.cocktail');
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
document.body.appendChild(popupContainer);

cocktailItems.forEach(item => {
    item.addEventListener('click', () => {
        const cocktail = item.getAttribute('data-cocktail');
        showPopup(cocktail);
    });
});

function showPopup(cocktail) {
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', closePopup);

    const cocktailDetails = getCocktailDetails(cocktail);

    popupContent.innerHTML = `
        <h2>${cocktailDetails.name}</h2>
        <img src="${cocktailDetails.image}" alt="${cocktailDetails.name}">
        <p>${cocktailDetails.description}</p>
        <h3>Ingredients:</h3>
        <ul>
            ${cocktailDetails.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Method:</h3>
        <p>${cocktailDetails.method}</p>
    `;
    popupContent.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
    popupContainer.classList.add('active');
}

function closePopup() {
    popupContainer.classList.remove('active');
}

function getCocktailDetails(cocktail) {
    const cocktails = {
        mojito: {
            name: 'Mojito',
            image: 'mojito.jpg',
            description: 'A refreshing cocktail with lime, mint, and rum.',
            ingredients: ['White rum', 'Sugar', 'Mint leaves', 'Lime'],
            method: 'Muddle mint leaves with sugar and lime. Add rum and ice, then top with soda water.'
        },
        "mango-martini": {
            name: 'Mango Martini',
            image: 'mango-martini.jpg',
            description: 'A tropical twist on the classic martini.',
            ingredients: ['Mango puree', 'Vodka', 'Lime juice'],
            method: 'Shake mango puree, vodka, and lime juice with ice, and strain into a martini glass.'
        },
        "spicy-margarita": {
            name: 'Spicy Margarita',
            image: 'spicy-margarita.jpg',
            description: 'A spicy twist on the traditional margarita.',
            ingredients: ['Tequila', 'Lime juice', 'Triple sec', 'Jalapeno'],
            method: 'Shake tequila, lime juice, and triple sec with jalapeno slices, and strain into a glass.'
        }
    };
    return cocktails[cocktail];
}
