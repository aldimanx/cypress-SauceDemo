class PegiPegi{

frmSearch(){
    return cy.get('#Tujuan')
}
lstKota(kota){
    return cy.xpath(`(//strong[text()="${kota}"])[1]`)
}
btnCari(){
    return cy.xpath('//div[text()="Cari Hotel"]')
}
title(){
    return cy.xpath('//p[@class="navbar__title"]')
}

}
export default PegiPegi