$(document).ready(function() {

    const images = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"
    ]

    $("#memory").hide()
    $("h2").hide()

    $("button").click(function() {

        $("#memory").show()
        $("h2").show()
        $("button").hide()

        let now = new Date()

        now.setHours(0)
        now.setMinutes(0)
        now.setSeconds(0)

        setInterval(function() {
            let h = now.getHours()
            let m = now.getMinutes()
            let s = now.getSeconds()

            now.setSeconds(s + 1)

            h = now.getHours()
            m = now.getMinutes()
            s = now.getSeconds()

            $("#timer").text(h + ":" + m + ":" + s)
        }, 1000)
    })

    for (i = 0; i < 16; i++) {
        let nRandom = Math.floor(Math.random() * images.length);
        let imageRandom = images.splice(nRandom, 1)
        let card = $("<div></div>")
        card.addClass("images").attr("id", "emoji" + i)
        $("#memory").append(card)
        let img = $("<img>")
        img.attr({ "id": i, "src": "img/" + imageRandom + ".png" })
        card.append(img)

    }

    let imagesClicked = []

    let isRunningAnimation = false

    $(".images").click(function() {

        if (imagesClicked.length < 2) {

            let imgId = $(this).children().attr("id")
            let imgSrc = $(this).children().attr("src")

            let imgObject = {
                id: imgId,
                src: imgSrc
            }

            let click = $("#clicks").text()
            click++
            $("#clicks").text(click)

            $("#" + imgId).show()

            imagesClicked.push(imgObject)
        }

        if (imagesClicked.length == 2 && !isRunningAnimation) {
            if (imagesClicked[0].src == imagesClicked[1].src) {
                imagesClicked = []
            } else {
                isRunningAnimation = true
                setTimeout(function() {
                    $("#" + imagesClicked[0].id).hide()
                    $("#" + imagesClicked[1].id).hide()
                    imagesClicked = []
                    isRunningAnimation = false
                }, 600)
            }
        }
    })
})


//usa jquery per creare un div come questo:
//<div class="images" id="emoji'+i+'" ></div>
//contenente un tag img come questo: 
//<img id="'+i+'" src="img/'+immagineRandom+'.png"  width="130" height="130">
//dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente


//genera ciclicamente 16 div contenenti le immagini pescate randomicamente
//crea un ciclo che si fermi alla sedicesima iterazione


//genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
//usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
//rimuovi l'immagine dall'array
//ricordati di mostrare gli elementi di html appena creati

//gestione evento click
//creo un array in cui salverò le informazioni sugli elementi cliccati

//preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)

//Crea un contatore di click
//inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
//incrementa di 1 il valore ottenuto
//riscrivi il numero nell'html, sostituendolo con quello pre esistente

//crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
//se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri


//crea una variabile contenente l'id dell'immagine cliccata
//crea una variabile contenente l'attributo src dell'immagine cliccata

//rendi visibile l'immagine presente nell'elemento cliccato

//crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create

//aggiungi l'oggetto appena creato all'array immaginiCliccate

//controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 

//crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
//confronta gli elementi cliccati, se le proprietà src sono identiche svuota l'array immaginiCliccate
//se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini

//usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
//le carte che ha scoperto prima che queste scompaiano