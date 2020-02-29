'use strict'

function test() {
    let people={
        name:'Gabriela'
    }

    let car={
        brand:'Audi',
        year:'2015'
    }

    // let sentence = 'Hello Ms. '+people.name+' o '+car.brand+ ' it is yours'
    let sentence = `Hello lady ${people.name} the ${car.brand} car is yours  right  now`
    document.write(sentence)
}

function test2(){
    // document.write(`hello World..`)
    console.log('hello world')

    let element = document.getElementById('information')
    element.innerHTML = `Hello
                        World!`
}