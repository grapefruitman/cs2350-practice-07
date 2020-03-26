// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"
if (3> 2){
    console.log("3 wins")
}

let number = 13

const PI = 3.14

document.write('<div class="blue box"></div> <div class="red box"></div>')

function blueBox(){
    document.write('<div class="blue box"></div>')
}

function redBox(){
    document.write('<div class="red box"></div>')
}
redBox()
blueBox()


function randBox(){
    let r = Math.random()
    if (r<.5){
        blueBox()
    }else{
        redBox()
    }
}

for (let i = 10; i>0; i--){
    randBox()
}

let j = 0

while(j<10){
    let r = Math.random()
    if (r<.5){
        blueBox()
    }else{
        redBox()
    }
    j++
}

let k = 0
do {
    randBox()
    k++
}while(k<10)


function nBoxesFor(n){
    for (let i = n; i>0; i--){
        randBox()
    }
}
nBoxesFor(10)

function nBoxesDo(n) {
    let k = n
do {
    randBox()
    k--
}while(k>0)
}

function nBoxesWhile(n) {
    let j = n

while(j>0){
    let r = Math.random()
    if (r<.5){
        blueBox()
    }else{
        redBox()
    }
    j--
}
}

nBoxesFor(10)
nBoxesDo(10)
nBoxesWhile(10)
