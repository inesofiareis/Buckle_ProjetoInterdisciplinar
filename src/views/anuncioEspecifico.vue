<template>
  <div class="addPage">
    <b-container>
      <b-row>
        <b-col col lg="7">
          <img class="adImage" src="../assets/img/ireneAnuncio.jpg" />
        </b-col>
        <b-col col lg="5">
          <div class="specificAdInfo">
            <p class="adType">Anúncio do tipo ${}</p>
            <h3 class="specificAdTitle">Fotografias</h3>
            <div class="secondLine">
              <p class="announcerName">Irene Costa</p>
            </div>
            <div class="containerFavourites">
              <!-- icons -->
              <p class="favourites">
                <i class="favouritesNumber"> 35 </i> favoritos
              </p>
            </div>
            <br />
            <br />
            <div class="adSpecificSummary">
              <p>
                Tiro fotografias de cenários para qualquer um de vós! Basta me
                dizerem o que pretendem e quantas fotos necessitam, a partir daí
                agilizamos o processo.
              </p>
            </div>
            <div class="announcerCourse">
              <p class="courseWritten">CURSO</p>
              <p class="courseName">Fotografia</p>
            </div>
            <div class="announcerTime">
              <p class="timeWritten">HORÁRIO</p>
              <p class="timeNeeded">24-50 horas</p>
            </div>
            <button class="btn btn-primary btnInterested" type="button">
              Tenho interesse
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.specificAdInfo {
  position: absolute;
  text-align: left;
  width: 464px;
  top: 116px;
}

.adImage {
  position: relative;
  width: 708px;
  height: 451px;
  top: 116px;
  margin-bottom: 80px;
}

.adType {
  font-size: 18px;
  line-height: 21px;
  font-family: var(--lightFont);
  color: #353535;
}

.specificAdTitle {
  font-size: 55px;
  line-height: 65px;
  font-family: var(--mediumFont);
  color: #353535;
}

.announcerName {
  float: left;
  font-size: 20px;
  line-height: 24px;
  color: #353535;
  font-family: var(--regularFont);
}

.containerFavourites {
  float: right;
}
</style>
