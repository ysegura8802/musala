describe ("Test suite", () => {
    //To visit the starting address before each Test
    beforeEach( 'cargar URL', function(){
         cy.fixture('configMusala')
        .then(function(musala){
            this.musala= musala
            cy.visit (this.musala.urlMusala, {timeout:20000})
            
        })
       
    })
        
    it ("Tes Case 1", () => {
        cy.get('.contact-label > span').click({force:true})
        cy.get('#cf-1').type("Yordani")
        //Randomly selecting an email from the InvalidEmail.json file
        cy.fixture('invalidEmail.json').then(({ email }) => {
            const k = Cypress._.random(email.length - 1)
            expect(k, 'random user index').to.be.within(0, email.length - 1)
            const testEmail = email[k]
            cy.get('#cf-2').type(testEmail["email"])
        })
        cy.get('#cf-3').type("+5353016705")
        cy.get('#cf-4').type("Ejemplo")
        cy.get('#cf-5').type("Esto es una prueba de Musala Soft")
        cy.get('p > .wpcf7-form-control').click()
        cy.get('.wpcf7-not-valid-tip', {timeout:20000}).contains("The e-mail address entered is invalid.")
       })
    

   it ("Tes Case 2", () => {
         
        cy.get('#menu-main-nav-1 > .menu-item-887 > .main-link').click({force:true})
        cy.url().should('eq', 'https://www.musala.com/company/')
        cy.get('.cm-content > h2').contains('Leadership')
        cy.get('[href="https://www.facebook.com/MusalaSoft?fref=ts"] > .musala').click({force:true})
         // cy.url().should('eq', 'https://www.facebook.com/MusalaSoft?fref=ts')
                 
    })
   
    it ("Tes Case 3", () => {
        cy.get('#menu-main-nav-1 > .menu-item-478 > .main-link').click({force:true})
        cy.get('.link-wrapper > a > .contact-label').click()
        cy.url().should('eq', 'https://www.musala.com/careers/join-us/')
        cy.get('#get_location').select("0")
        cy.get(':nth-child(10) > .card-container > .card-jobsHot__link > .card > .front').click()
        cy.get(':nth-child(1) > .pull-right > .content-title > h2').contains('General description')
        cy.get(':nth-child(1) > .pull-left > .content-title > h2').contains('Requirements')
        cy.get(':nth-child(2) > .pull-right > .content-title > h2').contains('Responsibilities')
        cy.get(':nth-child(2) > .pull-left > .content-title > h2').contains('What we offer')
        cy.contains("Apply")
        cy.get('.fancybox > .wpcf7-form-control').click()
        //Randomly selecting an email from the InvalidEmail.json file
        cy.fixture('invalidEmail.json').then(({ email }) => {
            const k = Cypress._.random(email.length - 1)
            expect(k, 'random user index').to.be.within(0, email.length - 1)
            const testEmail = email[k]
            cy.get('#cf-2').type(testEmail["email"])
        })
        cy.get('#cf-3').type("phone")

        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip').contains("The field is required.")
        cy.get(':nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip').contains("The e-mail address entered is invalid.")
     
    })
   
     it ("Tes Case 4", () => {
        cy.get('#menu-main-nav-1 > .menu-item-478 > .main-link').click({force:true})
        cy.get('.link-wrapper > a > .contact-label').click()
        cy.get('#get_location').select("Sofia")
        cy.get('.card-jobsHot__link')
        .then($puestosSofia=>{
            const sofia= $puestosSofia.text()
            cy.log("Sofia")
            cy.log("Position and Info: " + sofia)
        })
       cy.get('#get_location').select("Skopje")
       cy.get('.card-jobsHot__link')
        .then($puestosSKopje=>{
            const skopje= $puestosSKopje.text()
            cy.log("Skopje")
            cy.log("Position and Info: " + skopje)
        })
     })
    
})