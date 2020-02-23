'use strict'
function test() {

    // try{
    //     document.write(10+o) 
    // }catch(error){
    //     document.write('an error happened'+' : '+error)
    // }


    // let value = 10

    // try {
    //     if (value < 10) throw 'invalid(less than 10)'
    //     if (value > 10) throw 'invalid(greater than 10)'
    //     document.write('correct value')
    // } catch (error) {
    //     document.write(error)
    // }

    let element = document.getElementById('info')

    try {
        // addUp(10,20)
        element.innerHTML = 'i am inside of the try'
    } catch (error) {
        element.innerHTML = 'an error happened'

    } finally {
        element.innerHTML += '</br>regardless i am executed'
    }

}