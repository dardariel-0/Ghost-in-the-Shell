export default function initLanguaje() {
  const langEN = document.querySelector(".en-us");
  const langPT = document.querySelector(".pt-br");
  const langJA = document.querySelector(".ja-jp");
  const paragrafos = document.querySelectorAll(".jsText");
  const botoesLang = document.querySelectorAll(".opcoes-lang li");
  ///////////////////

  function mudarEN() {
    paragrafos[0].innerHTML =
      'The film, divided into two arcs, takes place in the future, in the year 2029, where there is the technical ability to manipulate people by entering their minds. The hacker, called the Puppet Master, is a computer expert and capable of controlling the will of others, and is hunted by a secret group called the Shell Squad. The leader, Major Motoko, has been so modified that almost all of her body is no longer human. Of her original "self", only a "ghost" remains. Together with Bateau and Togusa, she hunts the criminal and becomes involved in a web of conspiracies, putting herself on a dangerous path that could lead to the highest authorities of the Ministry involved in a conspiracy.';

    paragrafos[1].innerHTML =
      "Motoko Kusanagi (草薙 素子, Kusanagi Motoko), often referred to simply as Major, is the main protagonist of the Ghost in the Shell franchise, first appearing in the manga, and throughout its various continuities. She is the head of the assault team of the Japanese task force known as Section 9, which patrols and works against acts of cyberterrorism. Her body is entirely synthetic, with the only thing that makes her human being her soul, or 'ghost'. Each series explores her origin story in a different way; some allude that she was never human, while others directly explain the tragic events that led to her transformation.";

    paragrafos[2].innerHTML =
      "Ghost in the Shell (GITS) influenced some prominent filmmakers. The Wachowskis, creators of The Matrix and its sequels, showed it to producer Joel Silver, saying, 'We want to do that for real.' The Matrix series incorporated several concepts from the film, including the Matrix's digital rain, which was inspired by the opening credits of GITS, and the way characters access the Matrix through ports in the back of their necks. Other parallels have been drawn to James Cameron's Avatar, Steven Spielberg's A.I. Artificial Intelligence, and Jonathan Mostow's Surrogates. James Cameron cited GITS as a source of inspiration, acknowledging its influence on Avatar. Additionally, Bungie's 2001 third-person action game, Oni, draws substantial inspiration from Ghost in the Shell's setting and characters. GITS has also influenced other video games, such as the Metal Gear Solid series, Deus Ex, and Cyberpunk 2077.";

    paragrafos[3].innerHTML =
      "Project developed for study purposes and not commercial.";

    langEN.classList.add("ativo");
    langJA.classList.remove("ativo");

    langPT.classList.remove("ativo");
  }
  langEN.addEventListener("click", mudarEN);

  /////////////////////////////////

  function mudarPT() {
    paragrafos[0].innerHTML =
      "O filme, dividido em dois arcos, se passa em um futuro distópico no ano de 2029, onde existe a habilidade técnica de manipular pessoas entrando em suas mentes. O hacker, chamado de Puppet Master, é um especialista em computadores capaz de controlar a vontade dos outros e é caçado por um grupo secreto chamado Shell Squad. A líder, Major Motoko, foi tão modificada que quase todo seu corpo não é mais humano. De seu 'eu' original, resta apenas um 'fantasma'. Junto com Batou e Togusa, ela caça o criminoso e se envolve em uma teia de conspirações, colocando-se em um caminho perigoso que pode levar às mais altas autoridades do Ministério envolvidas em uma conspiração.";

    paragrafos[1].innerHTML =
      "Motoko Kusanagi (草薙 素子, Kusanagi Motoko), muitas vezes chamada simplesmente de Major, é a protagonista principal da franquia Ghost in the Shell, aparecendo pela primeira vez no mangá e em todas as suas várias continuidades. Ela é a líder da equipe de assalto da força-tarefa japonesa conhecida como Seção 9, que patrulha e combate atos de ciberterrorismo. Seu corpo é totalmente sintético, restando como única conexão com sua humanidade sua alma, ou 'fantasma'. Cada série explora sua história de origem de maneira diferente; algumas sugerem que ela nunca foi humana, enquanto outras explicam diretamente os eventos trágicos que levaram à sua transformação.";

    paragrafos[2].innerHTML =
      'Ghost in the Shell (GITS) influenciou alguns cineastas proeminentes. Os Wachowskis, criadores de The Matrix e suas sequências, mostraram o filme ao produtor Joel Silver, dizendo: "Queremos fazer isso de verdade". A série Matrix incorporou vários conceitos do filme, incluindo a "chuva digital" da Matrix, que foi inspirada nos créditos iniciais de GITS, e a forma como os personagens acessam a Matrix por meio de conexões na nuca. Outras semelhanças foram observadas em Avatar, de James Cameron, A.I. Artificial Intelligence, de Steven Spielberg, e Surrogates, de Jonathan Mostow. James Cameron citou GITS como uma fonte de inspiração, mencionando sua influência em Avatar. Além do cinema, o jogo de ação Oni, da Bungie, lançado em 2001, também foi fortemente inspirado pelo cenário e pelos personagens de Ghost in the Shell. A franquia ainda influenciou outros jogos, como a série Metal Gear Solid, Deus Ex e Cyberpunk 2077.';

    paragrafos[3].innerHTML =
      "Projeto desenvolvido para fins de estudo e não comerciais.";

    langPT.classList.add("ativo");
    langEN.classList.remove("ativo");
    langJA.classList.remove("ativo");
  }
  langPT.addEventListener("click", mudarPT);

  ///////////////////////////////////////

  function mudarJA() {
    paragrafos[0].innerHTML =
      "その映画は二つのアークに分かれており、2029年の未来を舞台にしています。そこでは、人々の心に入り込んで操作する技術的能力が存在します。パペットマスターと呼ばれるハッカーは、コンピューターの専門家であり、他人の意思をコントロールする能力を持ち、シェル隊という秘密組織に追われています。リーダーの少佐モトコは、ほとんど全ての体が人間ではなくなるほど改造されています。彼女の本来の「自己」は、「ゴースト」だけが残っています。彼女はバトーとトグサと共に、その犯罪者を追い、陰謀の網に巻き込まれ、省庁の最高権力者をも巻き込む危険な道に身を置くことになります。";

    paragrafos[1].innerHTML =
      "草薙 素子（くさなぎ もとこ、Kusanagi Motoko）は、多くの場合「少佐」と呼ばれる、『攻殻機動隊（ゴースト・イン・ザ・シェル）』フランチャイズの主人公です。彼女は最初に漫画に登場し、その後、さまざまな続編やメディアにも登場しています。彼女は、日本の特殊部隊「セクション9」の攻撃チームのリーダーであり、サイバーテロリズムのパトロールと戦闘を担当しています。彼女の体は完全に人工的であり、人間性との唯一のつながりは彼女の魂、つまり「ゴースト」だけです。";

    paragrafos[2].innerHTML =
      "『ゴースト・イン・ザ・シェル（GITS）』は、いくつかの著名な映画制作者に影響を与えました。『マトリックス』シリーズは、映画のさまざまなコンセプトを取り入れています。例えば、マトリックスの「デジタルレイン」は『ゴースト・イン・ザ・シェル』のオープニングクレジットにインスパイアされたものであり、キャラクターが首の後ろの接続を通じてマトリックスにアクセスする方法も同様です。その他の類似点は、ジェームズ・キャメロンの『アバター』、スティーヴン・スピルバーグの『A.I.』、ジョナサン・モストウの『サロゲート』にも見られます。ジェームズ・キャメロンは『ゴースト・イン・ザ・シェル』をインスピレーションの源として挙げ、『アバター』への影響を認めています。映画だけでなく、2001年にバンジーがリリースしたアクションゲーム『Oni』も、『ゴースト・イン・ザ・シェル』の設定やキャラクターに強く影響を受けています。";

    paragrafos[3].innerHTML =
      "このプロジェクトは、研究目的で開発されたものであり、商業目的ではありません。";

    langJA.classList.add("ativo");
    langEN.classList.remove("ativo");
    langPT.classList.remove("ativo");
  }
  langJA.addEventListener("click", mudarJA);

  function lang() {
    const idioma = document.querySelectorAll(".lang");
    const selectBtn = document.querySelectorAll(".select-button");
    const selectedValue = document.querySelectorAll(".selected-value");
    const optionsList = document.querySelectorAll(".opcoes-lang li");

    function mudarlang() {
      idioma.forEach((select) => {
        // add/remove active class on the container element
        select.classList.toggle("active");
        // update the aria-expanded attribute based on the current state
        selectBtn.forEach((botao) => {
          botao.setAttribute(
            "aria-expanded",
            botao.getAttribute("aria-expanded") === "true" ? "false" : "true"
          );
          botao.classList.toggle("ativo");
        });
      });
    }

    selectBtn.forEach((botao) => {
      botao.addEventListener("click", mudarlang);
    });

    optionsList.forEach((option) => {
      function handler(evento) {
        // Click Events
        if (
          evento.type === "click" &&
          evento.clientX !== 0 &&
          evento.clientY !== 0
        ) {
          selectedValue.forEach((value) => {
            value.textContent = this.children[1].textContent;
          });
          idioma.forEach((select) => {
            select.classList.remove("active");
          });
        }
        // Key Events
        if (evento.key === "Enter") {
          selectedValue.forEach((value) => {
            value.textContent = this.textContent;
          });

          idioma.forEach((select) => {
            select.classList.remove("active");
          });
        }
      }

      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    }); //abrir listas de opções
  }

  lang();
}
