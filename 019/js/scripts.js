'use strict'

function test() {

    let name1 = ['john', 'ana']
    let name2 = ['sadrak', 'vitor'].concat(name1)

    document.getElementById('information').innerHTML = name2
}

function test2() {

    let name1 = ['john', 'ana']
    // Spread Operator example
    let name2 = ['sadrak', 'vitor', ...name1]

    document.getElementById('information').innerHTML = name2
}

function test3() {

    let phrase = 'This is a phrase'
    // let caracters = phrase.split('')
    let caracters = [...phrase]
    document.getElementById('information').innerHTML = caracters
}

function test4() {
    let numbers = [10, 20, 100]
    let result = add(...numbers)
    document.write(result)
}

function add(num1, num2, num3) {
    return num1 + num2 + num3
}