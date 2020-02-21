'use strict'

// function test() {

//     let value = 1
//     let end = ''

//     // while (value < 10) {

//     //     end += value + '-'
//     //     value++
//     // }

//     do {
//         end += value + '-'
//         value++
//     } while (value < 1)
//     document.getElementById('info').innerHTML = end
// }


// function test() {
//     let values = [2, 4, 6, 8, 10]
//     let end = ''

//     for (let i = 0; i < values.length; i++) {
//         // if (values[i] != 6)
//         //     end += values[i] + '<br>'

//         if (values[i] == 8) continue//if the condition is true continue skip
//         end += values[i] + '</br>'
//     }

//     document.getElementById('info').innerHTML = end
// }

function test() {
    let values = [2, 4, 6, 8, 10]
    let end = ''

    for (let i = 0; i < values.length; i++) {
        // if (values[i] != 6)
        //     end += values[i] + '<br>'

        if (values[i] == 8) break
        end += values[i] + '</br>'
    }

    document.getElementById('info').innerHTML = end
}