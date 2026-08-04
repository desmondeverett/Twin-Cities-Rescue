// ==========================================
// FEATURE 1: FAVORITE PET TRACKER
// ==========================================

let favoritePets = [];

function loadFavorites() {
    const storedPets = localStorage.getItem("twinCitiesFavorites");
    if (storedPets) {
        favoritePets = JSON.parse(storedPets);
        displayFavorites();
    }
}

function savePetToFavorites() {
    const pet = {
        name: "Adoptable Spotlight Dog",
        savedOn: new Date().toLocaleDateString()
    };

    // Only save if it's not already in the array
    if (favoritePets.length === 0) {
        favoritePets.push(pet);
        localStorage.setItem("twinCitiesFavorites", JSON.stringify(favoritePets));
        displayFavorites();
        alert("Awesome! You saved this pet to your favorites.");
    } else {
        alert("You already saved this pet!");
    }
}

function displayFavorites() {
    const favButton = document.getElementById("favorite-btn");
    if (!favButton) return; 

    // Find or create the display area right below the button
    let displayDiv = document.getElementById("favorites-display");
    if (!displayDiv) {
        displayDiv = document.createElement("div");
        displayDiv.id = "favorites-display";
        favButton.parentNode.insertBefore(displayDiv, favButton.nextSibling);
    }

    displayDiv.innerHTML = ""; // Clear out old content

    if (favoritePets.length > 0) {
        const heading = document.createElement("h3");
        heading.textContent = "Your Favorite Pets:";
        displayDiv.appendChild(heading);

        const list = document.createElement("ul");
        favoritePets.forEach(function(pet) {
            const listItem = document.createElement("li");
            listItem.textContent = pet.name + " (Saved on " + pet.savedOn + ")";
            list.appendChild(listItem);
        });
        displayDiv.appendChild(list);
    }
}

// ==========================================
// FEATURE 2: FORM VALIDATION
// ==========================================

function setupFormValidation() {
    const contactForm = document.querySelector("form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function(event) {
        const oldErrors = document.querySelectorAll(".error-message");
        oldErrors.forEach(function(error) { error.remove(); });

        let isValid = true;

        const nameInput = document.getElementById("name");
        if (nameInput && nameInput.value.trim() === "") {
            showError(nameInput, "Please enter your name.");
            isValid = false;
        }

        const emailInput = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput && !emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
}

function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "#D84315"; 
    errorDiv.style.fontSize = "0.9rem";
    errorDiv.style.fontWeight = "bold";
    errorDiv.textContent = message;
    
    inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
}

// ==========================================
// INITIALIZATION ON PAGE LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const favButton = document.getElementById("favorite-btn");
    if (favButton) {
        favButton.addEventListener("click", savePetToFavorites);
    }
    
    loadFavorites();
    setupFormValidation();
});