it('Home page can be load', () => {
  cy.visit('http://localhost:3001/')
  cy.request('/').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')
    expect(res.body).to.have.string('Hello world!')
  })
})

it('Places', () => {
  cy.visit('http://localhost:3001/places')
  cy.request('/').should((res) => {
    expect(res.status).to.equal(200)
    expect(res.headers['content-type']).to.have.string('text/html')

    // expect(res.body).to.have.string('Hello world!')
  })
})
