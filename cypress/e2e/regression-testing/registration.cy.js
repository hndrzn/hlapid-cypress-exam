describe('Software Testing Quiz App Website (Cypress Exam)', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.generateFakerData(); // Generate and save faker data to fixture
  });

  it('Should successfully register and log-in as a "Regular User"', () => {
    // Read the generated faker data
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

  it('Should successfully register and log-in as a "Quiz Master"', () => {
    // Use cy.fixture() in this it block for the next test case
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

  it('Should unsucessfully register when entered credentials are already registered', () => {
    // Use cy.fixture() to read previously generated data
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
      cy.get('.p-3').should('be.visible').should('contain.text', 'User already registered');
    });
  });
});