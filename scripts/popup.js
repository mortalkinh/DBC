document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    // Datos del popup para cada skill
    const skillTexts = {
        "Rap y Trap Nacional": "- Cantante Nacional. \n- DBC es mi marca personal.\n - Cuento con varios álbumes y singles que les puede gustar.",
        "Aparte del dinero me gusta la honestidad": " - HOOD WALK.\n - TONALIDAD.\n - PELO.",
        "Singles": " - NO LIMITS.\n  - SAFARI.\n - Mi bando."
    };
    
    

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const skillTitle = this.getAttribute('data-skill');
            popupTitle.textContent = skillTitle;
            popupText.textContent = skillTexts[skillTitle] || "No hay información adicional disponible.";
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
