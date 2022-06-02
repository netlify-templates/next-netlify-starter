describe('successfully renders', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('displays the welcome text', () => {
    cy.get('main > h1')
    .should('have.text', 'Welcome to my app!');
  })
})