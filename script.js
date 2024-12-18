const key = "932fd253b22aa51e21b155346c0192ef";

function colocardadosnatela(dados){
    console.log(dados)
  document.querySelector(".cidade").innerHTML = "tempo em" + dados.name
  document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°c"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
  document.querySelector(".Umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;

} 

async function buscarcidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocardadosnatela(dados)
}

function cliqueiNobotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarcidade(cidade);
}

