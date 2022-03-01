// Quando il documento è pronto...

//gestisco il click sul pulsante Iscriviti

// inizializzo una variabile di controllo a true

// utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto

// nell'else uso next e text per impostare l'elemento span adiacente

// assegno a due variabili il valore dei due campi email

// ripeto la condizione nel nome anche per l'email

// nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

//invio del form se tutti i campi sono validi

//gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e
//posizionare un asterisco per identificare il campo obbligatorio.

$(document).ready(function() {
    $("#iscr-news").click(function() {
        let nomeContenitore = $("#nome").val();
        if (nomeContenitore) {
            $("#nome").next().text("corretto");
            $("#nome").next().css({ color: "white", "background-color": "green" });
        } else {
            $("#nome").next().text("errato");
            $("#nome").next().css({ color: "white", "background-color": "red" });
        }
        let emailContenitore1 = $("#email-1").val();
        if (emailContenitore1 && emailContenitore1.includes("@")) {
            $("#email-1").next().text("corretto");
            $("#email-1").next().css({ color: "white", "background-color": "green" });
        } else {
            $("#email-1").next().text("errato");
            $("#email-1").next().css({ color: "white", "background-color": "red" });
        }
        let emailContenitore = $("#email-1").val();
        let emailContenitoreControllo = $("#email-2").val();
        if (emailContenitoreControllo == emailContenitore) {
            $("#email-2").next().text("corretto");
            $("#email-2").next().css({ color: "white", "background-color": "green" });
        } else {
            $("#email-2").next().text("errato");
            $("#email-2").next().css({ color: "white", "background-color": "red" });
        }
    });
    $("#pulisci-form").click(function() {
        let contenitori = $("#nome, #email-1, #email-2");
        contenitori.val("");
        contenitori.next().text("*");
        contenitori.next().css({ color: "black", "background-color": "white" });
    });
});