Playwright End-to-End E-Commerce Test Automation

A clean, beginner-friendly end-to-end (E2E) test suite written in JavaScript using Playwright. This project automates a complete e-commerce user journey on the SauceDemo web store—from logging in and selecting an item to completing the checkout process.

🚀 What This Test Does

The automated script simulates a real user performing an end-to-end shopping workflow:

Navigation: Opens the SauceDemo login page.

Authentication: Logs in using standard user credentials (standard_user).

Validation: Verifies successful redirection to the inventory catalog page.

Product Interaction: Adds the "Sauce Labs Backpack" to the shopping cart.

Cart Verification: Navigates to the cart page to ensure the correct item has been added.

Checkout Flow: Fills out customer information (First Name, Last Name, Postal Code) and proceeds.

Order Completion: Finalizes the checkout and asserts that the success message ("Thank you for your order!") appears.

🛠️ Prerequisites

Make sure you have the following installed on your machine:

Node.js (v16 or higher recommended)

Git

📦 Installation & Setup

Clone the repository:

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_FOLDER>


Initialize and install dependencies:
If you haven't set up your package.json yet, initialize your project and install Playwright:

npm init -y
npm init playwright@latest


(Select JavaScript when prompted, and install the default browsers).

🏃‍♂️ Running the Tests

Run tests in headless mode (default):

npx playwright test


Run tests with the Playwright UI (interactive mode):

npx playwright test --ui


Run tests in headed mode (to watch the browser execute steps):

npx playwright test --headed


View the HTML test report:

npx playwright show-report


📂 Project Structure

├── tests/
│   └── checkout.spec.js   # Main E2E test script
├── package.json           # Project metadata and dependencies
└── playwright.config.js   # Playwright configuration file


💡 Tech Stack

Test Framework: Playwright Test

Language: JavaScript (Node.js)

Target Application: SauceDemo (Demo E-Commerce Site)
