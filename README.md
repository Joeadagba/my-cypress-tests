# Sauce Demo Cypress E2E Automation Project

## 📌 Project Overview

This project contains an end-to-end (E2E) automation test suite for the **Sauce Demo** web application using **Cypress**.

The goal of this project is to automate the main user journey of a standard user, from login through product selection, cart management, and checkout completion.

The automation framework validates critical user flows and ensures the application behaves as expected.

---

## 🚀 Technology Stack

| Tool | Purpose |
|------|---------|
| Cypress | End-to-End Test Automation Framework |
| JavaScript | Programming Language |
| Node.js | Runtime Environment |
| npm | Package Manager |
| Mochawesome Reporter | Test Reporting |

---

## 🧪 Test Environment

Application Under Test:

https://www.saucedemo.com/

Test User:

```
Username: standard_user
Password: secret_sauce
```

---

# 📂 Project Structure

```
my-cypress-tests
│
├── cypress
│   │
│   ├── e2e
│   │   └── sauce-demo.cy.js
│   │
│   ├── fixtures
│   │
│   ├── screenshots
│   │
│   ├── videos
│   │
│   └── support
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# ✅ Automated Test Coverage

The test suite covers the following scenarios:

## Authentication

- ✅ Login with valid standard user credentials
- ✅ Verify successful navigation to inventory page

## Product Management

- ✅ Verify available products are displayed
- ✅ Verify product count
- ✅ Sort products by price
- ✅ Add product to cart
- ✅ Add multiple products to cart
- ✅ Remove product from cart

## Cart

- ✅ Open shopping cart
- ✅ Verify selected products appear in cart
- ✅ Verify cart badge count

## Checkout

- ✅ Navigate to checkout page
- ✅ Enter customer information
- ✅ Verify checkout overview
- ✅ Complete order successfully
- ✅ Verify order confirmation message

## Account

- ✅ Logout successfully

---

# ⚙️ Installation and Setup

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- Git

Verify installation:

```bash
node -v
```

```bash
npm -v
```

---

## Clone Repository

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd my-cypress-tests
```

---

## Install Dependencies

Run:

```bash
npm install
```

This installs Cypress and all required dependencies.

---

# ▶️ Running Tests

## Open Cypress Test Runner

```bash
npx cypress open
```

Select:

```
E2E Testing
```

Choose:

```
sauce-demo.cy.js
```

---

## Run Tests in Headless Mode

Execute:

```bash
npx cypress run
```

---

# 📊 Test Reporting

This project uses **Cypress Mochawesome Reporter** to generate HTML test reports.

After execution, reports are generated inside:

```
cypress/reports/
```

To generate the report:

```bash
npx cypress run
```

Open the generated HTML report in your browser.

---

# 📸 Screenshots and Videos

Cypress automatically captures:

### Screenshots

Location:

```
cypress/screenshots/
```

Generated when tests fail.

### Videos

Location:

```
cypress/videos/
```

Generated during headless test execution.

---

# 🔧 Configuration

Cypress configuration is managed through:

```
cypress.config.js
```

Current configuration includes:

- Mochawesome reporting
- Screenshot capture on failure
- Video recording
- Cypress plugin setup

---

# 🌿 Git Ignore Configuration

The following files are excluded from version control:

```
node_modules/
cypress/screenshots/
cypress/videos/
cypress/downloads/
.DS_Store
```

---

# 📈 Future Improvements

Possible improvements:

- Add Page Object Model (POM)
- Add API testing using Cypress
- Add environment variables for credentials
- Integrate with CI/CD pipelines
- Add Allure reporting
- Add cross-browser testing
- Add test data management

---

# 👨‍💻 Author

**Joseph Adagba**

QA Engineer | Software Tester | Cypress Automation Enthusiast

---

# 📄 License

This project is created for learning, practice, and demonstration purposes.