'use strict'

function test() {

    let people={
        name:'sadrak',
        age:23,
        nationality:'brazilian'
    }

    // let name = people.name
    // let age= people.age
    // let nationality = people.nationality

   let{name,age,nationality} = people
   document.write(name,' ',nationality);
}

function test2(){
    let names=['john','ana','magali']

    let [firstName,secondName] = names

    document.write(firstName,' ',secondName)
}

function test3(){
    let values = [1,2,3]

    let [num1,num2,num3] = values

    document.write(num1,',',num2,',',num3)
}