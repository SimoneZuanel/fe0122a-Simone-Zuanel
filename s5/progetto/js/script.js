let btn = document.querySelector("#add_btn")

btn.addEventListener("click", function () {
    let aggiunta = document.querySelector("#task_txt").value
    let lista = document.querySelector("#tasks_list_html")
    let li = document.createElement("li")
    li.innerHTML = aggiunta

    document.querySelector("#task_txt").value = ""

    li.addEventListener("click", function () {
        li.remove()
        rimuoviElementodaDb(li)
    })

    lista.append(li)

    salvaDatiNelDb(aggiunta)

})

function creaHtml() {
    let elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'))

    let lista = document.querySelector("#tasks_list_html")

    elementiSalvati.forEach(function (elemento) {

        let li = document.createElement("li")
        li.innerHTML = elemento
        
        li.addEventListener("click", function () {
            li.remove()
            rimuoviElementodaDb(li)
        })
     
        lista.append(li)

    })
}

creaHtml()

//con questa funzione salvo e aggiorno i dati in localstorage
function salvaDatiNelDb(aggiunta) {

    /*salvataggio dati*/

    /* versione estesa
    if( localStorage.getItem('elementiSalvati') == null ){
        var db = [aggiunta]
    }else{
    var db = JSON.parse(localStorage.getItem('elementiSalvati'))
    db.push(aggiunta)
}
*/

    var ls = localStorage.getItem('elementiSalvati')

    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)

    localStorage.setItem('elementiSalvati', JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el) {

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento, 1)

    localStorage.setItem('elementiSalvati', JSON.stringify(db))
}