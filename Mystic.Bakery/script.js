// Pega o elemento <time> pelo id que criamos no HTML
const elementoData = document.getElementById("data-hoje");

// Cria a data atual do computador/celular
const hoje = new Date();

// Formata para o padrão brasileiro (ex: 17 de novembro de 2026)
const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

// Coloca a data formatada dentro da tag <time>
elementoData.textContent = dataFormatada;
// Também preenche o atributo técnico "datetime" (boa prática de HTML!)
elementoData.setAttribute("datetime", hoje.toISOString().split("T")[0]);
