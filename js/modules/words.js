export default function initWords() {
  function mudarPalavras() {
    const palavras = document.querySelectorAll(".words-c li");

    let randonWords = [
      "おばけ", //ghost
      "プラスチック", //plastic
      "小雨", //chuva fraca
      "上から正弦", //sine from above
      "キラー", //killer
      "カオス", //caos
      "庭", //garden
      "警察", //Policia
      "シェル", //Shell
      "古い", //antiga
      "考え", //Pensamento
      "自由意志", //Livre arbitrio
      "義務", //dever
      "テクノロジー", //tecnologia
      "魂", //alma
      "前世", //vida passada
    ];

    palavras.forEach((palavra) => {
      palavra.classList.toggle("ativo");
      palavra.innerHTML =
        randonWords[Math.floor(Math.random() * randonWords.length)];
    });
  }

  setInterval(mudarPalavras, 800);
}
