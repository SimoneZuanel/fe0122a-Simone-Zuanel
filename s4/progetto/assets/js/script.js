var risultato = document.getElementById("risultato")

function mostraTasto(tasto){
    let valoreTasto = tasto.id
    risultato.innerHTML += valoreTasto
}

function resetButton(){
    risultato.innerHTML = ""
}

function totale(){
    risultato.innerHTML = eval(risultato.innerHTML)
}
