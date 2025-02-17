// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal for Cocktail Details
const cocktailItems = document.querySelectorAll('.cocktail-item');
const cocktailModal = document.createElement('div');
cocktailModal.classList.add('cocktail-modal');
document.body.appendChild(cocktailModal);

cocktailItems.forEach(item => {
    item.addEventListener('click', function() {
        const cocktailId = this.getAttribute('data-cocktail');
        const cocktailName = this.querySelector('h3').textContent;
        const cocktailDescription = this.querySelector('p').textContent;
        const cocktailImage = this.querySelector('img').src;
        const ingredients = this.getAttribute('data-ingredients');
        const instructions = this.getAttribute('data-instructions');

        // Populate the modal with cocktail details
        cocktailModal.innerHTML = `
            <div class="cocktail-modal-content">
                <span class="close-btn">&times;</span>
                <h3>${cocktailName}</h3>
                <img src="${cocktailImage}" alt="${cocktailName}">
                <p>${cocktailDescription}</p>
                <h4>Ingredients</h4>
                <ul>
                    ${ingredients.split(',').map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h4>How it's Made</h4>
                <p>${instructions}</p>
            </div>
        `;
        cocktailModal.style.display = 'block';
    });
});

// Close Modal
cocktailModal.addEventListener('click', function(e) {
    if (e.target === cocktailModal || e.target.classList.contains('close-btn')) {
        cocktailModal.style.display = 'none';
    }
});

// Mobile Navigation Toggle
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('header nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Optional: Close menu when a menu item is clicked on mobile
navMenu.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        navMenu.classList.remove('active');
    }
});
