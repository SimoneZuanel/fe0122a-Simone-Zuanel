var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) { for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function() {
    function Tasse(redditoannuolordo) {
        this.redditoannuolordo = redditoannuolordo;
    }
    return Tasse;
}());
var CodiceRedditivitaUno = /** @class */ (function(_super) {
    __extends(CodiceRedditivitaUno, _super);

    function CodiceRedditivitaUno() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codredd = 1;
        _this.tasseinps = 20;
        _this.tasseirpef = 15;
        return _this;
    }
    return CodiceRedditivitaUno;
}(Tasse));
var CodiceRedditivitaDue = /** @class */ (function(_super) {
    __extends(CodiceRedditivitaDue, _super);

    function CodiceRedditivitaDue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codredd = 2;
        _this.tasseinps = 30;
        _this.tasseirpef = 20;
        return _this;
    }
    return CodiceRedditivitaDue;
}(Tasse));
var CodiceRedditivitaTre = /** @class */ (function(_super) {
    __extends(CodiceRedditivitaTre, _super);

    function CodiceRedditivitaTre() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codredd = 3;
        _this.tasseinps = 35;
        _this.tasseirpef = 25;
        return _this;
    }
    return CodiceRedditivitaTre;
}(Tasse));
var Artigiani = /** @class */ (function(_super) {
    __extends(Artigiani, _super);

    function Artigiani() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiani.prototype.getUtileTasse = function() {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Artigiani.prototype.getTasseInps = function() {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    Artigiani.prototype.getTasseIrpef = function() {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    Artigiani.prototype.getRedditoAnnuoNetto = function() {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Artigiani;
}(CodiceRedditivitaUno));
var Impiegati = /** @class */ (function(_super) {
    __extends(Impiegati, _super);

    function Impiegati() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Impiegati.prototype.getUtileTasse = function() {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Impiegati.prototype.getTasseInps = function() {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    Impiegati.prototype.getTasseIrpef = function() {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    Impiegati.prototype.getRedditoAnnuoNetto = function() {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Impiegati;
}(CodiceRedditivitaDue));
var Operai = /** @class */ (function(_super) {
    __extends(Operai, _super);

    function Operai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Operai.prototype.getUtileTasse = function() {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Operai.prototype.getTasseInps = function() {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    Operai.prototype.getTasseIrpef = function() {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    Operai.prototype.getRedditoAnnuoNetto = function() {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return Operai;
}(CodiceRedditivitaTre));
var lavoratoreUno = new Artigiani(17000);
var lavoratoreDue = new Impiegati(24000);
var lavoratoreTre = new Operai(35000);
console.log(lavoratoreUno);
console.log(lavoratoreUno.getUtileTasse());
console.log(lavoratoreUno.getTasseInps());
console.log(lavoratoreUno.getTasseIrpef());
console.log(lavoratoreUno.getRedditoAnnuoNetto());
console.log(lavoratoreDue);
console.log(lavoratoreDue.getUtileTasse());
console.log(lavoratoreDue.getTasseInps());
console.log(lavoratoreDue.getTasseIrpef());
console.log(lavoratoreDue.getRedditoAnnuoNetto());
console.log(lavoratoreTre);
console.log(lavoratoreTre.getUtileTasse());
console.log(lavoratoreTre.getTasseInps());
console.log(lavoratoreTre.getTasseIrpef());
console.log(lavoratoreTre.getRedditoAnnuoNetto());