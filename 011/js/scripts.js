'use strict'
function test() {

let fruit = ['banana',' orange',' pear',' pineapple']
let fruit2 = Array(' 2banana',' 2orange',' 2pear',' 2pineapple')
let fruit3 = Array.of(' 3banana',' 3orange',' 3pear',' 3pineapple')

let concat = fruit.concat(fruit2)

// document.getElementById('info').innerHTML = fruit
// document.getElementById('info').innerHTML = concat.join('|')

// concat.push('putInTheEnd')
// document.getElementById('info').innerHTML = concat

// concat.pop()
// document.getElementById('info').innerHTML = concat

// concat.shift()
// document.getElementById('info').innerHTML = concat

concat.unshift('addAtTheBeginning')
document.getElementById('info').innerHTML = concat
}