# Standard Operating Procedure (SOP): Front-End Web Development & Features

**Document ID:** SOP-TCAR-001  
**Project Name:** Twin Cities Animal Rescue — Web Platform  
**Client:** Twin Cities Animal Rescue (Client C)  
**Repository:** desmondeverett/twin-cities-rescue  
**Task Scope:** Touchstone Task 4 — Interactivity and Client-Side Data  
**Primary Tech Stack:** HTML5, CSS3, JavaScript (ES6)

---

## 1. Purpose & Core Development Guidelines

This Standard Operating Procedure (SOP) defines the engineering standards, code conventions, and technical implementations for the **Twin Cities Animal Rescue** web platform. 

### 1.1 Technical Stack & Standards
* **HTML5:** All structural markup must maintain semantic standards (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure high accessibility (WCAG compliance) and SEO readiness.
* **CSS3:** Styling must be centralized in `style.css` using dynamic Flexbox layouts, uniform color palettes, scalable typography tokens, and responsive breakpoints.
* **JavaScript (ES6+):** All dynamic behavior is managed via client-side JavaScript in `script.js` using modular event listeners and DOM manipulation without external framework dependencies.

---

## 2. Dynamic Feature Specifications & Code Architecture

### 2.1 Interactive Favorite Pet Tracker
* **Technical Implementation:** Managed via event delegation and click event listeners targeting the spotlight DOM elements on `index.html`.
* **Execution Workflow:** 
  1. Captures user click actions on the **"Save to Favorites"** UI button.
  2. Dynamically updates UI elements and state classes to reflect saved selections.
  3. Appends/removes selected pet objects from the target data array.

### 2.2 Data Persistence (`localStorage` API)
* **Technical Implementation:** Utilizes the browser's native `window.localStorage` key-value engine for offline state persistence.
* **Execution Workflow:**
  1. Serializes favorite arrays into JSON strings via `JSON.stringify()` prior to writing to browser storage.
  2. Parses existing records using `JSON.parse(localStorage.getItem(...))` upon DOM content load (`DOMContentLoaded`) to re-hydrate state across page reloads and user sessions.

### 2.3 Client-Side Form Validation Logic
* **Technical Implementation:** Implemented on the contact form (`contact.html`) to intercept default form submission behavior (`e.preventDefault()`).
* **Validation Criteria:**
  1. Checks non-empty values across mandatory input fields.
  2. Validates string structure against standard email Regular Expressions (`RegExp`).
* **DOM Error Handling:** Dynamically injects targeted inline error messages adjacent to failing input elements while preserving input values to maintain optimal user experience.

---

## 3. Maintenance, Testing & Deployment Pipeline

### 3.1 Local Development & Code Review
* Keep scripts modular, non-blocking, and cleanly separated across `index.html`, `style.css`, and `script.js`.
* Ensure cross-browser compatibility across modern render engines (Blink, Gecko, WebKit).

### 3.2 Continuous Deployment
* **Hosting Platform:** GitHub Pages
* **Deployment Trigger:** Automatic build pipeline executes on every push to the `main` branch.
