var User = /** @class */ (function () {
    function User(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (x) {
        this.carica += x;
    };
    User.prototype.chiamata = function (y) {
        this.carica -= 0.2 * y;
        this.numeroChiamate += this.numeroChiamate;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var pippo = new User(20, 5);
console.log(pippo);
pippo.ricarica(20);
console.log(pippo);
pippo.chiamata(40);
console.log(pippo);
pippo.numero404();
console.log(pippo);
pippo.getNumeroChiamate();
console.log(pippo);
pippo.azzeraChiamate();
console.log(pippo);
