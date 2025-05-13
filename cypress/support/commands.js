import { generateRegistrationData } from './generatedData';

Cypress.Commands.add('generateFakerData', () => {
  const fakerData = generateRegistrationData();
  cy.writeFile('cypress/fixtures/registrationData.json', fakerData);
});
