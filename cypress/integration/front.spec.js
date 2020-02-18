describe('Front', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
  });

  it.only('has a single menu', () => {
    cy.get('.navbar');
  });
});
