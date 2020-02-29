'use strict'

function test() {

    class vehicle {

        constructor(type) {
            this.type = type
        }
        identify() {
            return `I am an ${this.type}`
        }
    }

    class automobile extends vehicle {
        shiftCar() {
            return 'i shift car'
        }
    }

    class airplane extends vehicle {
        setAltitude() {
            return 'A thousand miles'
        }
    }

    let automobiles = new automobile('car')
    let airplanes = new airplane('Boing 707')

    document.write(automobiles.identify())
    document.write(`<br>${automobiles.shiftCar()}`)
    document.write(`<br>${airplanes.identify()}`)
    document.write(`<br>${airplanes.setAltitude()}`)
}


function test2() {
    class person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        get Name() { return this.name }

        set Name(newName) { this.name = newName }

        get Age() { return this.age }

        set Age(age) { return this.age = age }
    }

    let man = new person('Diego', 45)
    man.Name = 'Batista'
    man.Age = 27
    document.write(`My name is ${man.name} i am ${man.Age} years old`)
}