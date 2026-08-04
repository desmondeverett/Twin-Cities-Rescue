# 🐾 Twin Cities Animal Rescue — Website & Interactivity Build

A semantic, responsive, and fully accessible 4-page HTML website built for *Twin Cities Animal Rescue*, a community non-profit dedicated to rescuing, rehabilitating, and rehoming pets across the Minneapolis–St. Paul metropolitan area. 

This repository represents **Touchstone Task 4: Interactivity and Client-Side Data** for *Introduction to Web Development*.

## 📌 Project Overview

- **Client:** Twin Cities Animal Rescue (Client C)
- **Client Type:** Community Non-Profit
- **Target Audience:** Potential adopters, animal foster parents, volunteers, donors, and community partners.
- **Brand Tone:** Hopeful, trustworthy, clear, and action-oriented.
- **Core Technologies:** HTML5, CSS3, and JavaScript (ES6).

## ✨ New JavaScript Features (Touchstone 4)

1. **Interactive Favorite Pet Tracker:** Users can click a "Save to Favorites" button under the Adoptable Pet Spotlight on the home page to save a pet to their list dynamically.
2. **Browser Storage (`localStorage`):** The application saves the user's favorite pet data in the browser's `localStorage` so their preferences persist even after refreshing the page or closing the browser.
3. **Form Validation:** Custom JavaScript validation runs on the contact interest form when submitted, checking for required fields and valid email formats while displaying dynamic error messages near the relevant inputs without wiping user input.

## 🗂️ File Structure

This project utilizes a flat architecture for streamlined navigation, with all files located in the root directory:

twin-cities-rescue/
├── index.html          # Home page (Mission, impact stats, spotlight, and favorites feature)
├── services.html       # Services (Adoption, fostering, and volunteer programs)
├── about.html          # About Us (Story, core values, partners, and video message)
├── contact.html        # Contact Us (Hours, service area, and validated interest form)
├── style.css           # External stylesheet (Consistent palette, typography, and Flexbox layout)
├── script.js           # JavaScript logic (Favorite tracker, localStorage, and form validation)
├── assets/             # Provided media assets
│   ├── images/
│   ├── audio/
│   └── Video/
└── README.md
