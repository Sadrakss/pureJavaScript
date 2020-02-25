'use strict'
function test() {
// document.getElementById('first').innerHTML = 'new phrase'
// document.getElementsByClassName('one').innerHTML = 'Other phrase'

let elementID = document.getElementById('first')
elementID.style.color = 'black'

let elementClass = document.getElementsByClassName('one')
elementClass[2].innerHTML = 'new text'
}