// ==========================================
// FEATURE 1: FAVORITE PET TRACKER (Local Storage & Interactivity)
// ==========================================

// 1. Data Structure: An array of objects to hold favorites
let favoritePets = [];

// 2. Function to load saved data from localStorage
function loadFavorites() {
    const storedPets = localStorage.getItem("twinCitiesFavorites");
    
    if (storedPets) {
        // Convert the string back into an array of objects
        favoritePets = JSON.parse(storedPets);
        displayFavorites(); // Update the page dynamically
    }
}

// 3. Function to save a pet when the button is clicked
function savePetToFavorites() {
    // Create an object with the pet's details
    const pet = {
        name: "Adoptable Spotlight Pet"
        savedOn: new Date().toLocaleDateString()
    };

    // Prevent saving the same pet multiple times
    if (favoritePets.length === 0) {
        favoritePets.push(pet); // Add to our array
        
        // Save the array to the browser's localStorage
        localStorage.setItem("twinCitiesFavorites", JSON.stringify(favoritePets));
        
        displayFavorites(); // Update the page
        alert("Awesome! You saved this pet to your favorites.");
    } else {
        alert("You already saved this pet!");
    }
}

// 4. Function to display the favorites on the page
function displayFavorites() {
    const displayDiv = document.getElementById("favorites-display");
    
    // Only run this if we are on the Home page where the div exists
    if (!displayDiv) return; 

    displayDiv.innerHTML = ""; // Clear out any old text

    if (favoritePets.length > 0) {
        // Create a heading and list dynamically
        const heading = document.createElement("h3");
        heading.textContent = "Your Favorite Pets:";
        displayDiv.appendChild(heading);

        const list = document.createElement("ul");
        
        // Loop through our array to display each pet
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
    
    // Only run this if we are on the Contact page where the form exists
    if (!contactForm) return;

    contactForm.addEventListener("submit", function(event) {
        // Clear out any old error messages before checking again
        const oldErrors = document.querySelectorAll(".error-message");
        oldErrors.forEach(function(error) { error.remove(); });

        let isValid = true;

        // Validation 1: Required Field (Name)
        const nameInput = document.getElementById("name");
        if (nameInput && nameInput.value.trim() === "") {
            showError(nameInput, "Please enter your name.");
            isValid = false;
        }

        // Validation 2: Email Format
        const emailInput = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format rule
        if (emailInput && !emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // If any validation failed, STOP the form from submitting
        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Helper function to create red error text right under the input box
function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "#D84315"; // Our Terracotta accent color!
    errorDiv.style.fontSize = "0.9rem";
    errorDiv.style.fontWeight = "bold";
    errorDiv.textContent = message;
    
    // Put the error message exactly after the input field
    inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
}

// ==========================================
// INITIALIZATION: Run when the page loads
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // Setup the Favorite button listener
    const favButton = document.getElementById("favorite-btn");
    if (favButton) {
        favButton.addEventListener("click", savePetToFavorites);
    }
    
    // Load favorites from memory and setup validation
    loadFavorites();
    setupFormValidation();
});