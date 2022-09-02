import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Automobile Insurance Alterando e Fazendo Commit pela segunda vez', ()=> {

   
    // it('Enter Vehicle Data,', function () {
        
    //     var vehicle = signupFactory.vehicle()

    //     SignupPage.go()
    //     SignupPage.fillVehicle(vehicle)
    //     SignupPage.expectedPage()
    //     

    // }) 

    // it('Enter Insurant Data', function() {

    //     var vehicle = signupFactory.vehicle()
    //     var insurance = signupFactory.insurance()

    //     SignupPage.go()
    //     SignupPage.fillVehicle(vehicle)
    //     SignupPage.expectedPage()
    //     SignupPage.fillInsurance(insurance)

    // })

    // it('Enter Product Data', function(){

    //     var vehicle = signupFactory.vehicle()
    //     var insurance = signupFactory.insurance()
    //     var product = signupFactory.product()

    //     SignupPage.go()
    //     SignupPage.fillVehicle(vehicle)
    //     SignupPage.expectedPage()
    //     SignupPage.fillInsurance(insurance)
    //     SignupPage.fillProduct(product)
    // })

    // it('Select Price', function(){
    //     var vehicle = signupFactory.vehicle()
    //     var insurance = signupFactory.insurance()
    //     var product = signupFactory.product()

    //     SignupPage.go()
    //     SignupPage.fillVehicle(vehicle)
    //     SignupPage.expectedPage()
    //     SignupPage.fillInsurance(insurance)
    //     SignupPage.fillProduct(product)

    //     SignupPage.fillPrice()
    // })

    it('Send Quote', function(){
        var vehicle = signupFactory.vehicle()
        var insurance = signupFactory.insurance()
        var product = signupFactory.product()
        var quote = signupFactory.quote()

        SignupPage.go()
        SignupPage.fillVehicle(vehicle)
        SignupPage.expectedPage()
        SignupPage.fillInsurance(insurance)
        SignupPage.fillProduct(product)

        SignupPage.fillPrice()

        SignupPage.fillQuote(quote)
        //const expectedMessage = 'Sending e-mail success!'
        //SignupPage.modalContentShouldBe(expectedMessage)
    })
})
