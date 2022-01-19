<template>
  <div class="home">
        <header>
        <div class="intro-body">
          <b-container>
            <div class="imageContainer">
              <img src="../assets/img/mainPage.jpg" class="img-fluid mainPageImg"></img>
            </div>
            <b-row>
              <b-col col mx="auto" class="headerTextMain">
                <h1 class="headerTitleMain mediumFont"> <b class="orangeTitle">Conecta-te </b> com 
                a tua faculdade</h1>
                <p class="headerSubTitleMain regularFont">
                  Um website feito por estudantes,
                  para estudantes
                </p>
              </b-col>
            </b-row>
          </b-container>
        </div>
    </header>

    <section>
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="2">
            <div class="p-5">
              <div>
                <ul class="list-unstyled boxes">
                  <b-media tag="li" class="boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingPensar.png"
                      ></img>
                    </template>
                    <h5 class="mt-0 mb-1">
                      Tens um projeto que precisa de ajuda extra
                    </h5>
                  </b-media>

                  <b-media tag="li" class="my-4 boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingIdeia.png"
                      ></img>
                    </template>

                    <h5 class="mt-0 mb-1">
                      Achas que um aluno de outro curso pode ajudar
                    </h5>
                  </b-media>

                  <b-media tag="li" class="boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingMaos.png"
                      ></img>
                    </template>

                    <h5 class="mt-0 mb-1">
                      Inscreves-te na Buckle e deixas a magia acontecer
                    </h5>
                  </b-media>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col col lg="6" order="1">
            <div class="p-5">
              <h2 class="display-4 mainHeaders mediumFont">Aqui na Buckle facilitamos-te a vida</h2>
              <p class="mainTexts regularFont">É simples e fácil</p>
              <button class="btn btn-primary mainButtons blueButtons" type="button">Saber mais</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="1">
            <div class="p-5">
              <img
                src="../assets/img/mainAnuncios.jpg"
               style="width:550px; border-radius: 15px;"></img>
            </div>
          </b-col>
          <b-col col lg="6" order="2">
            <div class="p-5">
              <h2 class="display-4 mediumFont mainHeaders">
                <i> Anúncios: </i> A melhor forma de obteres aquilo que procuras
              </h2>
              <p class="regularFont mainTexts">
                Explora todas as ofertas que os alunos da ESMAD estão a oferecer
                ou cria um anúncio do tipo procura e vai direto ao assunto.
              </p>
              <button class="btn btn-primary mainButtons orangeButtons" type="button">
                Ver anúncios
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="2">
            <div class="p-5">
              <img src="../assets/img/mainProjetos.jpg" alt="" srcset="" style="width:550px; border-radius: 15px;"/>
            </div>
          </b-col>
          <b-col col lg="6" order="1">
            <div class="p-5">
              <h2 class="display-4 mediumFont mainHeaders">
                <i>Projetos: </i> Dá a conhecer o teu potencial
              </h2>
              <p class="regularFont mainTexts">
                Na Buckle, damos-te também a oportunidade de mostrar o que andas
                a fazer às grandes empresas.
              </p>
              <button class="btn btn-primary mainButtons blueButtons" type="button">
                Ver projetos
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container>
        <div>
          <h2 class="text-center">Os anúncios mais recentes</h2>
        </div>
        <b-row>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">Daniel Freitas de TSIW</h3>
            <p class="description">
              Sou capaz de criar websites para quem precisar.
            </p>
          </b-col>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">Irene Costa de Fotografia</h3>
            <p class="description">
              Tiro fotografias de cenários para qualquer um de vós!
            </p>
          </b-col>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">Eduardo Silva de TCAV</h3>
            <p class="description">
              Se me disponibilizarem as gravações, posso fazer vídeos.
            </p>
          </b-col>
        </b-row>
        <div>
          <b-button class="orangeButtons">Ver todos</b-button>
        </div>
      </b-container>
    </section>

    <section>
      <b-container>
        <div>
          <h2 class="text-center">Os projetos mais recentes</h2>
        </div>
        <b-row>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">Anúncio de TV</h3>
            <p class="description">
              Fomos para um estúdio e, com a ajuda do Filipe, arrasamos o meu
              projeto, cujo objetivo era fazer um anúncio emotivo que fosse
              feito para televisão.
            </p>
            <small>Hugo Gomes de Multimédia, Filipe Reis de Fotografia</small>
          </b-col>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">Portfolio de vídeo</h3>
            <p class="description">
              O meu ponto forte é sem dúvida o vídeo e nunca achei um meio de o
              mostrar. Com o Paulo, pude concretizar este meu desejo.
            </p>
            <small>Mafalda Aguiar de TCAV, Paulo Guedes de TSIW</small>
          </b-col>
          <b-col col lg="4" sm="6">
            <b-img src="assets/img/building.jpg"></b-img>
            <h3 class="name">What destination?</h3>
            <p class="description">
              Com o magnífico design do Diogo, realizei o website “Destination
              Unknown”, que permite ao utilizador gerar um destino aleatório
              para onde viajar.
            </p>
            <small>Mafalda Guedes de TSIW, Diogo Lopes de Design Gráfico</small>
          </b-col>
        </b-row>
        <div>
          <b-button class="blueButtons">Ver todos </b-button>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  background-color: #e5e5e5;
}
.lightFont {
  font-family: var(--lightFont);
}

.regularFont {
  font-family: var(--regularFont);
}

.mediumFont {
  font-family: var(--mediumFont);
}

.boldFont {
  font-family: var(--boldFont);
}
.imageContainer {
  width: 1470px;
  position: relative;
  left: -85px;
  top: 22px;
  margin-bottom: 80px;
}

.mainPageImg {
  width: 1470px !important;
  height: 600px !important;
  object-fit: cover;
  border-radius: 20px;
}

.headerTextMain {
  position: absolute;
  top: 30%;
  left: 100px;
  width: 460px !important;
  text-align: left;
  z-index: 10;
  color: white;
}

.orangeTitle {
  color: #f17941;
}

.headerTitleMain {
  font-weight: 500;
  font-size: 55px;
}

.headerSubTitleMain {
  font-weight: 300;
  font-size: 25px;
}

.mainHeaders {
  text-align: left;
}

.mainTexts {
  text-align: left;
}
.mainButtons {
  width: 153px;
  height: 44px;
  font-family: var(--mediumFont);
  float: left;
  border-radius: 10px;
}

.orangeButtons {
  background: #f17941 !important;
  border: none !important;
}

.blueButtons {
  background: #5266b7 !important;
}

.boxesPath {
  background-color: white;
  height: 90px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 10px;
  backdrop-filter: blur(100rem);

}
.boxes {
    display: flex;
  align-items: center;
  width: 100px;
}

.imageBox{
  width: 50px;
}
</style>
