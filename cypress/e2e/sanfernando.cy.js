describe('TEST SUITE SAN FERNANDO I+D', function() {

    /**beforeEach("Usuario se Loguea con sus credenciales - Login de Acceso", () => {
 
     cy.fixture("spaceID/accountPage").then((the) => {
 
         cy.session("Validar Login", () => {

          const sentArgs = { email: 'deyvi2601@gmail.com', password: '511Nicolas' }
         
           cy.visit('http://localhost:4200')
           cy.get('.nsm7Bb-HzV7m-LgbsSe-Bz112c').click()          
           cy.origin('https://accounts.google.com',{ args: sentArgs },({email, password}) => {
             //cy.visit('/login')
             cy.get(the.email.input).type(email);
             Cypress.on('uncaught:exception', (err) => {
                 if (err.message.includes('ResizeObserver')) {
                   return false;
                 }
               });
               cy.get('.VfPpkd-vQzf8d').eq(1).click(); //click on Next
               cy.wait(2000);
             cy.get(the.password.input).type(the.password.data.valid, { log: false });
             // clicking submit does the auth and redirects back to main site
             cy.get('input[type="submit"]').click();
             
         });
 
         // once done testing can continue
         cy.contains('David Torres');
 
         }  ,{
         validate(){
             cy.request(the.webIngreso).its('status').should('eq',200)
         }},
     )
    })
 
     })


     **/

     it("F2H2CP1-Listado de Usuario con todos los campos del sistema por defecto estado",()=>{
        

        cy.visit('http://localhost:4200/configuration')
        //VERIFICAR ENCABEZADO
        cy.get('.form-check > span').contains('ACCIONES')
        cy.get('.min-w-150px').contains('NOMBRE Y APELLIDOS')
        cy.get('.min-w-140px').contains('DOCUMENTO')
        cy.get('.fw-bolder > :nth-child(4)').contains('CORREO')
        cy.get('.fw-bolder > :nth-child(5)').contains('ÁREA')
        cy.get('.fw-bolder > :nth-child(6)').contains('PUESTO')
        cy.get('.fw-bolder > :nth-child(7)').contains('U.NEGOCIO')
        cy.get('.fw-bolder > :nth-child(8)').contains('ESTADO')
        //VERIFICAR CONTENIDO DE TABLA
        cy.get(':nth-child(1) > :nth-child(1) > .form-check > app-dropdown > .dropdown > #dropdownMenuButton').should('be.visible')
        //nombre y apellidos
        cy.get(':nth-child(1) > :nth-child(2) > .text-dark').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > .text-muted').should('be.visible')
        //documento y tipo
        cy.get('tbody > :nth-child(1) > :nth-child(3) > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(3) > .text-muted').should('be.visible')
        //correo
        cy.get(':nth-child(1) > :nth-child(4) > .text-muted').should('be.visible')
        //area
        cy.get(':nth-child(1) > :nth-child(5) > .text-muted').should('be.visible')
        //puesto
        cy.get(':nth-child(1) > :nth-child(6) > .text-muted').should('be.visible')
        //u.negocio
        cy.get(':nth-child(1) > :nth-child(7) > .text-muted').should('be.visible')
        //estado
        cy.get(':nth-child(1) > :nth-child(8) > .badge').should('be.visible')

     })


    it("F2H2CP1-Probar Creacion de Usuario con todos los campos del sistema por defecto estado PENDIENTE",()=>{
  
    cy.visit('http://localhost:4200/configuration')
    cy.get('.d-flex > .m-5').click()
    //VERIFICAR LABEL TEXT
    //1.nombre
    cy.get(':nth-child(1) > app-input-text > .text-start > .col-form-label').should('be.visible')
    //2.apellido
    cy.get(':nth-child(2) > app-input-text > .text-start > .col-form-label').should('be.visible')
    //3.tipo
    cy.get(':nth-child(1) > app-input-select > .text-start > .col-form-label').should('be.visible')
    //4.documento
    cy.get(':nth-child(2) > app-input-number > .text-start > .col-form-label').should('be.visible')
    //celular
    cy.get(':nth-child(1) > app-input-number > .text-start > .col-form-label').should('be.visible')
    //estado
    cy.get('app-input-disable > .text-start > .col-form-label').should('be.visible')
    //correo
    cy.get('app-input-email > .text-start > .col-form-label').should('be.visible')

    //LLENAR CAMPOS INPUTS
    cy.get(':nth-child(1) > app-input-text > .text-start > .form-control').should('be.visible').type('Lucas')
    cy.get(':nth-child(2) > app-input-text > .text-start > .form-control').should('be.visible').type('Dulando',{force:true})
    cy.get(':nth-child(1) > app-input-select > .text-start > .dropbtn').should('be.visible').select('DNI')
    cy.get(':nth-child(2) > app-input-number > .text-start > #validationCustom01').should('be.visible').type('48182212',{force:true})
    cy.get(':nth-child(1) > app-input-number > .text-start > #validationCustom01').should('be.visible').type('912342132')
    cy.get('app-input-disable > .text-start > #validationCustom01').should('be.visible')
    cy.get('#emailAddress').should('be.visible').type('correo@gmail.com')

    cy.get('.card-footer > [type="submit"]').click()
 
     //popup
     cy.get('#swal2-title').contains('Error al registrar usuario')
     cy.get('.swal2-confirm').click()
     })

     
    it.only("F2H2CP1-Probar Creacion de Usuario con todos los campos vacios",()=>{
  
        cy.visit('http://localhost:4200/configuration')
        cy.get('.d-flex > .m-5').click()
        //VERIFICAR LABEL TEXT
        //1.nombre
        cy.get(':nth-child(1) > app-input-text > .text-start > .col-form-label').should('be.visible')
        //2.apellido
        cy.get(':nth-child(2) > app-input-text > .text-start > .col-form-label').should('be.visible')
        //3.tipo
        cy.get(':nth-child(1) > app-input-select > .text-start > .col-form-label').should('be.visible')
        //4.documento
        cy.get(':nth-child(2) > app-input-number > .text-start > .col-form-label').should('be.visible')
        //celular
        cy.get(':nth-child(1) > app-input-number > .text-start > .col-form-label').should('be.visible')
        //estado
        cy.get('app-input-disable > .text-start > .col-form-label').should('be.visible')
        //correo
        cy.get('app-input-email > .text-start > .col-form-label').should('be.visible')
    
        //LLENAR CAMPOS INPUTS
        cy.get(':nth-child(1) > app-input-text > .text-start > .form-control').should('be.visible')
        cy.get(':nth-child(2) > app-input-text > .text-start > .form-control').should('be.visible')
        cy.get(':nth-child(1) > app-input-select > .text-start > .dropbtn').should('be.visible')
        cy.get(':nth-child(2) > app-input-number > .text-start > #validationCustom01').should('be.visible')
        cy.get(':nth-child(1) > app-input-number > .text-start > #validationCustom01').should('be.visible')
        cy.get('app-input-disable > .text-start > #validationCustom01').should('be.visible')
        cy.get('#emailAddress').should('be.visible')
    
        cy.get('.card-footer > [type="submit"]').click()
     
         //popup
         cy.get('#swal2-title').contains('Error al registrar usuario')
         cy.get('.swal2-confirm').click()
         })


 
     it("H02CP02-Probar Creacion de Usuario con todos los campos Obligatorios",()=>{
  
     cy.visit('')
     cy.get('.mb-10 > .input-group > .form-control').type(validarUser.email)
     cy.get('.form-group.mb-5 > .input-group > .form-control').type(validarUser.password)
     cy.get('.my-20 > .btn').click()     
     //AGREGAR NUEVO USUARIO         
     cy.get('.text-light').click()
     cy.get(':nth-child(3) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('lucifer')
     cy.get(':nth-child(3) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('zapata')
     cy.get('input.el-input__inner#el-id-9756-20[placeholder="Seleccionar"]').eq(0)
     //cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     //cy.get('#el-id-1355-24 > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click('{force:true}')      
 })
 
     it("H02CP03-Probar Creacion de Usuario con todos los campos vacios",()=>{
  
        cy.visit('')
        cy.get('.mb-10 > .input-group > .form-control').type(validarUser.email)
        cy.get('.form-group.mb-5 > .input-group > .form-control').type(validarUser.password)
        cy.get('.my-20 > .btn').click()    
         //AGREGAR NUEVO USUARIO  
        cy.get('.text-light').click()
        cy.get(':nth-child(3) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('lucifer')
        cy.get(':nth-child(3) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('zapata')
        cy.get('input.el-input__inner#el-id-9756-20[placeholder="Seleccionar"]').eq(0)
        //cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
        //cy.get('#el-id-1355-24 > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click('{force:true}')      
    })
 
    it("H02CP04-Probar Creacion de usuario con dos campos obligatorios",()=>{
  
     cy.visit('')
     cy.get('.mb-10 > .input-group > .form-control').type(validarUser.email)
     cy.get('.form-group.mb-5 > .input-group > .form-control').type(validarUser.password)
     cy.get('.my-20 > .btn').click()      
     //AGREGAR NUEVO USUARIO  
     cy.get('.text-light').click()
     cy.get(':nth-child(3) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('lucifer')
     cy.get(':nth-child(3) > :nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').type('zapata')
     cy.get('input.el-input__inner#el-id-9756-20[placeholder="Seleccionar"]').eq(0)
     //cy.get(':nth-child(1) > .el-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
     //cy.get('#el-id-1355-24 > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click('{force:true}')      
 })
  
  
  })