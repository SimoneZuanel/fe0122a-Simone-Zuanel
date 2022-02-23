function show() {
    let btn = document.querySelector("input");
    let testo = document.querySelectorAll("div")[2];

    if (btn.value == "open") {
        testo.classList.remove("nascosto")
        btn.value = "close"
    } else {
        testo.classList.add("nascosto")
        btn.value = "open"
    }
}

document.querySelector("input").addEventListener("click", show)

let selezioneBottoni = document.querySelectorAll("button")

function addListener(){
    selezioneBottoni + ".addEventListener(\"click\", formattazione)"
}

selezioneBottoni.forEach(addListener);

console.log(selezioneBottoni)

let appuntamenti = document.querySelectorAll("li")

function formattazione(){
    if(selezioneBottoni[0]){
        appuntamenti[0].style.color = "green"
        appuntamenti[2].style.color = "green"
    }else if(selezioneBottoni[1]){
        appuntamenti[1].style.color = "yellow"
    }else if(selezioneBottoni[2]){
        appuntamenti[4].style.color = "red"
    }else if(selezioneBottoni[3]){
        appuntamenti[3].innerHTML = "<del>" + appuntamenti[3].innerHTML + "</del>"
    }
}

document.querySelectorAll("button")[0].addEventListener("click", formattazione)

document.querySelectorAll("button")[1].addEventListener("click", formattazione)

document.querySelectorAll("button")[2].addEventListener("click", formattazione)
