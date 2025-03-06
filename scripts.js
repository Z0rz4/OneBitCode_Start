function calculaTipo(event){
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let qualidadeServ = document.getElementById('QualidadeServ').value;
    let numeroDePessoas = document.getElementById('pessoas').value;

    if(conta == '' | qualidadeServ == 0){
        alert("Por favor, preencha os valores");
        return;
    }

    if(numeroDePessoas == "" | pessoas <= 1){
        numeroDePessoas = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";

    }

    let total = (conta * qualidadeServ) / numeroDePessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculaTipo);
