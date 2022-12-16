describe("Casos de Prueba - Luxury", () => {

    beforeEach("Usuario se Loguea con sus credenciales", () => {
       
        cy.fixture("spaceLuxury/page").then((the) => {

            cy.session("Validar Loguin", () => {
              cy.visit(the.webLuxury)
              cy.contains('Iniciar sesión').should('be.visible')
              cy.contains(the.loginButton.on).should("be.visible").click()
              cy.get(the.username.input).type(the.username.data.valid)
              cy.get(the.password.input).type(the.password.data.valid)
              cy.get(the.submitButton).click()
              cy.get(the.cerrarPoput).click()
              cy.contains(the.loginButton.off).should('be.visible')

            })
       })
    })

    it("Agregar Producto al Carrito - Prueba",()=>{

        cy.fixture("spaceLuxury/accountPage").then((the) => {
           cy.visit(the.webLuxury)
           cy.get('a[href^="/catalogo/productos"]').eq(0).click()
           cy.get('a[href^="/tienda/vinos_y_licores"]').click()
           cy.get('a[href^="/tienda/vinos_y_licores/categoria/licores"]').click()
           cy.get(':nth-child(1) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
           cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
           cy.get(the.continuar).click()
           cy.contains('Ron 12 Años x 750 ml').should('be.visible')/**
           cy.get(':nth-child(2) > .my-2 > .mx-3 > .flex-row > .ml-2 > .blue-4f-border').select(1)
           cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').click()
           cy.get(':nth-child(4) > .py-1 > .h-100 > .align-items-center').click()**/
       })
   })

   it("Buscador de Productos",()=>{

    cy.fixture("spaceLuxury/accountPage").then((the) => {

       cy.visit(the.webLuxury)
       cy.get('.align-items-center > .form-control').click()
       cy.get('.align-items-center > .form-control').type('silla')
       cy.contains('silla').should('be.visible')
       cy.get(':nth-child(2) > a > .font-weight-bold').click()
       cy.get(':nth-child(2) > .container > .checkmark').click()
       cy.get(':nth-child(2) > .ml-0 > app-checkbox.d-block > .container > .checkmark').click()
       cy.contains('Silla ').should('be.visible')

    })
   })
  
   it("Actualizar datos usuario",()=>{

    cy.fixture("spaceLuxury/accountPage").then((the) => {

       cy.visit(the.webLuxury)
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
   
    })
  })


})