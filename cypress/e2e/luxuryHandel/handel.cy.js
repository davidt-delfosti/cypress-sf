describe("Casos de Prueba en Luxury",()=>{

    const validarUser={
        email:'qa.test@delfosti.com',
        password:'Delfosti123@'
    }

    beforeEach("Usuario deber hacer login en Luxury",()=>{
    cy.session("Login",()=>{

        cy.visit('https://new2.uat.luxury.pe/')
        cy.get('#btnIniciar').click()
        cy.get('#email').type(validarUser.email)
        cy.get('#password').type(validarUser.password)
        cy.get('#btnIniciar').click()
        cy.get('.fa-times').click()        
        })
    })


    it("Agregar Producto al Carrito - Prueba",()=>{

        cy.visit('https://new2.uat.luxury.pe/inicio')
        cy.get('[style="padding-right: 0.46875rem; padding-left: 0.46875rem; border-radius: 10px;"] > .d-none > .br-10 > carousel.h-100 > .carousel > .carousel-inner > .w-100 > .item > app-custom-link > a.ng-star-inserted > #ad-carousel-banner').click()
        cy.get(':nth-child(2) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(3) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(6) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('#btnContinuar').click()
        cy.get(':nth-child(2) > .my-2 > .mx-3 > .flex-row > .ml-2 > a > .d-flex > mdb-icon.red-2-text > .fa-trash-alt').click()
    
    })

    /**

    it("Actualizar datos usuario",()=>{

        cy.visit('https://new2.uat.luxury.pe/inicio')
        cy.get('.col-2 > .justify-content-end > .d-lg-flex > .fa').click()
        cy.get('.w-100 > :nth-child(2) > .p-0 > :nth-child(1)').click()
        cy.get('#suffix').select('Sra.')
        cy.get('#name').clear().type('Mariela')
        cy.get('#email').clear().type('qa.test@delfosti.com')
        cy.get('#phone').clear().type('949499422')
        cy.get('#birth_date').clear().type('2022-11-19')
        cy.get('#type_document').select('DNI')
        cy.get('#number_document').clear().type('48095531')
        cy.get('#btnActualizar').click()
        cy.get('.fa-times').click()

    })**/

   

    /**it("Hacer Reserva en LUXURY",()=>{

        cy.get('#btnIniciar').click()
        cy.get('#email').type("qa.test@delfosti.com")
        cy.get('#password').type("Delfosti123@")
        cy.get('#btnIniciar').click()
        cy.get('[style="padding-right: 0rem; border-radius: 10px;"] > .d-none > .br-10 > carousel.h-100 > .carousel > .carousel-inner > .w-100 > .item > app-custom-link > a.ng-star-inserted > #ad-carousel-banner').click()
        cy.get(':nth-child(10) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(2) > app-card-item > a > .d-flex').click()
        cy.get('.swiper-slide-active > .cursor-pointer').click()
        cy.get('app-experience-card > .cursor-pointer').click()
        cy.get('.d-lg-flex > app-button.ng-star-inserted > #btnReservar').click()
        cy.get(':nth-child(1) > .input-block > .form-control').type(' reserva reserva')
        cy.get(':nth-child(2) > .input-block > .form-control').type('miraflores')
        cy.get(':nth-child(3) > .input-block > .form-control').type('2022-11-19')
        cy.get(':nth-child(4) > .input-block > .form-control').type('6pm')
        cy.get(':nth-child(5) > .input-block > .form-control').type('10')
        cy.get(':nth-child(6) > .input-block > .form-control').type('con 2 mesas mas')
        cy.get(':nth-child(7) > .input-block > .form-control').type('muchas gracias')
        cy.get(':nth-child(9) > .input-block > .form-control').type('948671812')
        cy.get('.px-3 > :nth-child(2) > div.w-100').click()


    })**/
    /**it("Enviar datos y documento en formulario con campos llenos",()=>{

        cy.visit('http://erp-qa.delfosti.site')
        cy.get(':nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("David")
        cy.get(':nth-child(7) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Torres")
        cy.get(':nth-child(9) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("948681741")
        cy.get(':nth-child(11) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("deyvi2601@gmail.com")
        cy.get(':nth-child(13) > .text-start').attachFile('doc/David Francys_Torres Susanibar_CV.pdf')
        cy.get('.text-center > .wpcf7-form-control').click()

    })**/


})

