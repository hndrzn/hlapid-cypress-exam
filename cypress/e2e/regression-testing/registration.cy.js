describe('Software Testing Quiz App Website (Cypress Exam)', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.generateFakerData(); // Generate and save faker data to fixture
  });

  it('Should successfully register and log-in as a "Regular User"', () => {
    // Call the custom command for Registering and Logging-in as a Regular User
    cy.registerAndLoginAsRegularUser();
  });

  it('Should successfully register and log-in as a "Quiz Master"', () => {
   // Call the custom command for Registering and Logging-in as a Quiz Master
    cy.registerAndLoginAsQuizMaster();
  });

  it('Should unsucessfully register when entered credentials are already registered', () => {
    // Call the custom command for unsuccessful registration
    cy.registerWithDuplicateCredentials();
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});