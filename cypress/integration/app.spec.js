it('Home page can be load and navigate to places', () => {
  cy.request('/').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')
  })

  cy.visit('/')
  cy.document().its('contentType').should('eq', 'text/html')
  cy.contains('Hello world!')
  cy.contains('Start').click()
  cy.url().should('include', '/places')
})

it('Places page show all items', () => {
  cy.request('/places').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')
  })

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

  // TODO: check markers are visible
  // cy.get('[data-cy=input-size]').clear().type('1')
  // cy.get('[data-cy=btn-update]').click()
  // cy.get('#map').should('exist')
  // cy.get('#map').children().eq(0).children().eq(0)

  // TODO: check correct places (with mock api?)
})

it('Navigating between pages', () => {
  cy.request('/places').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')
  })

  cy.visit('/places')

  // within range
  cy.get('[data-cy=btn-next]').click()
  cy.url().should('include', '?page=2')
  cy.get('[data-cy=btn-next]').click()
  cy.url().should('include', '?page=3')
  cy.get('[data-cy=btn-prev]').click()
  cy.url().should('include', '?page=2')
  cy.get('[data-cy=input-page]').type('10')
  cy.get('[data-cy=btn-go]').click()
  cy.url().should('include', '?page=10')

  // out of range
  cy.get('[data-cy=input-page]').type('1000')
  cy.get('[data-cy=btn-go]').click()
  cy.url().should('not.include', '?page=1000')
  cy.get('[data-cy=err-goto]').should('exist')
})

it('Update page size', () => {
  cy.request('/places').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')
  })

  cy.visit('/places')

  // within limit <= 50
  cy.get('[data-cy=input-size]').clear().type('15')
  cy.get('[data-cy=btn-update]').click()
  cy.url().should('include', '?size=15')
  cy.get('[data-cy=place-item]').should($items => {
    expect($items).to.have.length(15)
  })

  // out of limit
  cy.get('[data-cy=input-size]').clear().type('51')
  cy.get('[data-cy=btn-update]').click()
  cy.url().should('not.include', '?size=51')
  cy.get('[data-cy=place-item]').should($items => {
    expect($items).not.to.have.length(51)
  })
  cy.get('[data-cy=err-page-size]').should('exist')
})
