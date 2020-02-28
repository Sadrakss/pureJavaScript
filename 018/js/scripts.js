'use strict'

function test() {
    // let names = ['john', 'ana', 'carlos']
    // let name1 = names[0]
    // let name2 = names[1]
    // let name3 = names[2]

    // let[name1,name2,name3] = names
    // document.write(name1+', '+name2+', '+name3)


    let people={
        name='sadrak',
        age:23,
        nationality:'brazilian',
    }

    // let name = people.name
    // let age= people.age
    // let nationality = people.nationality

   let{name} = people
   document.write(name)
}