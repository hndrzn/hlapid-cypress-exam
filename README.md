# Cypress Exam 🚀

This Cypress Exam tests the **Test Automation Quiz App's**  Registration and Log-in fucntions. It conducts tests for the **Registration, Login, as well as one non-deterministic path for the registration**, with the flexibility to run them in **headless** and **headed** modes. 🌐

## Table of Contents 📚

- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Headless Mode](#headless-mode)
  - [Headed Mode](#headed-mode)
  
---

## Installation 🛠️

### 1. Create a Project Folder
- On your desktop, create a folder named 'Cypress-Projects'.

### 2. Clone the Repository

```bash
cd /Desktop/Cypress-Projects
git clone https://github.com/hndrzn/hlapid-cypress-exam.git
```
### 3. Initializing the project

```bash
cd hlapid-cypress-exam
npm init -y
npm install cypress -save-dev
npm install @faker-js/faker --save-dev
``` 

## Running the Tests 🏃‍♂️
- We have a spec file (a Test Code/File) for the Login and Registration features, and they can be run in both headless and headed modes.

### Headless Mode 🧑‍💻 (Without Browser UI)

1. Login Test (Headless)
- To run the login test in headless mode:

```bash
npm run taph-test
```

### Headed Mode 🖥️ (With Browser UI)
- In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.

1. Login Test (Headed)
- To run the login test in headed mode:

```bash
npx cypress open
```
- Select E2E Testing
- Select Google Chrome browser
- Click "Start E2E Testing in Chrome"

