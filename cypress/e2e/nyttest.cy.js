describe('nyttest.cy.js', () => {
  const url = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(url)
    cy.intercept('GET', `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Cypress.env('api_key')`, 
      { fixture: 'allArticles.json' }).as('getArticles')
  
    

      it('should visit homepage',()=>{
        cy.visit(url)
      })


  })


 
    

  it('should display a header,footer,date range select box,pagination component and pagination buttons', () => {
    cy.get('header > h2')
      .should('be.visible').and('contain', 'The New York Times')

      cy.get('footer').should('contain','The New York Times Company')
      cy.get('.pagination-box').should('be.visible')
      cy.get('.range-box > .form > .range-select-box > #selectbox').should('be.visible').and('contain','Latest')
      cy.get('.page-select-component > button').should('be.visible').and('be.not.disabled')
    })

    it('should display list of articles',()=>{
      cy.get('.artlice-list').should('not.be.empty')
      cy.get('.article-list > .single-article').should('have.length',3)
      .children().should('have.class','article-card')
      .first().within(()=>{
        cy.get('img').should('be.visible')
        cy.get('.card-content > .news-title').should('be.visible').should('not.be.empty')
        cy.get('.card-content > p').should('be.visible').should('not.be.empty')
      })
    })

   


    
})

