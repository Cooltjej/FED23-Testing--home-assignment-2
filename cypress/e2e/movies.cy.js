/// <reference types="cypress" />

describe('Mostly mundane movies search', () => {
	beforeEach(() => {
		cy.visit('https://mostly-mundane-movies.netlify.app/')
	})

	it('Can not search when searchfield is empty', () => {
		cy.get('input.form-control').should('have.value', '')
		cy.get('button[type="submit"]').click();
		cy.get('div[role="alert"]').children('p').should('have.text', 'You tried to search, good for you! 👀');
	})

	it('Can not search when search field does not have atleast 3 characters', () => {
		cy.get('input.form-control').type('Tj');
		cy.get('button[type="submit"]').click();
		cy.get('div[role="alert"]').children('p').should('have.text', 'Search query must be at least 3 characters long, duh ^^ 🙄');
	})

	it('Can search for the matrix and get x hits', () => {
		cy.get('input.form-control').type('The Matrix');
		cy.get('button[type="submit"]').click();
		cy.get('.movie-list').children('div.movie-list-item').its('length').should('be.gt', 0)
	})

	it('Should show spinner when loading', () => {
		cy.intercept('GET', 'https://www.omdbapi.com/?s=*', (req) => {
		}).as('omdbRequest');

		cy.get('#loading-wrapper').should('not.exist');
		cy.get('input.form-control').type('Disney');
		cy.get('button[type="submit"]').click();
		cy.get('#loading-wrapper').should('be.visible');
		cy.wait('@omdbRequest');
		cy.get('#loading-wrapper').should('not.exist');
	})

	it.only('Should have the correct movie ID', () => {
		cy.intercept('GET', 'https://www.omdbapi.com/?i=*', (req) => {
		}).as('omdbRequest');

		cy.get('input.form-control').type('The Matrix');
		cy.get('button[type="submit"]').click();
		cy.get('.card-link').first().click();

		cy.wait('@omdbRequest').then((interception) => {
			return interception.response.body.imdbID;
		}).should('equal', 'tt0133093')
	})

})
