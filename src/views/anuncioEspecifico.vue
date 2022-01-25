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
import {mapGetters} from "vuex"

export default {
  data () {
    return {
      adEspecific: {},
    }
  },
  computed: {
    ...mapGetters(["getAdSpecific"]),
  },
  created() {
    this.adEspecific = this.getAdSpecific(this.$route.params.id)
  }
};
</script>

<style scoped>
.specificAdInfo {
  text-align: left;
  width: 100%;
  height: 100%;
  padding-left: 40px;
}

button {
  margin: 0;
}

.row {
  margin-top: 30px;
  margin-bottom: 80px;
}

.adImage {
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 451px;
  border-radius: 15px;
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
