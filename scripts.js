// Smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('header nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cocktail Pop-up Logic
const cocktailItems = document.querySelectorAll('.cocktail-item');
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
        <h3>Preparation:</h3>
        <p>${cocktailDetails.preparation}</p>
    `;

    popupContent.appendChild(closeButton);
    popupContainer.appendChild(popupContent);
    popupContainer.classList.add('show');
}

function closePopup() {
    popupContainer.classList.remove('show');
    setTimeout(() => {
        popupContainer.innerHTML = '';
    }, 300);
}

function getCocktailDetails(cocktail) {
    // Example cocktail data
    const cocktails = {
        'mojito': {
            name: 'Mojito',
            image: 'mojito.jpg',
            description: 'A refreshing cocktail with rum, mint, and lime.',
            ingredients: ['Rum', 'Mint', 'Lime', 'Soda Water', 'Sugar'],
            preparation: 'Muddle mint and sugar, add rum, lime juice, and soda water, garnish with mint.'
        },
        'mango-martini': {
            name: 'Mango Martini',
            image: 'mango-martini.jpg',
            description: 'Tropical mango with a dash of lime for the perfect mix.',
            ingredients: ['Mango Purée', 'Vodka', 'Lime Juice', 'Simple Syrup'],
            preparation: 'Shake ingredients together with ice, strain into a chilled martini glass, garnish with lime slice.'
        },
        'spicy-margarita': {
            name: 'Spicy Margarita',
            image: 'spicy-margarita.jpg',
            description: 'For the daring, a spicy twist on the classic margarita.',
            ingredients: ['Tequila', 'Lime Juice', 'Triple Sec', 'Jalapeño', 'Agave Syrup'],
            preparation: 'Muddle jalapeño, shake with tequila, lime juice, triple sec, and agave, strain into a glass with chili-salt rim.'
        }
    };

    return cocktails[cocktail] || {};
}

// Scroll Animations
const scrollElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;
    scrollElements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check for any already visible elements

// Form Validation and Smooth Submission (optional)
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate form inputs (simple example)
    const inputs = reservationForm.querySelectorAll('input');
    let valid = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            valid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (valid) {
        // Simulate form submission (you can integrate actual back-end logic here)
        reservationForm.reset();
        alert('Reservation successfully submitted!');
    } else {
        alert('Please fill out all fields!');
    }
});
