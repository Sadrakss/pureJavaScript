'use strict'
let value = true
function test() {

    // let picture = document.getElementById('img')

    // if (value) {
    //     picture.setAttribute('src', 'https://lh3.googleusercontent.com/proxy/iHSMmFp_2IJ_3p5foX28bUUSlJYrfBoVAUuwsinUmfRFbMPP4-jeoTqsjW3wy-NdDZcQ3wFxIol0kE4pNK6Ckw5DXj-w5WVokB09149dcJfPUmKLjuLE5KGnk0kXX8add3HS')
    //     value = false
    // } else {
    //     picture.setAttribute('src', 'https://icons.iconarchive.com/icons/visualpharm/must-have/256/Check-icon.png')
    //     value = true
    // }


    // <!-- //////////////////////////////////////////////////////////////////////////////////////// -->

    // let iconYes = document.getElementById('icon-yes')
    // let iconNo = document.getElementById('icon-no')

    // let amountImageYes = iconYes.getElementsByTagName('img').length
    // let amountImageNo = iconNo.getElementsByTagName('img').length
    // document.getElementById('info').innerHTML = amountImageYes+amountImageNo


    // <!-- //////////////////////////////////////////////////////////////////////////////////////// -->

    let element = document.querySelectorAll('h3.title')
    for (let j = 0; j < 2; j++)
        element[j].innerHTML = 'new text'

}