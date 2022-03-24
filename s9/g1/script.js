var reg = document.getElementById("regioni");
var prov = document.getElementById("province");
var opt = document.querySelector("option");

fetch("regioni.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            let optReg = document.createElement("option");
            reg.append(optReg);
            optReg.innerHTML = item.prov_regione;
            optReg.value = item.prov_regione;
        });
    });

fetch("province.json")
    .then((res) => res.json())
    .then((data) => {
        reg.addEventListener("change", function() {
            let provinceAttuali = document.querySelectorAll("#province > option");

            let imgProvinciaAttuale = document.querySelector("#imgProv > img");
            if (imgProvinciaAttuale) {
                imgProvinciaAttuale.remove()
            }

            if (provinceAttuali) {
                let placeholder = document.createElement("option");
                prov.append(placeholder);
                provinceAttuali.forEach((item) => {
                    item.remove();
                });
            }

            let provReg = data.filter(function(item) {
                return item.prov_reg == reg.value;
            });

            provReg.forEach((item) => {
                let optProv = document.createElement("option");
                prov.append(optProv);
                optProv.innerHTML = item.prov_nome;
            });

            let imgRegioneAttuale = document.querySelector("#imgReg > img");
            if (imgRegioneAttuale) {
                imgRegioneAttuale.remove()
            }
            let divReg = document.getElementById("imgReg");
            let regione = document.createElement("img");
            regione.setAttribute("src", "img/regioni/" + reg.value + ".png");
            divReg.append(regione);

        });

        prov.addEventListener("change", function() {
            let imgProvinciaAttuale = document.querySelector("#imgProv > img");
            if (imgProvinciaAttuale) {
                imgProvinciaAttuale.remove()
            }
            let divProv = document.getElementById("imgProv");
            let provincia = document.createElement("img");
            provincia.setAttribute("src", "img/province/" + prov.value + ".png");
            divProv.append(provincia);
        })

    });