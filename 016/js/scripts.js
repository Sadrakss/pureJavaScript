'use strict'


function start(){
    document.getElementById('button').onclick = showDate
}

document.getElementById('button').onclick = showDate

function test() {

    document.write('Hello world!')

}

function change(text) {
    text.innerHTML = 'Text example'
}

function showDate(){
    document.getElementById('date').innerHTML = Date()

}