describe('Comprobamos que los botones de acciones funcionan', () => {
    it('Abrimos la aplicación para hacer el test', () => {
      cy.visit('/');
    });
    // Acceso por ID
    it('Comprobamos que el resultado este vacio en este momento mediante el ID', () => {
      cy.get('#resultID').should('contain', '');
    });
    it('Comprobamos que el resultado este relleno en este momento mediante el ID', () => {
      cy.get('#btnID').click();
      cy.get('#resultID').should('contain', 'Acceso por el ID');
    });
    // Acceso por Atributo
    it('Comprobamos que el resultado este vacio en este momento mediante el Atributo', () => {
      cy.get('[name=resultATTR]').should('contain', '');
    });
    it('Comprobamos que el resultado este relleno en este momento mediante el Atributo', () => {
      cy.get('#btnATTR').click();
      cy.get('[name=resultATTR]').should('contain', 'Acceso por el Atributo');
    });
    // Acceso por Clase
    it('Comprobamos que el resultado este vacio en este momento mediante la Clase', () => {
      cy.get('.resultCLASS').should('contain', '');
    });
    it('Comprobamos que el resultado este relleno en este momento mediante la Clase', () => {
      cy.get('#btnCLASS').click();
      cy.get('.resultCLASS').should('contain', 'Acceso por la Clase');
    });
    // Acceso por Tagname
    it('Comprobamos que el resultado este vacio en este momento mediante el nombre de la etiqueta', () => {
      cy.get('.col > :nth-child(4)').should('contain', '');
    });
    it('Comprobamos que el resultado este relleno en este momento mediante el nombre de la etiqueta', () => {
      cy.get('#btnTAGNAME').click();
      cy.get('.col > :nth-child(4)').should('contain', 'Acceso por el Tagname');
    });
    // Reset
    it('Reseteamos todos los valores para dejarlos con el valor de origen', () => {
      cy.get('#btnResetID').click();
      cy.get('#resultID').should('contain', '');
      cy.get('#btnResetATTR').click();
      cy.get('[name=resultATTR]').should('contain', '');
      cy.get('#btnResetCLASS').click();
      cy.get('.resultCLASS').should('contain', '');
      cy.get('#btnResetTAGNAME').click();
      cy.get('.col > :nth-child(4)').should('contain', '');
    });
  
    // Test en la tabla
    it('Comprobamos el nùmero de filas (registros)', () => {
      cy.get('table tbody tr').should('have.length', 5);
    });
  });
  
  describe('Comprobamos que los elementos de html funcionan', () => {
    it('Comprobamos el elemento input[type=text] -> Nombre', () => {
      cy.get('#nombre')
        .clear()
        .type('Nombre').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('Nombre');
        });
      cy.get('form > :nth-child(1) > :nth-child(3)').should('contain', 'Nombre');
    });
    it('Comprobamos el elemento input[type=text] -> Apellido', () => {
      cy.get('#apellido')
        .clear()
        .type('Apellido').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('Apellido');
        });
      cy.get('form > :nth-child(2) > :nth-child(3)').should('contain', 'Apellido');
    });
    it('Comprobamos el elemento input[type=number] -> Edad', () => {
      cy.get('input[type=number]')
        .clear()
        .type('30').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('30');
        });
      cy.get('form > :nth-child(3) > :nth-child(3)').should('contain', '30');
    });
    it('Comprobamos el elemento input[type=password] -> Contraseña', () => {
      cy.get('input[type=password]')
        .clear()
        .type('password').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('password');
        });
      cy.get('form > :nth-child(4) > :nth-child(3)').should('contain', 'password');
    });
    describe('Comprobamos el elemento input[type=radio] -> Selecciona un turno', () => {
      it('Comprobamos la opcion del turno A', () => {
        cy.get('#turnoA').click();
        cy.get('form > :nth-child(5) > :nth-child(3)').should('contain', 'turnoA');
      });
      it('Comprobamos la opcion del turno B', () => {
        cy.get('#turnoB').click();
        cy.get('form > :nth-child(5) > :nth-child(3)').should('contain', 'turnoB');
      });
      it('Comprobamos la opcion del turno C', () => {
        cy.get('#turnoC').click();
        cy.get('form > :nth-child(5) > :nth-child(3)').should('contain', 'turnoC');
      });
    });
    describe('Comprobamos el elemento input[type=checkbox] -> Selecciona uno o varios dispositivos', () => {
      it('Seleccionamos el ordenador', () => {
        cy.get('#ordenador').click();
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Ordenador');
      });
      it('Seleccionamos el tablet', () => {
        cy.get('#tablet').click();
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Ordenador');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Tablet');
      });
      it('Seleccionamos el movil', () => {
        cy.get('#movil').click();
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Ordenador');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Tablet');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Movil');
      });
      it('Seleccionamos el portatil', () => {
        cy.get('#portatil').click();
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Ordenador');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Tablet');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Movil');
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', 'Portatil');
      });
      it('No seleccionamos ninguno', () => {
        cy.get('input[type=reset]').click();
        cy.get('form > :nth-child(6) > :nth-child(3)').should('contain', '');
      });
    });
    it('Comprobamos el elemento input[type=color] -> Color', () => {
      cy.get('input[type=color]')
        .invoke('val', '#ffff00')
        .trigger('input');
      cy.get('form > :nth-child(7) > :nth-child(3)').should('contain', '#ffff00');
    });
    it('Comprobamos el elemento input[type=date] -> Cumpleaños', () => {
      cy.get('input[type=date]')
        .invoke('val', '2020-01-01')
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('2020-01-01');
        });
      cy.get(':nth-child(8) > :nth-child(3)').should('contain', '01/01/2020');
    });
    it('Comprobamos el elemento input[type=datetime-local] -> Hora de entrada', () => {
      cy.get('input[type=datetime-local]')
        .invoke('val', '2020-05-08T11:11')
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('2020-05-08T11:11');
        });
      cy.get(':nth-child(9) > :nth-child(3)').should('contain', '2020-05-08T11:11');
    });
    it('Comprobamos el elemento input[type=email] -> Email', () => {
      cy.get('input[type=email]')
        .clear()
        .type('email@dominio.com').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('email@dominio.com');
        });
      cy.get(':nth-child(10) > :nth-child(3)').should('contain', 'email@dominio.com');
    });
    it('Comprobamos el elemento input[type=file] -> Fichero', () => {
      const fileName = 'images/logo.jpg';
      const fileType = 'image/jpeg';
      const fileSize = 32864;
      cy.get('input[type=file]').uploadFile(fileName, fileType).then((inputLoad) => {
        const { name, type, size } = inputLoad[0].files[0];
        expect(name).to.equal(fileName);
        expect(type).to.equal(fileType);
        expect(size).to.equal(fileSize);
      });
    });
    it('Comprobamos el elemento input[type=month] -> Mes', () => {
      cy.get('input[type=month]')
        .invoke('val', '2020-05')
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('2020-05');
        });
      cy.get(':nth-child(12) > :nth-child(3)').should('contain', '2020-05');
    });
    it('Comprobamos el elemento input[type=range] -> Rango', () => {
      cy.get('input[type=range]')
        .invoke('val', 1)
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('1');
        });
      cy.get(':nth-child(13) > :nth-child(3)').should('contain', '1');
    });
    it('Comprobamos el elemento input[type=time] -> Hora', () => {
      cy.get('input[type=time]')
        .invoke('val', '12:30')
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('12:30');
        });
      cy.get(':nth-child(14) > :nth-child(3)').should('contain', '12:30');
    });
    it('Comprobamos el elemento input[type=week] -> Semana', () => {
      cy.get('input[type=week]')
        .invoke('val', '2020-W18')
        .trigger('input').then((result) => {
          const { value } = result[0];
          expect(value).to.equal('2020-W18');
        });
      cy.get(':nth-child(15) > :nth-child(3)').should('contain', '2020-W18');
    });
  });