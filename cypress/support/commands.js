import { generateRegistrationData } from './generatedData';

Cypress.Commands.add('generateFakerData', () => {
  const fakerData = generateRegistrationData();
  cy.writeFile('cypress/fixtures/registrationData.json', fakerData);
});

// Command: Register and log in as a "Regular User"
Cypress.Commands.add('registerAndLoginAsRegularUser', () => {
  cy.readFile('cypress/fixtures/registrationData.json').then((userData) => {
    // Verify that the Website is accessible and displayed
    cy.visit('/');
    cy.url().should('include', 'testautomation-ph-quiz-app.vercel.app');

    // Click on the 'Register' button
    cy.get('.border')
      .should('exist')
      .should('be.visible')
      .should('include.text', 'Register')
      .click();

    // Verify successful redirection to the registration page
    cy.url().should('include', '/register');

    // Fill-in the input fields with faker data
    cy.get('#username').type(userData.username);
    cy.get('#email').type(userData.email);
    cy.get('#password').type(userData.password);
    cy.get('#confirmPassword').type(userData.confirmPassword);
    cy.get('#role-user').click();

    // Click on the 'Register' button
    cy.get(':nth-child(6) > .w-full').click();

    // Verify successful registration message
    cy.get('.p-3').should('be.visible').should('contain.text', 'Registration successful!');

    // Verify successful redirection to the login page
    cy.url().should('include', '/login');

    // Enter registered credentials
    cy.get('[data-testid="input-username"]').type(userData.username);
    cy.get('[data-testid="input-password"]').type(userData.password);

    // Click on the "Sign in button"
    cy.get('[data-testid="login-button"]').click();
  });
});

// Command: Register and log in as a "Quiz Master"
Cypress.Commands.add('registerAndLoginAsQuizMaster', () => {
  cy.fixture('registrationData').then((userData) => {
    // Verify that the Website is accessible and displayed
    cy.visit('/');
    cy.url().should('include', 'testautomation-ph-quiz-app.vercel.app');

    // Click on the 'Register' button
    cy.get('.border')
      .should('exist')
      .should('be.visible')
      .should('include.text', 'Register')
      .click();

    // Verify successful redirection to the registration page
    cy.url().should('include', '/register');

    // Fill-in the input fields with faker data
    cy.get('#username').type(userData.username);
    cy.get('#email').type(userData.email);
    cy.get('#password').type(userData.password);
    cy.get('#confirmPassword').type(userData.confirmPassword);
    cy.get('#role-quiz-master').click();

    // Click on the 'Register' button
    cy.get(':nth-child(6) > .w-full').click();

    // Verify successful registration message
    cy.get('.p-3').should('be.visible').should('contain.text', 'Registration successful!');

    // Verify successful redirection to the login page
    cy.url().should('include', '/login');

    // Enter registered credentials
    cy.get('[data-testid="input-username"]').type(userData.username);
    cy.get('[data-testid="input-password"]').type(userData.password);

    // Click on the "Sign in button"
    cy.get('[data-testid="login-button"]').click();
  });
});

Cypress.Commands.add('registerWithDuplicateCredentials', () => {
  cy.fixture('registrationData').then((userData) => {
    // Verify that the Website is accessible and displayed
    cy.visit('/');
    cy.url().should('include', 'testautomation-ph-quiz-app.vercel.app');

    // Click on the 'Register' button
    cy.get('.border')
      .should('exist')
      .should('be.visible')
      .should('include.text', 'Register')
      .click();

    // Verify successful redirection to the registration page
    cy.url().should('include', '/register');

    // Fill-in the input fields with faker data
    cy.get('#username').type(userData.username);
    cy.get('#email').type(userData.email);
    cy.get('#password').type(userData.password);
    cy.get('#confirmPassword').type(userData.confirmPassword);
    cy.get('#role-quiz-master').click();

    // Click on the 'Register' button
    cy.get(':nth-child(6) > .w-full').click();

    // Verify error message for duplicate registration
    cy.get('.p-3').should('be.visible').should('contain.text', 'User already registered');
  });
});
