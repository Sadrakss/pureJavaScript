'use strict'
test()
function test() {

    // let values = [2, 4, 6, 8, 10]
    // let end = ''

    // for (let i = 0; i < values.length; i++)
    //     end += values[i] + '<br>'

    // for (let i = values.length - 1; i >= 0; i--)
    //     end += values[i] + '<br>'
    // document.getElementById('info').innerHTML = end
    // console.log(values.length)


    let car = {
        brand: 'ford',
        color: 'white',
        year: '2020'
    }

    let end = ''
    let item
    for (item in car)
        end += car[item]
// document.getElementById('info').innerHTML = end
}