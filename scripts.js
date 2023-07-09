function calculaTipo(event){
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let QualidadeServ = document.getElementById('QualidadeServ').value;
    let NumeroDePessoas = document.getElementById('pessoas').value;

    if(conta == '' | QualidadeServ == 0){
        alert("Por favor, preencha os valores");
        return;
    }

    if(NumeroDePessoas == "" | pessoas <= 1){
        NumeroDePessoas = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";

    }

    let total = (conta * QualidadeServ) / NumeroDePessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculaTipo);