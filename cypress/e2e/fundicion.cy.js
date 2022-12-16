describe('SUITE TESTS FUNDICION CENTRAL', function() {

  beforeEach("Usuario se Loguea con sus credenciales - Login de Acceso", () => {

    cy.fixture("spaceFundicion/page").then((the) => {

       // cy.session("Validar Login", () => {
        
          cy.visit(the.webFundicion)
          cy.get(the.email.input).should('be.visible').type(the.email.data.valid)
          cy.get(the.password.input).should('be.visible').type(the.password.data.valid)
          cy.get(the.submitButton).click()
      //  },
        //)
   })
})

//CREAR USUARIO CAMPOS UNICOS CON TODOS LOS CAMPOS LLENOS
it("Crear usuario - Campos Unicos - Area trabajo Ventas, Perfil 2 y Rol Vendedor y sin dejar espacio en blanco los campos excepto foto",()=>{
         
    //LLENAR DATOS
    cy.get('.btn.btn-sm.text-light').click()
    cy.xpath("(//input[@tabindex='0'])[1]").should('be.visible').type('mantis')
    cy.xpath("(//input[contains(@class,'el-input__inner')])[2]").type('zapata')
    cy.xpath("//li[contains(.,'DNI')]").click({force:true})
    cy.xpath("(//input[@tabindex='0'])[4]").type('60958598')//DNI
    cy.xpath("(//input[@tabindex='0'])[5]").type('adoni102')//USUARIO
    cy.xpath("//li[contains(.,'Activo')]").click({force:true})
    cy.xpath("(//input[@tabindex='0'])[7]").type('912838123')//CELULAR
    cy.xpath("(//input[@tabindex='0'])[8]").type('adoni251@gmail.com') //CORREO
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
    //cy.contains('El número de documento no es válido porque ya existe en la base de datos.').should('be.visible')
    //PERMISOS
    cy.xpath("//li[contains(.,'Ventas')]").click({force:true})
    cy.xpath("//li[contains(.,'Perfil 2')]").click({force:true})
    cy.xpath("//li[contains(.,'Vendedor')]").click({force:true})
    cy.wait(10)
    cy.xpath("(//button[contains(.,'Continuar')])[2]").click()
    cy.xpath("(//input[@tabindex='0'])[11]").type('adonicontra123')
    cy.xpath("(//input[@tabindex='0'])[12]").type('adonicontra123')
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn > .indicator-label').click()
    cy.get('#swal2-content').should('be.visible')
    cy.get('.swal2-confirm').click()    
})


//CPCU002 - CREAR USUARIO CAMPOS UNICOS CON CAMPO DUPLICADO USUARIO Y SIN LLENAR CORREO Y LUEGO CAMBIARLO
it("Crear usuario - Con campos unicos y sin llenar correo y celular - Area trabajo Trabajo , Perfil 4 y Rol Administrador ",()=>{
         
    //LLENAR DATOS
    cy.get('.btn.btn-sm.text-light').click()
    cy.xpath("(//input[@tabindex='0'])[1]").should('be.visible').type('bertha')
    cy.xpath("(//input[contains(@class,'el-input__inner')])[2]").should('be.visible').type('ramirez')
    cy.xpath("//li[contains(.,'DNI')]").click({force:true})
    cy.xpath("(//input[@tabindex='0'])[4]").should('be.visible').type('50958598')//DNI
    cy.xpath("(//input[@tabindex='0'])[5]").should('be.visible').type('bertha123')//USUARIO
    cy.xpath("//li[contains(.,'Activo')]").click({force:true})
    //cy.xpath("(//input[@tabindex='0'])[7]").should('be.visible').type('912838140')//CELULAR
    //cy.xpath("(//input[@tabindex='0'])[8]").should('be.visible').type('') //CORREO
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
    //cy.get('#swal2-content').should('be.visible') 
    //cy.get('.swal2-confirm').click()
    //CAMBIAR USUARIO Y CORREO
    //cy.xpath("(//input[@tabindex='0'])[5]").should('be.visible').clear().type('gabriela103')//USUARIO
    //cy.xpath("(//input[@tabindex='0'])[8]").should('be.visible').type('gabrielanuevo29393@gmail.com') //CORREO
    //cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
    //PERMISOS
    cy.xpath("//li[contains(.,'Trabajo')]").click({force:true})
    cy.xpath("//li[contains(.,'Perfil 4')]").click({force:true})
    cy.xpath("//li[contains(.,'Vendedor')]").click({force:true})
    cy.wait(10)
    cy.xpath("(//button[contains(.,'Continuar')])[2]").click()
    cy.xpath("(//input[@tabindex='0'])[11]").should('be.visible').type('gabrielacontra123')
    cy.xpath("(//input[@tabindex='0'])[12]").should('be.visible').type('gabrielacontra123')
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn > .indicator-label').click()
    cy.get('#swal2-content').should('be.visible')
    cy.get('.swal2-confirm').click()    
})

//CREAR USUARIO CAMPOS UNICOS CON CAMPO DUPLICADO USUARIO Y SIN LLENAR CORREO Y LUEGO CAMBIARLO
it("Crear usuario - Usuario duplicado y sin llenar correo luego si cambiarlo - Area trabajo Ventas, Perfil 2 y Rol Vendedor y sin dejar espacio en blanco los campos excepto foto",()=>{
         
    //LLENAR DATOS
    cy.get('.btn.btn-sm.text-light').click()
    cy.xpath("(//input[@tabindex='0'])[1]").should('be.visible').type('gabriela')
    cy.xpath("(//input[contains(@class,'el-input__inner')])[2]").should('be.visible').type('tornel')
    cy.xpath("//li[contains(.,'DNI')]").click({force:true})
    cy.xpath("(//input[@tabindex='0'])[4]").should('be.visible').type('10958598')//DNI
    cy.xpath("(//input[@tabindex='0'])[5]").should('be.visible').type('gabriela102')//USUARIO
    cy.xpath("//li[contains(.,'Activo')]").click({force:true})
    cy.xpath("(//input[@tabindex='0'])[7]").should('be.visible').type('912838140')//CELULAR
    //cy.xpath("(//input[@tabindex='0'])[8]").should('be.visible').type('') //CORREO
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
    cy.get('#swal2-content').should('be.visible')
    cy.get('.swal2-confirm').click()
    //CAMBIAR USUARIO Y CORREO
    cy.xpath("(//input[@tabindex='0'])[5]").should('be.visible').clear().type('gabriela103')//USUARIO
    cy.xpath("(//input[@tabindex='0'])[8]").should('be.visible').type('gabrielanuevo29393@gmail.com') //CORREO
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
    //PERMISOS
    cy.xpath("//li[contains(.,'Ventas')]").click({force:true})
    cy.xpath("//li[contains(.,'Perfil 2')]").click({force:true})
    cy.xpath("//li[contains(.,'Vendedor')]").click({force:true})
    cy.wait(10)
    cy.xpath("(//button[contains(.,'Continuar')])[2]").click()
    cy.xpath("(//input[@tabindex='0'])[11]").should('be.visible').type('gabrielacontra123')
    cy.xpath("(//input[@tabindex='0'])[12]").should('be.visible').type('gabrielacontra123')
    cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn > .indicator-label').click()
    cy.get('#swal2-content').should('be.visible')
    cy.get('.swal2-confirm').click()    
})

////CREAR USUARIO CAMPOS CON DNI Y USUARIO DUPLICADO
  it("Crear usuario con numero de DNI y usuario duplicado y sin dejar espacio en blanco los campos excepto foto - PRUEBA",()=>{
         
      cy.get('.btn.btn-sm.text-light').click()
      cy.xpath("(//input[@tabindex='0'])[1]").should('be.visible').type('laura')
      cy.xpath("(//input[contains(@class,'el-input__inner')])[2]").type('zapata')
      cy.xpath("//li[contains(.,'DNI')]").click({force:true})
      cy.wait(10)
      cy.xpath("(//input[@tabindex='0'])[4]").type('48095597')
      cy.xpath("(//input[@tabindex='0'])[5]").type('lucas102')
      cy.xpath("//li[contains(.,'Activo')]").click({force:true})
      cy.wait(10)
      cy.xpath("(//input[@tabindex='0'])[7]").type('912838123')
      cy.xpath("(//input[@tabindex='0'])[8]").type('lucas251@gmail.com')
      cy.get('.current > .el-form > .d-flex > :nth-child(2) > .btn').click()
      cy.contains('El número de documento no es válido porque ya existe en la base de datos.').should('be.visible')

      //cy.get(':nth-child(1) > .-form-item > .el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__wrapper').click()
      //cy.get('#el-id-1355-24 > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click('{force:true}')      
  })

  //Filtros de usuarios por Area marcando Trabajo y Venta
  it("Filtros de usuarios todas las Area, todos los roles y estado activo",()=>{
         
      cy.get('#kt_drawer_user_toggle').click()
      cy.get('.scroll-y > :nth-child(1) > .flex-stack').should('be.visible').click()
      //dar check a las areas de trabajo
      cy.xpath("(//span[contains(@class,'inner')])[1]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[2]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[3]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[4]").should('be.visible').click({force:true})
      cy.get(':nth-child(3) > .flex-stack').should('be.visible').click()
      //dar check a las rol de trabajo
      cy.xpath("(//span[contains(@class,'inner')])[5]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[6]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[7]").should('be.visible').click({force:true})
      cy.xpath("(//span[contains(@class,'inner')])[8]").should('be.visible').click({force:true})
      //dar check a estado
      cy.get(':nth-child(5) > .flex-stack').should('be.visible').click()
      cy.xpath("(//span[contains(@class,'inner')])[9]").should('be.visible').click({force:true})
      //aplicar
      cy.get('#kt_drawer_filter_user_footer > .d-flex > .btn-primary').click()

})

it("Filtros de Area ventas, rol de encargado y estado activo y usuario ricardo",()=>{
         
    cy.get('#kt_drawer_user_toggle').click()
    cy.get('.scroll-y > :nth-child(1) > .flex-stack').should('be.visible').click()
    //dar check a las areas de trabajo: ventas
    cy.xpath("(//span[contains(@class,'inner')])[1]").should('be.visible').click({force:true})
    cy.get(':nth-child(3) > .flex-stack').should('be.visible').click()
    //dar check a las rol de trabajo: encargado
    cy.xpath("(//span[contains(@class,'inner')])[5]").should('be.visible').click({force:true})
    //dar check a estado
    cy.get(':nth-child(5) > .flex-stack').should('be.visible').click()
    cy.xpath("(//span[contains(@class,'inner')])[9]").should('be.visible').click({force:true})
    //usuario: ricardo
    cy.get(':nth-child(7) > .el-form-item > .el-form-item__content > .el-input > .el-input__wrapper').should('be.visible').type('ricardo')
    //aplicar
    cy.get('#kt_drawer_filter_user_footer > .d-flex > .btn-primary').click()
})
it.only("Editar Usuarios Apellido Prietos",()=>{
         
   
    cy.get('span.svg-icon.svg-icon-3.ms-md-10').click({force:true})
    cy.get('.menu-title-gray-700 > :nth-child(1) > .menu-link > .menu-title').click()
    cy.get('.flex-grow-1 > .justify-content-between > :nth-child(2) > .btn').click()
    cy.get('#el-id-4539-40').clear().type('Prietono')
    cy.xpath("//span[contains(.,'Continuar')]").click()


})


})