// it('Home page can be load and navigate to places', () => {
//   cy.request('/').should((res) => {
//     expect(res.status).to.equal(200)
//     expect(res.headers['content-type']).to.have.string('text/html')
//   })

//   cy.visit('/')

//   cy.document().its('contentType').should('eq', 'text/html')
//   cy.contains('Hello world!')
//   cy.contains('Start').click()
//   cy.url().should('include', '/places')
// })

describe('Places path', () => {
  it('Proper server side render content', () => {
    cy.request('/places').should((res) => {
      expect(res.status).to.equal(200)
      expect(res.headers['content-type']).to.have.string('text/html')
      expect(res.body).to.have.string('Places of Helsinki')
    })
  })

  it('Showing all elements', () => {
    cy.visit('/places')
  
    // all items are exist
    cy.contains('Places of Helsinki')
    cy.get('[data-cy=place-list]').should('exist')
    cy.get('[data-cy=place-item]').should('exist')
    cy.get('[data-cy=pagination]').should('exist')
    cy.get('#map').should('exist')
  
    // have enough number of places (default = 10)
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(10)
    })
  })

  it('Be able to navigate to next page', () => {
    cy.visit('/places')
  
    // within range
    cy.get('[data-cy=btn-next]').click()
    cy.url().should('include', '?page=2')

    // all items are exist
    cy.contains('Places of Helsinki')
    cy.get('[data-cy=place-list]').should('exist')
    cy.get('[data-cy=place-item]').should('exist')
    cy.get('[data-cy=pagination]').should('exist')
    cy.get('#map').should('exist')
  })

  it('Be able to navigate to previous page', () => {
    cy.visit('/places/?page=3')
  
    cy.get('[data-cy=btn-prev]').click()
    cy.url().should('include', '?page=2')

    // all items are exist
    cy.contains('Places of Helsinki')
    cy.get('[data-cy=place-list]').should('exist')
    cy.get('[data-cy=place-item]').should('exist')
    cy.get('[data-cy=pagination]').should('exist')
    cy.get('#map').should('exist')
  
    // have enough number of places (default = 10)
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(10)
    })
  })

  it('Be able to jump page', () => {
    cy.visit('/places')
  
    cy.get('[data-cy=input-page]').type('10')
    cy.get('[data-cy=btn-go]').click()
    cy.url().should('include', '?page=10')

    // all items are exist
    cy.contains('Places of Helsinki')
    cy.get('[data-cy=place-list]').should('exist')
    cy.get('[data-cy=place-item]').should('exist')
    cy.get('[data-cy=pagination]').should('exist')
    cy.get('#map').should('exist')
  
    // have enough number of places (default = 10)
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(10)
    })
  })

  it('Not be able navigate our of range', () => {
    cy.visit('/places')
  
    cy.get('[data-cy=input-page]').type('1000')
    cy.get('[data-cy=btn-go]').click()
    cy.url().should('not.include', '?page=1000')
    cy.get('[data-cy=err-goto]').should('exist')
  })

  it('Be able to update page size between 1 and 50', () => {
    cy.visit('/places')
  
    cy.get('[data-cy=input-size]').clear().type('15')
    cy.get('[data-cy=btn-update]').click()
    cy.url().should('include', '?size=15')
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(15)
    })
  })

  it('Not be able to update page size outside the limit', () => {
    cy.visit('/places/?size=15')
  
    cy.get('[data-cy=input-size]').clear().type('51')
    cy.get('[data-cy=btn-update]').click()
    cy.url().should('not.include', '?size=51')
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(15)
    })
    cy.get('[data-cy=err-page-size]').should('exist')

    cy.get('[data-cy=input-size]').clear().type('0')
    cy.get('[data-cy=btn-update]').click()
    cy.url().should('not.include', '?size=51')
    cy.get('[data-cy=place-item]').should($items => {
      expect($items).to.have.length(15)
    })
    cy.get('[data-cy=err-page-size]').should('exist')
  })
})

// TODO: check markers are visible on map
