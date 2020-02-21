'use strict'
// teste()

// window.document.write(name)

// function teste() {
//  name = 'João'
// }

// function test() {
//     let x = 10
//     let y = 20
//     let result = x + y
//     document.write(result)
// }

function test() {
    let result = add(100, 200)
    document.getElementById('info').innerHTML = result
}

function add(x, y) {
    let result = x + y
    return result
}