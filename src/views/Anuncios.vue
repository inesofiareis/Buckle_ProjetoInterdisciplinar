<template>
  <div class="generalContainer">
<!--     <div class="filterNavbar">
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Dropdown"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>One</b-dropdown-item>
          <b-dropdown-item>Two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Three</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </div> -->

  

    <div>

        <div class="headerText">
        <h2>Anúncios</h2>
        <h3>Finalmente, um espaço de união entre os alunos da ESMAD.</h3>
        </div>

        <img src="../assets/img/pedroNunes.jpg" alt="" srcset="" class="coverImage">


    </div>

      <div>
        <b-img blank-color="white" class="filterRectangle"></b-img>
    </div>


<!--                 <b-form>
                        <b-row>
                            <b-col cols="2">
                            <b-tabs pills>
                                <b-tab title="Procura" active ></b-tab>
                                <b-tab title="Oferta"></b-tab>
                            </b-tabs>
                            </b-col>

                            <b-col cols="2">
                                <label for="searchInput">Pesquisa</label>
                                <b-form-input type="search" id="searchInput" class="mb-2 mr-sm-2 mb-sm-0" ></b-form-input>
                            </b-col>

                            <b-col cols="2">
                                <label for="courseFilter">Licenciatura</label>
                                <b-form-select v-model="selected" :options="options" id="courseFilter" class="filterSelect"></b-form-select>
                            </b-col>

                            <b-col cols="2">
                                <label for="orderFilter">Ordernar por</label>
                                <b-form-select v-model="selected" :options="options" id="courseFilter" class="filterSelect"></b-form-select>
                            </b-col>
                            <b-col cols="2">
                                <label for="categoryFilter">Categoria</label>
                                <b-form-select v-model="selected" :options="options" id="courseFilter" class="filterSelect"></b-form-select>
                            </b-col>



                        </b-row>
                </b-form>
 -->

                



    <div class="adsContainer">
        <b-container>
            <b-row>
                <b-col>
                    <div>
                        <b-card
                            img-src="../assets/img/pedroNunesAnuncio.jpg"
                            img-alt="Image"
                            img-top
                            img-height="210px"
                            img-radius="15px"
                            style="max-width: 385px;"
                            class="cardAd "
                        >

                            <b-row>
                                <b-col cols="3">
                                    <img src="../assets/img/pedroNunes.jpg" class="cardAvatar" alt="" srcset="">
                                </b-col>
                                <b-col cols="9" class="cardContent">
                                    <b-card-title class="cardTitle">Pedro Nunes<small class="titleCourse">de TCAV</small> </b-card-title>
                                    <b-card-text class="cardText">
                                    Preciso de alguém que tenha experiência em edição de vídeo.
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div>
                        <b-card
                            img-src="../assets/img/pedroNunesAnuncio.jpg"
                            img-alt="Image"
                            img-top
                            img-height="210px"
                            img-radius="15px"
                            style="max-width: 385px;"
                            class="cardAd "
                        >

                            <b-row>
                                <b-col cols="3">
                                    <img src="../assets/img/pedroNunes.jpg" class="cardAvatar" alt="" srcset="">
                                </b-col>
                                <b-col cols="9" class="cardContent">
                                    <b-card-title class="cardTitle">Pedro Nunes<small class="titleCourse">de TCAV</small> </b-card-title>
                                    <b-card-text class="cardText">
                                    Preciso de alguém que tenha experiência em edição de vídeo.
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </b-col>
                <b-col>
                    <div>
                        <b-card
                            img-src="../assets/img/pedroNunesAnuncio.jpg"
                            img-alt="Image"
                            img-top
                            img-height="210px"
                            img-radius="15px"
                            style="max-width: 385px;"
                            class="cardAd "
                        >

                            <b-row>
                                <b-col cols="3">
                                    <img src="../assets/img/pedroNunes.jpg" class="cardAvatar" alt="" srcset="">
                                </b-col>
                                <b-col cols="9" class="cardContent">
                                    <b-card-title class="cardTitle">Pedro Nunes<small class="titleCourse">de TCAV</small> </b-card-title>
                                    <b-card-text class="cardText">
                                    Preciso de alguém que tenha experiência em edição de vídeo.
                                    </b-card-text>
                                </b-col>
                            </b-row>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        </div>
    


    <div class="showAds">
      <b-button class="btnShow">Carregar Mais</b-button>
    </div>
  </div>
</template>

<style scoped>

.generalContainer {
    background: #E5E5E5;
}

.coverImage{
    position: relative;
    width: 1541px;
    height: 507px;
    top: 0px;
    left: -7px;
    margin-bottom: 80px;
    object-fit: cover;

}

.filterRectangle{
    position: relative;
width: 1324px;
height: 167px;
left: 0px;
top: -110px;

background: #F1F1F1;
border: 1px solid rgba(241, 121, 65, 0.5);
box-sizing: border-box;
border-radius: 10px;

}

.headerText{
    position: absolute;
    top: 30%;
    left: 25%;
    line-height: 43px;
    text-align: center;
    z-index: 10;
    color: white;
}

.btnFilter{
    background: #F17941;
    border-radius: 5px;
}

#searchInput{
    height: 35px;
    width: 230px;
    background: #FFFFFF;
    border: 1px solid rgba(241, 121, 65, 0.6);
    box-sizing: border-box;
    border-radius: 5px;
    }

.filterSelect{
    height: 35px;
    width: 180px;
    background: #FFFFFF;
    border: 1px solid rgba(241, 121, 65, 0.6);
    box-sizing: border-box;
    border-radius: 5px;
}
.cardAd {
    height: 310px;
    background: rgba(255, 255, 255, 0.692);
    border: 1px solid rgba(53, 53, 53, 0.8);
    box-sizing: border-box;
    border-radius: 15px 15px 15px 15px;
}

.cardAvatar{
position: absolute;
width: 72.86px;
height: 72.86px;
left: 10px;
object-fit:cover;
border: 1px solid #353535;
box-sizing: border-box;
border-radius: 10px;
transform: matrix(1, 0, 0, 1, 0, 0);
}

.cardContent {
    margin-top: 10px;
}

.cardTitle{
    font-family: var(--mediumFont);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 15px;
    display: flex;
    align-items: center;

    color: #353535;

}

.titleCourse{
    font-family: var(--regularFont);
    font-size: 16px;
    margin-left: 5px ;
    color: rgba(53, 53, 53, 0.48);

}

.cardText {
    font-family: var(--regularFont);
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    display: flex;
    align-items: center;
    color: #353535;
}

.btnShow{
    width: 149px;
    height: 38px;
    background: #F17941;
    border-radius: 5px;
    border: none;
    margin-top: 50px;
    margin-bottom: 50px;
}




</style>
