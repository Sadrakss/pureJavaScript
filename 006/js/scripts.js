'use strict'

// function test() {
//     let x = 10
//     let y = 20
//     let result = ''

//     if (x != y) result = 'true'

//     else result = 'false'

//     document.getElementById('info').innerHTML = result
// }

function test() {
    // let x = 1
    // let result = ''

    // result = (x == 10) ? 'true':'false'
    // document.getElementById('info').innerHTML = result

    // --------------------------------------------------------------------------

    // let gender = 'Women'
    // document.getElementById('info').innerHTML = (gender == 'male') ? 'Gender Male' : 'Gender Women'
    // --------------------------------------------------------------------------

    let classification = 'weak'
    let result = ''

    switch (classification) {
        case 'bad':
        case 'weak':
            classification = 'negative'
            break
        case 'good':
        case 'excellent':
            classification = 'positive'
            break
        default:
            classification = 'invalid option!'
            break;
    }
    document.getElementById('info').innerHTML = classification
}