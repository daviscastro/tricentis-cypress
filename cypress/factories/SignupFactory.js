var faker =  require('faker')

export default {

    vehicle: function () {

        var data = {
            kw: '1200',
            date: '08/11/2021',
            list_price: '30000',
            license_plate: 'PGH2344',
            annual_mileage: '1000'
        }
        return data
    },
    
    insurance: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            first_name: `${firstName}`, 
            last_name: `${lastName}`,
            birthdate: '08/23/1985',
            street: 'The Magnificent Mile',
            zip_code: '23234545',
            city: 'Chicago',
            picture: 'imagem.jpg'
    
        }
        return data
    },

    product: function(){
        
        var data = {
            date: '12/25/2024'
        }
        return data
    },

    quote: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            email: faker.internet.email(firstName),
            phone:'551890654',
            username:`${firstName}${lastName}`,
            password:'Pwd@123',

        }
        return data
    }

}       
