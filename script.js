
const planetas = document.querySelectorAll(".planeta");
const curiosidade = document.querySelector("#curiosidade");

const informacoes = {
    "Mercúrio": "Mercúrio é o menor planeta do Sistema Solar.",
    "Vênus": "Vênus é o planeta mais quente do Sistema Solar.",
    "Terra": "A Terra é o único planeta conhecido que abriga vida.",
    "Marte": "Marte é conhecido como o planeta vermelho.",
    "Júpiter": "Júpiter é o maior planeta do Sistema Solar.",
    "Saturno": "Saturno é famoso por seus grandes anéis.",
    "Urano": "Urano gira com uma inclinação extrema.",
    "Netuno": "Netuno apresenta ventos extremamente velozes."
};

planetas.forEach(function(planeta) {
    planeta.addEventListener("click", function() {
        const nome = planeta.querySelector("h3").textContent;
        curiosidade.textContent = informacoes[nome];
    });
});
