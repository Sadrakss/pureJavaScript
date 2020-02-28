'use strict'

function test() {
    document.write(add(10,5))
}


function add(num1, num2=100) {
    return num1 + num2
}

function test2(){
    let people={
        name:'john',
        age:23,
        speak(){
            return 'Hello World..'
        }
    }
    document.write(people.speak())
}