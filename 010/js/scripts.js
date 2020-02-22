'use strict'
function test() {

    let date = new Date()
    // let date_of_birth = new Date(year, month,hour,seconds,milliseconds)
    let date_of_birth = new Date(1996, 9, 25)
    date_of_birth.setHours(12)

    document.getElementById('info').innerHTML = date_of_birth
}