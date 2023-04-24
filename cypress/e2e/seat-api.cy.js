describe('API Automation', () => {
  it('Check the structure of the json', () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/repositories/132619461",
      headers: {
        accept: "application/json"
      }
    }).then(response => {
      cy.fixture('response').then((response) => {
        for (let key in response) {
          expect(response).to.have.property(key)
        }
      })
    })
  })

  it('Check for the presence of the word “seatcode” in the field “owner->login”', () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/repositories/132619461",
      headers: {
        accept: "application/json"
      }
    }).then(response => {
      let body = response.body
  
      expect(body.owner.login).to.equal('seatcode')
    })
  })
})