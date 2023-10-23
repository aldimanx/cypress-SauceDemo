import { el } from "@faker-js/faker";
import PegiPegi from "../pages/pagePegi"
import randomizer from "../support/randomizer"

let pagePegis = new PegiPegi
let rand = new randomizer

const kotaList = [
    "Jakarta",
    "Bandung",
    "Bogor",
    "Bali",
    "Depok",
    "Cikarang",
  ];

const kota = kotaList[rand.makeNumberUnderMax(kotaList.length)];

describe('testing', () => {


    it('check hotel', () => {

        cy.visit('https://www.pegipegi.com/')
        pagePegis.frmSearch().click()
        pagePegis.frmSearch().then(($value) =>{

        
        if($value.text = null){
            cy.log("empty value")
        }else{
            pagePegis.frmSearch().clear()
            cy.log("ada value")
        }
    })
        pagePegis.frmSearch().type(kota)
        pagePegis.lstKota(kota).click()
        pagePegis.btnCari().click()
        pagePegis.title().should('include.text', kota)      

    })

    it('check hotel', () => {

        cy.visit('https://www.pegipegi.com/')
        pagePegis.frmSearch().click()
        pagePegis.frmSearch().then(($value) =>{

        
        if($value.text = null){
            cy.log("empty value")
        }else{
            pagePegis.frmSearch().clear()
            cy.log("ada value")
        }
    })
        pagePegis.frmSearch().type(kota)
        pagePegis.lstKota(kota).click()
        pagePegis.btnCari().click()
        pagePegis.title().should('include.text', kota)      
    })
})