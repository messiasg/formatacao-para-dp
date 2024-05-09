const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  try {
    // Validação do texto inserido pelo usuário
    const texto = document.getElementById("texto").value;

    // Remove acentos e cedilhas
    const textoSemAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Remove traços e pontos
    const textoSemTracosEPontos = textoSemAcentos.replace(/[-.]/g, "");

    // Converte para maiúsculas
    const textoMaiusculo = textoSemTracosEPontos.toUpperCase();

    // Apresentação do resultado formatado
    const resultado = document.getElementById("resultado");

    // Limpar Campos
    document.getElementById("texto").value = "";

    resultado.innerText = textoMaiusculo;
  } catch (error) {
    alert("Erro ao processar texto:", error);
    // Exibir mensagem de erro para o usuário (opcional)
  }
});
