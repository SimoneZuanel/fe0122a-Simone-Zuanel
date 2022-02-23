function calcoloSpesa() {
    var spesa = document.getElementById("spesa").value;
    document.getElementById("messaggioBudget").innerHTML =
        document.getElementById("budget").value -= spesa;
    controlloBudget();
}

document.getElementById("calcolo").addEventListener("click", calcoloSpesa);

function controlloBudget() {
    if (document.getElementById("messaggioBudget").innerHTML == 50) {
        alert("Sei a metà budget");
    } else if (document.getElementById("messaggioBudget").innerHTML == 20) {
        alert("Sei povero");
    } else {}
}

/*const spesa = 5;

for (let i = 100; i <= budget; i--) {
    var budget = document.getElementById("budgetAttuale").value;
    budget = 90;
    if (budget <= budget / 2) {
        document.getElementById("messaggioBudget").innerHTML = "Sei a metà budget";
    } else if (budget <= 25) {
        document.getElementById("messaggioBudget").innerHTML = "Sei povero";
    }
    console.log();
}*/