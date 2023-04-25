describe('API Automation', () => {
  it('Check the structure of the json', () => {
    cy.request({
      method: "GET",
      url: "https://api.github.com/repositories/132619461",
      headers: {
        accept: "application/json"
      }
    }).then(apiResponse => {
      let body = apiResponse.body
      cy.fixture('response').then((fileResponse) => {
        for (let key in fileResponse) {
          if (typeof fileResponse[key] === 'object') {
            for (let subkey in fileResponse[key]) {
              expect(body[key]).to.have.property(subkey)
            }
          } else {
            expect(body).to.have.property(key)
          }
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