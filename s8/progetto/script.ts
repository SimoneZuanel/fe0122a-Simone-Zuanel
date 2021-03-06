fetch ("Abbigliamento.json")
.then (res => res.json())
.then (data => {
    data.forEach((item:Clothes) => {
        let cloth = new Clothes(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
        
        console.log(cloth)
        console.log("Sconto da applicare: " + cloth.getSaldoCapo() + " €")
        console.log("Prezzo scontato: " + cloth.getAcquistoCapo() + " €")
    })
})

class Clothes {
    id:number 
    codprod:number
    collezione: string
    capo:string  
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number) {
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getSaldoCapo(): number {
        return this.prezzoivainclusa * this.saldo / 100
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo()
    }
    
}

let cloth1: Clothes = new Clothes(6, 5986, "primavera", "camicia", 1298, 2, "marrone", 20.50, 25.01, "magazzino", 26)
let cloth2: Clothes = new Clothes(7, 9999, "primavera", "gonna", 1266, 6, "beige", 13.80, 16.80, "negozio", 24)
let cloth3: Clothes = new Clothes(8, 3237, "estate", "pantalone", 1041, 4, "nero", 25.30, 30.90, "negozio", 50)

console.log(cloth1)
console.log("Sconto da applicare: " + cloth1.getSaldoCapo() + " €")
console.log("Prezzo scontato: " + cloth1.getAcquistoCapo() + " €")
console.log(cloth2)
console.log("Sconto da applicare: " + cloth2.getSaldoCapo() + " €")
console.log("Prezzo scontato: " + cloth2.getAcquistoCapo() + " €")
console.log(cloth3)
console.log("Sconto da applicare: " + cloth3.getSaldoCapo() + " €")
console.log("Prezzo scontato: " + cloth3.getAcquistoCapo() + " €")