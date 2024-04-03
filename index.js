for (let i= 0; i < document.querySelectorAll(".drum").length ; i++) {

    
    document.querySelectorAll("button")[i].addEventListener("click", handelclick)
    function handelclick(){
        if (this.innerHTML=="j"){
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
        }
        else if (this.innerHTML=="k"){
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
        }
        else if (this.innerHTML=="l"){
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
        else {
            var audio = new Audio('sounds/tom-'+ (i+1) +'.mp3')
            audio.play()
        }
    }
    }
    addEventListener("keypress", function(event){
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
    )