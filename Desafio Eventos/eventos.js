
document.getElementById('output').style.visibility= 'hidden'; // Oculta todas las cajas que estan por debajo del ID outpu


// Obtenemos el valor ingresado en el campo input y realizamos el calculo de cada cripto
document.getElementById('dolaresInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility= 'visible';
    let dolars = e.target.value;
    document.getElementById('btcOutpu').innerHTML = dolars*0.0000170;
    document.getElementById('antOutpu').innerHTML = dolars*0.08606;
    document.getElementById('ethOutpu').innerHTML = dolars*0.00051;
    document.getElementById('bnbOutpu').innerHTML = dolars*0.003190;
});


