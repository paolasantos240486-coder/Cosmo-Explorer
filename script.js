
const planetas = document.querySelectorAll(".planeta");
const curiosidade = document.querySelector("#curiosidade");

planetas.forEach(function(planeta) {
    planeta.addEventListener("click", function() {
        const nome = planeta.querySelector("h3").textContent;

        curiosidade.textContent =
            "Você escolheu explorar " + nome + "! Em breve, mais curiosidades sobre esse planeta.";
    });
});
