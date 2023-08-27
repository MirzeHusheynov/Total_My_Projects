"use strict"
let oyuncuScor = document.querySelector("#oyuncuScor")
let computerScor = document.querySelector("#computerScor")
const playerSecimi = document.querySelector("#playerSecimi")
const computerSecimi = document.querySelector("#computerSecimi")
const yumruqBtn = document.querySelector("#yumruqBtn")
const elBtn = document.querySelector("#elBtn")
const barmaqBtn = document.querySelector("#barmaqBtn")
const playerPhoto = document.querySelector("#playerPhoto")
let oyuncuP = document.querySelector("#oyuncuP")
let oyuncuHesab = 0
let compHesab = 0
let table = document.querySelector("#table")

function compRandom(){
    let element = ["el","barmaq","yumruq"]
    const randomEl = Math.floor(Math.random()*element.length)
    computerSecimi.setAttribute("src",`${element[randomEl]}.jpeg`)
    return element[randomEl]
}


function yoxlama(playerSecimi,komputerSecimi){
    switch(playerSecimi+komputerSecimi){
        case "barmaqel":
        case "yumruqbarmaq":
        case "elyumruq":
            win()
            break
        case "barmaqyumruq":
        case "elbarmaq":
        case "yumruqel":
            lose()
         break
         case "barmaqbarmaq":
         case "yumruqyumruq":
         case "elel":
        beraber()
        break
        default: "Wrong"
        break

    }
}

function game(){

    yumruqBtn.addEventListener("click",function(){
     playerSecimi.setAttribute("src","yumruq.jpeg")
let compRan = compRandom()
yoxlama("yumruq",compRan)
 
    })
    elBtn.addEventListener("click",function(){
        playerSecimi.setAttribute("src","el.jpeg")
let compRan = compRandom()
yoxlama("el",compRan)
  

    })
    barmaqBtn.addEventListener("click",function(){
        playerSecimi.setAttribute("src","barmaq.jpeg")
let compRan = compRandom()
yoxlama("barmaq",compRan)
    })
 
}

game()

function win(){

    oyuncuHesab++
    oyuncuScor.innerHTML = oyuncuHesab.toString();
    table.innerHTML = "Player Win"
    }
    function lose(){
        compHesab++
        computerScor.innerHTML = compHesab.toString();
        table.innerHTML = "Komputer Win"
    } 
    function beraber(){
        table.innerHTML = "Draw"
    }

 const duymeIle = addEventListener("keydown",function(e){
    if(e.key == "r"){
     playerSecimi.setAttribute("src","yumruq.jpeg")
    let compRan = compRandom()
    yoxlama("yumruq",compRan)
    }
   else if(e.key == "s"){
        playerSecimi.setAttribute("src","barmaq.jpeg")
       let compRan = compRandom()
       yoxlama("barmaq",compRan)
       }
    else if(e.key == "p"){
        playerSecimi.setAttribute("src","el.jpeg")
       let compRan = compRandom()
       yoxlama("el",compRan)
       }

    else{
        alert("Zehmet olmasa duzgun herf secin R,S,P")
    }
 
 })

 
//  register js




