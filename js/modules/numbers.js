export default function initNumbers() {
  const body = document.querySelector("body");

  let numeroX = document.querySelector(".numeroX");
  let numeroY = document.querySelector(".numeroY");

  let contador = document.querySelector(".numero-contador span");
  const contador2 = document.querySelectorAll(".numb2");

  function atualizarNumeros(evento) {
    const posicaoX = evento.clientX;
    const posicaoY = evento.clientY;

    numeroX.innerHTML = posicaoX;
    numeroY.innerHTML = posicaoY;

    let numeroAleatorio = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let numeroAleatorio2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    let numeroAleatorio3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

    contador.innerHTML = numeroAleatorio;
    contador2[0].innerHTML = numeroAleatorio2;
    contador2[1].innerHTML = numeroAleatorio3;
  }
  body.addEventListener("mousemove", atualizarNumeros);
}
