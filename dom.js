var buttonlist = document.querySelectorAll('.button').length
for(var j=0; j<buttonlist;j++)
{
    document.querySelectorAll('.button')[j].addEventListener("click",function(){
        var buttonstyle = this.innerHTML;
        sound(buttonstyle);
        animation(buttonstyle);
    });
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
})

function sound(key){
    switch(key){
        case "w":
            var sound1 =  new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/35[kb]mattel-bd1.wav.mp3");
            sound1.play();
            break;
        
        case "a":
            var sound2 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/30[kb]mattel-bd2.wav.mp3");
            sound2.play();
            break;
        
        case "s":
            var sound3 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/25[kb]mattel-hh1.wav.mp3");
            sound3.play();
            break;

        case "d":
            var sound4 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/25[kb]mattel-sd1.wav.mp3");
            sound4.play();
            break;
        
        case "j":
            var sound5 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/27[kb]mattel-tom18.wav.mp3");
            sound5.play();
            break; 
            
        case "k":
            var sound6 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/33[kb]mattel-tom04.wav.mp3");
            sound6.play();
            break;
            
        case "l":
            var sound7 = new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/LO%20FI%20and%208%20BIT%20KITS/Mattel%20Synso/50[kb]mattel-bd5.wav.mp3");
            sound7.play();
            break; 
        
        default: console.log(key);      
    }
}

function animation(currentkey){
    var b = document.getElementById(currentkey);
    b.classList.add("animation");

    setTimeout(function(){
        b.classList.remove("animation");
    },100);
}