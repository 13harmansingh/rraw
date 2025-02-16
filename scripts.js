document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("cocktail-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".cocktail-item").forEach(item => {
        item.addEventListener("click", () => {
            modalTitle.textContent = item.getAttribute("data-name");
            modalImage.src = item.getAttribute("data-image");
            modalDescription.textContent = item.getAttribute("data-description");
            modal.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".cocktail-modal-content")) {
            modal.classList.remove("show");
        }
    });
});
