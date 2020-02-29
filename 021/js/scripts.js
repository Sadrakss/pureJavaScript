'use strict'

function test() {

    class people {
        constructor(name, age) {
            // document.write(`I'm born now`)
            this.name = name
            this.age = age
        }
        speak(speak) {
            // return `I'm talked`
            document.write(speak)
        }
        addition(num1, num2) {
            return num1 + num2
        }
    }

    let me = new people('Eliezer', 25)
    document.write(`${me.name} is ${me.age} years old <br>`)
    // document.write(`<br>${me.speak()}`)
    me.speak('Hello Guys')
    document.write(`<br> ${me.addition(23,4)}`)
}
