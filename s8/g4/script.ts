interface Smartphone {
  carica: number;
  numeroChiamate: number;
  ricarica(x: number): void;
  chiamata(y: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  carica: number;
  numeroChiamate: number;

  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }
  public ricarica(x: number) {
    this.carica += x;
  }
  public chiamata(y: number) {
    this.carica -= 0.2 * y;
    this.numeroChiamate += this.numeroChiamate
  }

  public numero404()  {
    return this.carica;
  }

  public getNumeroChiamate() {
    return this.numeroChiamate;
  }

  public azzeraChiamate() {
    this.numeroChiamate = 0;
  }

}

let pippo: User = new User(20, 5);
console.log(pippo);
pippo.ricarica(20)
console.log(pippo);
pippo.chiamata(40)
console.log(pippo);
pippo.numero404()
console.log(pippo);
pippo.getNumeroChiamate()
console.log(pippo);
pippo.azzeraChiamate()
console.log(pippo);
