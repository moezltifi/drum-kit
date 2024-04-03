
function sounds(){
    if (event.key=="w"){
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play()
    }
    else if (event.key=="a"){
        var audio = new Audio('sounds/tom-2.mp3')
        audio.play()
    }
    else if (event.key=="s"){
        var audio = new Audio('sounds/tom-3.mp3')
        audio.play()
    }
    else if (event.key=="d"){
        var audio = new Audio('sounds/tom-4.mp3')
        audio.play()
    }
    else if (event.key=="j"){
        var audio = new Audio('sounds/snare.mp3')
        audio.play()
    }
    else if (event.key=="k"){
        var audio = new Audio('sounds/crash.mp3')
        audio.play()
    }
    else if (event.key=="l"){
        var audio = new Audio('sounds/kick-bass.mp3')
        audio.play()
    }
}
for (let i= 0; i < document.querySelectorAll(".drum").length ; i++) {
    
document.querySelectorAll("button")[i].addEventListener("click", handelclick)
function handelclick(){
   sounds()
}
}
addEventListener("keypress", function(event){
sounds()
}
)
