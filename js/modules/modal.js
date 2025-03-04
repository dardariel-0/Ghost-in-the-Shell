export default function initModal() {
  const botaoAbrir = document.querySelectorAll("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function fecharModal() {
      containerModal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    botaoAbrir.forEach((botao) => {
      botao.addEventListener("click", abrirModal);
    });
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
