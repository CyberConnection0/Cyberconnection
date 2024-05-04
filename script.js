// Função para obter o endereço IP do visitante
function getIP(callback) {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => callback(data.ip))
    .catch(error => console.error('Ocorreu um erro ao obter o endereço IP:', error));
}
// Uso da função para obter e exibir o endereço IP
getIP(function(ip) {
    console.log('Endereço IP do visitante:', ip);
    // Aqui você pode enviar o IP para o seu servidor ou fazer qualquer outra coisa que desejar com ele
});

let nome = prompt
("Digite o codigo de acesso!");
if (nome === '7248282') {
    alert('Olá Sagaz, Acesso liberado a voce sem rastreamento!');
  } else {
alert ("RASTREIO ATIVADO! Analisamos e detectamos que voce nao é o programador do site, Entao favor respeitar as leis aplicadas no site!!")
  };
function closePrivacyNotification() {
    var privacyNotification = document.getElementById('privacy-notification');
    privacyNotification.style.display = 'none';
}
// Definindo uma função para gerar cores RGB aleatórias
function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o vermelho
    var g = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o verde
    var b = Math.floor(Math.random() * 256); // Valor aleatório entre 0 e 255 para o azul
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Definindo uma função para alterar a cor de fundo do cabeçalho em intervalos regulares
function changeHeaderColor() {
    var header = document.getElementById('header');
    header.style.backgroundColor = getRandomColor();
}

// Chamando a função changeHeaderColor a cada 2 segundos
setInterval(changeHeaderColor, 2000); 


//abaixo aceita cookies
function aceitarCookies() {
    // Define um cookie para registrar a aceitação do usuário
    document.cookie = "cookies_aceitos=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Remove o alerta de cookies
    var cookieAlert = document.getElementById("cookieAlert");
    cookieAlert.parentNode.removeChild(cookieAlert);
}

// Verifica se o cookie de aceitação já está definido
window.onload = function() {
    if (document.cookie.indexOf("cookies_aceitos=true") !== -1) {
        var cookieAlert = document.getElementById("cookieAlert");
        cookieAlert.parentNode.removeChild(cookieAlert);
    }
};
