'use strict'
function test() {
let value = 100;
let max = 90
let min = 100
    // document.getElementById('info').innerHTML = Math.PI
    // document.getElementById('info').innerHTML = Math.abs(value) // Shows positive number value 
    // document.getElementById('info').innerHTML = Math.sqrt(value) 
    // document.getElementById('info').innerHTML = Math.cbrt(value)
    // document.getElementById('info').innerHTML = Math.ceil(value)
    // document.getElementById('info').innerHTML = Math.floor(value)
    // document.getElementById('info').innerHTML = Math.round(value)
    // document.getElementById('info').innerHTML = Math.trunc(value)
    // document.getElementById('info').innerHTML = Math.pow(value,2)
    document.getElementById('info').innerHTML = Math.trunc(Math.random() * (max - min) + min)

}