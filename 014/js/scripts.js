'use strict'
function test() {

document.getElementById('first').innerHTML = 'Changed first sentence'

let element = document.getElementById('second')
element.style.fontWeight = 'bold'
element.style.color = '#80d8ff'
element.innerHTML = 'changing to blue color and bold text'


let p3 = document.getElementById('third')
let p4 = document.getElementById('fourth')
p3.hidden = true
p4.innerHTML = 'Sentence three was chosen'

let link = document.getElementById('link')
link.setAttribute('href','https://www.youtube.com')
link.setAttribute('target','_blank')

let newElementP = document.createElement('p')
newElementP.innerHTML = 'NEW!'
document.body.appendChild(newElementP)


let image = document.getElementById('image')
document.getElementById('div2').appendChild(image)
}