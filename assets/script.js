// Acessando os elementos HTML pelo id.
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Essa variável irá guardar a função responsável por fazer o relogóio atualizar a cada segundo com o setInterval.
const relogio = setInterval(function time() {
    
// Aqui básicamente estou pegando a data.  
    let dateToday = new Date();

// A partir da data, estou pegando o horario e guardando nas variáveis.
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

// Essa condição irá adicionar 0 na frente dos números q forem menor que 10.
    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (seg < 10) seg = "0" + seg;

// Aqui, pegamos a variável do elemento HTML e adicionamos a variável que guarda o horário.
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})