describe("Casos de Prueba en Luxury",()=>{

    beforeEach("Usuario se Loguea con sus credenciales - Login de Acceso", () => {

        cy.fixture("spaceLuxury/page").then((the) => {

            cy.session("Validar Login", () => {
            
              cy.visit(the.webLuxury)
              cy.contains('Iniciar sesión').should('be.visible')
              cy.contains(the.loginButton.on).should("be.visible").click()
              cy.get(the.username.input).should("be.visible").type(the.username.data.valid)
              cy.get(the.password.input).should("be.visible").type(the.password.data.valid)
              cy.get(the.submitButton).contains("Iniciar sesión").click()
              //logueado
              cy.url().should('eq',the.webIngreso)

            }  ,{
            validate(){
                cy.request(the.webIngreso).its('status').should('eq',200)
            }},
        )
       })
    })

    it("Favoritos - agregar Producto a favoritos => 5 productos - Prueba",()=>{
               
        cy.get('.form-control').type('prueba').type('{enter}')
        cy.get(':nth-child(2) > app-card-product.w-100 > .p-3').should('be.visible').click()
        cy.contains('Precio normal').should('be.visible')
        cy.xpath("(//button[contains(.,'Agregar a favoritos')])[2]").should('be.visible').click({force:true})
    })

    it("Favoritos - ir a Producto favoritos e ir a checkout => 3 productos",()=>{
               
        cy.get('.position-relative.d-none > div.d-flex > .fa').should('be.visible').click()
        cy.get(':nth-child(2) > .align-center > .mx-3 > .flex-row > .ml-2 > app-button.ng-star-inserted > #btn').should('be.visible').click()
        cy.get(':nth-child(3) > .align-center > .mx-3 > .flex-row > .ml-2 > app-button.ng-star-inserted > #btn').should('be.visible').click()
        cy.get(':nth-child(4) > .align-center > .mx-3 > .flex-row > .ml-2 > app-button.ng-star-inserted > #btn').should('be.visible').click()
        cy.get('.fa-times').click()
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('#btnContinuar').should('be.visible').click()

        cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').click()
       /**  cy.get('.py-1 > .d-flex').click()
        //agregar direccion
        cy.get('#type_address > .ng-star-inserted').eq(0).then((e) => {

            let direccion=e.text()
            cy.log(direccion)
    
            if (direccion==" Oficina "){
    
                cy.get('#type_address').select('Oficina')
                cy.get('#address').should('be.visible').type('direccion de oficina', { force: true })
                cy.get('#department').select('Lima')
                cy.get('#province').select('Lima')
                cy.get('#district').select('Miraflores')
                cy.get('#reference').type('en delfosti costado del parque')
                cy.get('#cellphone').type('912129225')
                cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
    
            }else if (direccion==" Casa de Playa "){
                
                cy.get('#type_address').select('Casa de Playa')
                cy.get('#address').should('be.visible').type('direccion Barranco', { force: true })
                cy.get('#department').select('Lima')
                cy.get('#province').select('Lima')
                cy.get('#district').select('Barranco')
                cy.get('#reference').type('en las suburbios de barranco')
                cy.get('#cellphone').type('912129233')
                cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
    
            }else if (direccion==" Casa ") {
                
                cy.get('#type_address').select('Casa')
                cy.get('#address').should('be.visible').type('direccion de casa', { force: true })
                cy.get('#department').select('Lima')
                cy.get('#province').select('Lima')
                cy.get('#district').select('Magdalena del Mar')
                cy.get('#reference').type('al costado de la plaza de la cupula')
                cy.get('#cellphone').type('912129226')
                cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
    
            } else if (direccion==" Otros ") {
                
                cy.get('#type_address').select('Otros')
                cy.get('#address').should('be.visible').type('direccion otros', { force: true })
                cy.get('#department').select('Lima')
                cy.get('#province').select('Lima')
                cy.get('#district').select('Lince')
                cy.get('#reference').type('al costado de la plaza de otros')
                cy.get('#cellphone').type('912129229')
                cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
            } 

            else if (direccion==" Casa Campo ") {
                
                cy.get('#type_address').select('Casa Campo')
                cy.get('#address').should('be.visible').type('direccion otros', { force: true })
                cy.get('#department').select('Lima')
                cy.get('#province').select('Lima')
                cy.get('#district').select('Lince')
                cy.get('#reference').type('al costado de la plaza de otros')
                cy.get('#cellphone').type('912129229')
                cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
            } 

            })   
            */
        //regresar ventana anterior
        cy.get('mdb-icon.mx-1').eq(0).click()
        //ver si suma es igual
        cy.get('.blue-4f-text.my-0.font-size-normal.d-flex.align-items-center > strong').then((e) => {

        let p1=cy.get(':nth-child(1) > .align-center > .my-1 > app-checkout-supplier-product.ng-star-inserted > .my-2 > .mx-3 > .mt-3 > .justify-content-between > .d-flex > strong').should('be.visible')
        let p2=cy.get(':nth-child(2) > .align-center > .my-1 > app-checkout-supplier-product.ng-star-inserted > .my-2 > .mx-3 > .mt-3 > .justify-content-between > .d-flex > strong')
        let p3=cy.get(':nth-child(3) > .align-center > .my-1 > app-checkout-supplier-product.ng-star-inserted > .my-2 > .mx-3 > .mt-3 > .justify-content-between > .d-flex > strong').should('be.visible')
        
        cy.get(':nth-child(2) > .align-center > .my-1 > app-checkout-supplier-product.ng-star-inserted > .my-2 > .mx-3 > .mt-3 > .justify-content-between > .d-flex > strong')
        cy.log(p1)

        let sumapro=p1+p2+p3
                    
        let res=e.text()
        
        if(sumapro==res){
         cy.log('Son iguales los precios totales')
             }else{
          cy.log('No son iguales los precios totales')
            }
        
        })
        //seleccionar otra direccion
        cy.get(':nth-child(2) > .py-1 > .h-100 > .align-items-center').click()
        //regresar ventana anterior
        cy.get('mdb-icon.mx-1').eq(0).click()
        //mostrar detalle de carrito
        cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').should('be.visible').click()
        //cy.get(':nth-child(2) > .py-1 > .h-100 > .align-items-center').click()
        //regresar ventana anterior
        //cy.get('mdb-icon.mx-1').eq(0).click()
        cy.wait(2500)
        cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').should('be.visible').click()
        cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').should('be.visible').click()
        //fin del detalle
        cy.get('.w-30 > app-overview > .br-8 > .align-items-center > .d-block > #btnContinuar').should('be.visible').click()

        //siguiente boleta o factura(por defecto boleta y continuar)
        cy.get('.w-30 > app-overview > .br-8 > .align-items-center > .d-block > #btnContinuar').should('be.visible').click()
        //pagar con tarjeta
        cy.get('.py-1 > .d-flex').should('be.visible').click()
    })

    it("Actualizar datos usuario - EditarUsuario",()=>{

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

    it("Agregar Producto a favoritos => 5 productos - Favoritos",()=>{
               
        cy.get('.form-control').type('prueba').type('{enter}')
        cy.get(':nth-child(1) > app-card-product.w-100 > .p-3 > .visibleProd > .my-2 > a > .img-fluid').click() 
        cy.log('titulo de producto')
        cy.contains('Shampoo prueba - pack 4').should('be.visible') 
        //cy.get('#selectSizeCant').select(' Cantidad: 6 ')
        //cy.get('#selectSizeCant')
        //cy.get('select[value=0]').select(' Cantidad: 4 ')
        //cy.log('agregar favoritos')
        //cy.get('.btnAgregar-a-favoritos').click()  

     
    })

    //carrito compras
    it("Agregar Producto al Carrito or click en banner - CarritoCompras",()=>{

        cy.get('[style="padding-right: 0.46875rem; padding-left: 0.46875rem; border-radius: 10px;"] > .d-none > .br-10 > carousel.h-100 > .carousel > .carousel-inner > .w-100 > .item > app-custom-link > a.ng-star-inserted > #ad-carousel-banner').click()
        cy.get(':nth-child(2) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(3) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(6) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('#btnContinuar').click()
        cy.get(':nth-child(2) > .my-2 > .mx-3 > .flex-row > .ml-2 > a > .d-flex > mdb-icon.red-2-text > .fa-trash-alt').click()
    
    })


    //PRUEBA PASO 25/11/2022 15:31PM
    it("Agregar un solo Producto y Eliminar ese Producto - CarritoCompras",()=>{

        cy.visit('https://new2.uat.luxury.pe/inicio')
        cy.get('[style="padding-right: 0.46875rem; padding-left: 0.46875rem; border-radius: 10px;"] > .d-none > .br-10 > carousel.h-100 > .carousel > .carousel-inner > .w-100 > .item > app-custom-link > a.ng-star-inserted > #ad-carousel-banner').click()
        cy.get(':nth-child(2) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(3) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(6) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('#btnContinuar').click()        

        //ELIMINAR PRODUCTO DEL CARRITO
        cy.get(':nth-child(1) > .my-2 > .mx-3 > .flex-row > .ml-2 > a > .d-flex > mdb-icon.red-2-text > .fa-trash-alt').click()     
        //MOSTRAR MENSAJE 
        cy.contains('No tiene productos en su carrito').should('be.visible')
          //cy.get('.ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(3) > .ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(2) > .d-flex:nth-child(1) > .my-0:nth-child(2) .d-flex:nth-child(1) .fa-trash-alt:nth-child(1)').click()
    
    })
    
    //AGREGAR 3 PRODUCTOS A CARRITO, AGREGAR DIRECCION E IR A CHECKOUT
    it("Agregar 3 Producto abrir ventana carrito  luego ir a checkout - MultiEnvios CarritosCompras",()=>{

        //ingresar busqueda de reloj
        cy.get('.col-4 > .align-items-center > .form-control').type('prueba{enter}')
        cy.get(':nth-child(1) > app-card-product.w-100 > .p-3 > div.d-flex.w-100 > .w-80 > .d-none > #btnAgregar').click()
         //ENTRAR AL CARRITO DESLIZABLE Y CONTINUAR PARA CONFIRMAR
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('i.fa-times').click()
        //agregando un 2do producto silla
        //cy.get('.col-4 > .align-items-center > .form-control').clear().type('prueba{enter}')
        cy.get(':nth-child(9) > app-card-product.w-100 > .p-3 > div.d-flex.w-100 > .w-80 > .d-none > #btnAgregar').click()
        //agregar un tercer producto si hay
        //cy.get('.col-4 > .align-items-center > .form-control').clear().type('prueba{enter}')
        cy.get(':nth-child(11) > app-card-product.w-100 > .p-3 > div.d-flex.w-100 > .w-80 > .d-none > #btnAgregar').click()
        //cy.get('.ngx-pagination > :nth-child(5) > .ng-star-inserted').click()
        //abrir ventana detalle de productos escogidos
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.get('#btnContinuar').click()
        //checkout y continuar
        cy.get('.w-30 > app-overview > .br-8 > .flex-column > .d-block > #btnContinuar').click()
        //añadir nueva direccion
        cy.get('.py-1 > .d-flex > .font-size-normal').click()
        //VENTANA DE DIRECCION

        cy.get('#type_address > .ng-star-inserted').eq(0).then((e) => {

        let direccion=e.text()
        cy.log(direccion)

        if (direccion==" Oficina "){

            cy.get('#type_address').select('Casa')
            cy.get('#address').should('be.visible').type('direccion de oficina', { force: true })
            cy.get('#department').select('Lima')
            cy.get('#province').select('Lima')
            cy.get('#district').select('Miraflores')
            cy.get('#reference').type('en delfosti costado del parque')
            cy.get('#cellphone').type('912129225')
            cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  

        }else if (direccion==" Casa de Playa "){
            
            cy.get('#type_address').select('Casa de Playa')
            cy.get('#address').should('be.visible').type('direccion Barranco', { force: true })
            cy.get('#department').select('Lima')
            cy.get('#province').select('Lima')
            cy.get('#district').select('Barranco')
            cy.get('#reference').type('en las suburbios de barranco')
            cy.get('#cellphone').type('912129233')
            cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  

        }else if (direccion==" Casa ") {
            
            cy.get('#type_address').select('Casa')
            cy.get('#address').should('be.visible').type('direccion de casa', { force: true })
            cy.get('#department').select('Lima')
            cy.get('#province').select('Lima')
            cy.get('#district').select('Magdalena del Mar')
            cy.get('#reference').type('al costado de la plaza de la cupula')
            cy.get('#cellphone').type('912129226')
            cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  

        } else if (direccion==" Otros ") {
            
            cy.get('#type_address').select('Otros')
            cy.get('#address').should('be.visible').type('direccion otros', { force: true })
            cy.get('#department').select('Lima')
            cy.get('#province').select('Lima')
            cy.get('#district').select('Lince')
            cy.get('#reference').type('al costado de la plaza de otros')
            cy.get('#cellphone').type('912129229')
            cy.get(':nth-child(1) > .d-block > #btnAgregar').click()  
        } 
            
        })    

 
        //regresar para refrescar direccion
        cy.get('.fa-angle-left')     
        cy.get('#btnContinuar').click()

        //ELIMINAR LOS DOS PRODUCTO DEL CARRITO
        /**
        cy.get(':nth-child(1) > .my-2 > .mx-3 > .flex-row > .ml-2 > a > .d-flex > mdb-icon.red-2-text > .fa-trash-alt').click()     
        cy.get('.ml-2 > a > .d-flex').click()     
        //MOSTRAR MENSAJE DE NO HAY PRODUCTOS EN EL CARRITO
        cy.contains('No tiene productos en su carrito').should('be.visible')
        //cy.get('.ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(3) > .ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(2) > .d-flex:nth-child(1) > .my-0:nth-child(2) .d-flex:nth-child(1) .fa-trash-alt:nth-child(1)').click()
    **/
    })

    it("Agregar 2 Productos y Eliminar dos Productos - CarritosCompras",()=>{

        cy.get('[style="padding-right: 0.46875rem; padding-left: 0.46875rem; border-radius: 10px;"] > .d-none > .br-10 > carousel.h-100 > .carousel > .carousel-inner > .w-100 > .item > app-custom-link > a.ng-star-inserted > #ad-carousel-banner').click()
        cy.get(':nth-child(2) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(3) > app-card-item > a > .d-flex').click()
        cy.get(':nth-child(6) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
        // cy.wait(300)
        cy.get(':nth-child(4) > app-card-product.w-100 > .p-3 > div.w-100 > .w-80 > .d-none > #btnAgregar').click()
        //ENTRAR AL CARRITO DESLIZABLE Y CONTINUAR PARA CONFIRMAR
        cy.get('.ml-lg-0 > .position-relative > div.d-flex > .fa').click()
        cy.wait(50)
        cy.get('#btnContinuar').click()        
        //ELIMINAR LOS DOS PRODUCTO DEL CARRITO
        cy.get(':nth-child(1) > .my-2 > .mx-3 > .flex-row > .ml-2 > a > .d-flex > mdb-icon.red-2-text > .fa-trash-alt').click()     
        cy.get('.ml-2 > a > .d-flex').click()     
        //MOSTRAR MENSAJE DE NO HAY PRODUCTOS EN EL CARRITO
        cy.contains('No tiene productos en su carrito').should('be.visible')
        //cy.get('.ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(3) > .ng-star-inserted:nth-child(1) > .d-flex:nth-child(1) > .d-flex:nth-child(2) > .d-flex:nth-child(1) > .my-0:nth-child(2) .d-flex:nth-child(1) .fa-trash-alt:nth-child(1)').click()
    
    })
    //1 CHECK MARCAS
    it("Validar Filtro seleccionando 1 marcas y que coincida el total de productos (Marca:Brokers) - FiltrosProductos",()=>{

        cy.get('.form-control').eq(0).type('ropero{enter}')
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click()
         cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',2).and('have.css','top')

        })

    //2 CHECK MARCAS
    it("Validar Filtro seleccionando 2 marcas y que coincida el total de productos (Marca:3M Nexcare y Boni) - FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar 2da y 3era opcion como filtro
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',4).and('have.css','top')
                
    })
    //3 CHECK MARCAS
    it("Validar Filtro seleccionando 3 marcas y que coincida el total de productos (Marca:3M Nexcare y Boni, Brokers) -FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar 1,  2da y 3era opcion como filtro
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',6).and('have.css','top')
                
    })
    //4 CHECK MARCAS
    it("Validar Filtro seleccionando 4 marcas y que coincida el total de productos (Marca:3M Nexcare y Boni, Brokers,Corelle) -FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar 1,  2da y 3era opcion como filtro
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(4) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',7).and('have.css','top')
                
    })
    //7 CHECK MARCAS
    it("Validar Filtro seleccionando 7 marcas y que coincida el total de productos (Marca:3M Nexcare y Boni, Brokers,Corelle) -FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar 1,  2da y 3era opcion como filtro
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(4) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(5) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(6) > .container > .checkmark').click({force:true})
        cy.get(':nth-child(2) > .my-2 > .w-100 > :nth-child(7) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',11).and('have.css','top')
                
    })

    //FILTROS POR PRECIOS- TESTCASE app-product-list > div.w-100 > .row.px-2 >
    it.only("Validar Filtro seleccionando 1 rango(25 a 50s/.) y que coincida el numero de productos en tabla - FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar check al 2do precio de la lista
        cy.get('.my-2 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',12).and('have.css','top')
        cy.get('app-card-product.w-100 > div.d-flex > div.d-flex > p.my-0 > strong.blue-4f-text').should($e =>{
            console.log($e)
            expect($e).have.length(12)
           // expect($e).to.have.text('S/ ')
            //expect($e).to.include.text('S/ 27.60S/ 44.10S/ 46.60S/ 27.60S/ 27.60S/ 27.60S/ 37.10S/ 37.10S/ 46.60S/ 27.60S/ 27.60S/ 27.60')
            expect($e).to.no.include.text('51.00','24.00')
        })
    })    

    it("Validar Filtro seleccionando 5 marcas y que coincida el total de productos ingresando ropero-FiltrosProductos",()=>{

        cy.get('input.form-control').type('ropero{enter}')
        //marcar 1,  2da y 3era opcion como filtro
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(4) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(5) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',2).and('have.css','top')

    })

    it("Validar Filtro seleccionando 3 marcas y que coincida el total de productos ingreso silla-FiltrosProductos",()=>{

        cy.get('input.form-control').type('silla{enter}')
        //marcar 1,  2da y 3era opcion como filtro
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click({force:true})
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click({force:true})
        cy.get('app-product-list > div.w-100 > .row.px-2 > .card-product-container > app-card-product> .d-flex ').should('have.length',2).and('have.css','top')
                
    })


    it("Validar Filtro seleccionando todoos y marcar que coincida el total de productos - FiltrosProductos",()=>{

        cy.get('input.form-control').type('silla{enter}')
        cy.get('[type="checkbox"]').check({force:true})

        //marcar 1,  2da y 3era opcion como filtro
        /** 
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(1) > .container > .checkmark').click()
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(2) > .container > .checkmark').click()
        cy.get('.scrollbar-primary > :nth-child(1) > .my-2 > .w-100 > :nth-child(3) > .container > .checkmark').click()
        cy.wait(50)
        cy.get('app-product-list>.w-100 > .row > .card-product-container > app-card-product> .d-flex> div').should('have.length',16).and('have.css','top')
                **/
    })


    it("Hacer 1 Reserva en Luxury - ReservaServicio",()=>{

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


    })/** 
    it("Enviar datos y documento en formulario con campos llenos",()=>{

        cy.visit('http://erp-qa.delfosti.site')
        cy.get(':nth-child(5) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("David")
        cy.get(':nth-child(7) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("Torres")
        cy.get(':nth-child(9) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("948681741")
        cy.get(':nth-child(11) > .wpcf7-form-control-wrap > .wpcf7-form-control').type("deyvi2601@gmail.com")
        cy.get(':nth-child(13) > .text-start').attachFile('doc/David Francys_Torres Susanibar_CV.pdf')
        cy.get('.text-center > .wpcf7-form-control').click()

    })**/


})

