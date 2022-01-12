<template>
  <div class="home">
    <section>
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="2">
            <div class="p-5">
              <div>
                <ul class="list-unstyled">
                  <b-media tag="li">
                    <template #aside>
                      <b-img
                        src="../assets/img/icons8-thinking-64.png"
                      ></b-img>
                    </template>
                    <h5 class="mt-0 mb-1">
                      Tens um projeto que precisa de ajuda extra
                    </h5>
                  </b-media>

                  <b-media tag="li" class="my-4">
                    <template #aside>
                      <b-img
                        src="../assets/img/paginaInicial/icons8-idea-64 (1).png"
                      ></b-img>
                    </template>

                    <h5 class="mt-0 mb-1">
                      Achas que um aluno de outro curso pode ajudar
                    </h5>
                  </b-media>

                  <b-media tag="li">
                    <template #aside>
                      <b-img
                        src="../assets/img/paginaInicial/icons8-idea-64 (1).png"
                      ></b-img>
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
              <h2 class="display-4">Aqui no Buckle facilitamos-te a vida</h2>
              <p>É simples e fácil</p>
              <button class="btn btn-primary" type="button">Saber mais</button>
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
              <b-img src="../assets/paginaInicial/brooke-cagle--uHVRvDr7pg-unsplash.jpg"></b-img>
            </div>
          </b-col>
          <b-col col lg="6" order="2">
            <div class="p-5">
              <h2 class="display-4 mediumFont">
                <i> Anúncios: </i> A melhor forma de obteres aquilo que procuras
              </h2>
              <p class="regularFont">
                Explora todas as ofertas que os alunos da ESMAD estão a oferecer
                ou cria um anúncio do tipo procura e vai direto ao assunto.
              </p>
              <button class="btn btn-primary" type="button">
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
              <img src="../assets/img/landingProjetos.jpg" alt="" srcset="">
            </div>
          </b-col>
          <b-col col lg="6" order="1">
            <div class="p-5">
              <h2 class="display-4 mediumFont"> <i>Projetos: </i> Dá a conhecer o teu potencial</h2>
              <p class="regularFont">
                Na Buckle, damos-te também a oportunidade de mostrar o que andas
                a fazer às grandes empresas.
              </p>
              <button class="btn btn-primary" type="button">
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
          <b-button variant="outline-primary">Ver todos</b-button>
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
          <b-button variant="outline-primary">Ver todos </b-button>
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

<style>
  .lightFont {
      font-family: var(--lightFont);
  }

  .regularFont {
    font-family: var(--regularFont)
  }

  .mediumFont {
    font-family: var(--mediumFont)
  }

  .boldFont{
    font-family: var(--boldFont)
  }
</style>
