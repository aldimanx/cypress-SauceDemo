import randomizer from "../support/randomizer"

let rand = new randomizer
const web = "https://reqres.in/"
let name = rand.makeName()
let job = rand.makeid(8)

describe('api testing', () => {

    it('list user', () => {
        cy.request('GET', web+'api/users?page=2')
            .then((resp) => {
        //    cy.log(JSON.stringify(resp.body.data))
                
               const data = resp.body.data
               let length = data.length

               expect(resp.status).to.equal(200);
               for(let i = 0; i < length; i++){
                    expect(data[i]).to.be.not.null
                    expect(data[i]).to.have.property('id').and.to.be.a('number')
                    expect(data[i]).to.have.property('email')
               }
            })
    })

    it('post user', () => {
        cy.request({
            method:'POST', 
            url: web+'api/users',
            body: {
                "name": name,
                "job": job,
            }
        })
            .then((resp) => {
                cy.log(name)
                cy.log(JSON.stringify(resp.body))
                
               expect(resp.status).to.equal(201);
               expect(resp.body.name).to.be.eq(name)
               expect(resp.body.job).to.be.eq(job)

              
            })
    })
})