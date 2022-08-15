

class SignupPage {
    go(){
        cy.visit('/')

        cy.get('a[id="offer_automobile"]').click()
        cy.get('span[id="selectedinsurance"]').should('have.text', 'Automobile Insurance')
    }
    
    fillVehicle(vehicle) {
        cy.get('#make').select("BMW")
        cy.get('#make').should('have.value' , 'BMW')

        cy.get('input[id="engineperformance"]').type(vehicle.kw)

        cy.get('input[id="dateofmanufacture"]').type(vehicle.date)

        cy.get('#numberofseats').select("2")
        cy.get('#numberofseats').should('have.value' , '2')

        cy.get('#fuel').select("Electric Power")
        cy.get('#fuel').should('have.value' , 'Electric Power')

        cy.get('input[id="listprice"]').type(vehicle.list_price)

        cy.get('input[id="licenseplatenumber"]').type(vehicle.license_plate)

        cy.get('input[id="annualmileage"]').type(vehicle.annual_mileage)

        cy.get('button[id="nextenterinsurantdata"]').click()
    }
    expectedPage() {
        cy.get('[id="firstname"]').should('have.text', '')
    }


    fillInsurance(insurance) {
        cy.get('input[id="firstname"]').type(insurance.first_name)
        cy.get('input[id="lastname"]').type(insurance.last_name)

        cy.get('input[id="birthdate"]').type(insurance.birthdate)

        cy.get('input[type="radio"][value="Male"]').check({force: true})
    

        cy.get('input[id="streetaddress"]').type(insurance.street)
        
        cy.get('#country').select('United States')
        cy.get('#country').should('have.value' , 'United States')

        cy.get('input[id="zipcode"]').type(insurance.zip_code)
        cy.get('input[id="city"]').type(insurance.city)

        cy.get('#occupation').select('Employee')
        cy.get('#occupation').should('have.value', 'Employee')

       
        cy.get('input[type="checkbox"][value="Speeding"]').check({force: true})

        cy.get('button[id="open"]').click()
        cy.get('button[id="open"]').should('have.text', 'Open')



        //cy.get('button[class="ideal-file-upload"]').click()
        //.selectFile('cypress/fixtures/images' + insurance.picture,  {force: true})

        //.attachFile('/images/' + insurance.picture, {force: true})

        cy.get('button[id="nextenterproductdata"]').click()
        
    }
    
    fillProduct(product) { 
        cy.get('[id="startdate"]').type(product.date)

        cy.get('#insurancesum').select('7000000')
        cy.get('#insurancesum').should('have.value', '7000000')
        cy.get('#meritrating').select('Malus 11')
        cy.get('#meritrating').should('have.value', 'Malus 11')
        cy.get('#damageinsurance').select('No Coverage')
        cy.get('#damageinsurance').should('have.value', 'No Coverage')

        cy.get('input[type="checkbox"][value="Yes"]').check({force: true})

        cy.get('#courtesycar').select('No')
        cy.get('#courtesycar').should('have.value', 'No')

        cy.get('button[id="nextselectpriceoption"]').click()
    
    }

    fillPrice() {
        cy.get('input[type="radio"][value="Platinum"]').check({force: true})
        cy.get('button[id="nextsendquote"]').click()

    }

    fillQuote(quote){
        cy.get('input[id="email"]').type(quote.email)
        cy.get('input[id="phone"]').type(quote.phone)
        cy.get('input[id="username"]').type(quote.username)
        cy.get('input[id="password"]').type(quote.password)
        cy.get('input[id="confirmpassword"]').type(quote.password)

      
        cy.get('button[id="sendemail"]').should('have.text', '« Send »')
        cy.get('button[id="sendemail"]').click({force: true})
        
       
        //after(()=> {

        cy.contains('div[class="sweet-alert showSweetAlert visible"]').should('be.visible')

       // })

        

        //cy.intercept('POST', /101/tcpdf/pdfs/quote.php, {}).as('pdfPost')
        
        //cy.wait('@pdfPost').its('baseUrl').should('include' , '/101/tcpdf/pdfs/quote.php')



        }
    
        //modalContentShouldBe(expectedMessage){
        // //cy.intercept({
        //     method: 'POST',
        //     url: 'http://sampleapp.tricentis.com/101/tcpdf/pdfs/quote.php'
        // }).as('apiCheck')
        // cy.visit('/')
        // cy.wait('@apiCheck').then((interception)=> {
        //     assert.isNotNull(interception.responde.body, 'Suc')
        // })

        
      // cy.wait('[class="sweet-alert showSweetAlert visible"]', expectedMessage).should('be.visible')
     // }
  }


export default new SignupPage;
