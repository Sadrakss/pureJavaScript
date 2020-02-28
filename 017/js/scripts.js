'use strict'

function testVar() {
    var value = 10
    if (true) {
        var value = 20
    }
    document.write(value)
}

function testLet(){
    let value = 10

    if(true){
        value = 20
    }
    document.write(value)
}

function testConst(){
    // const value = 10
    // // value = 20
    // let newValue = 20*value
    // document.write(newValue)

    const people={
        name:'sadrak',
        age:23
    }
   people.name = 'Paulo'
    document.write('My name is '+people.name +', i have '+people.age+' years old.')
}
