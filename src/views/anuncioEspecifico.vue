<template>
  <div class="addPage">
    <section>
      <b-container>
        <div class="firstContent">
          <div class="adInfo">
            <b-row>
              <b-col cols="6">
                <img
                  class="adImage"
                  src="../assets/img/pedroNunes.jpg"
                  style="width=700px; height: 450px;"
                />
              </b-col>

              <b-col cols="6">
                <div class="info">
                  <p class="adType">Anúncio do tipo ${}</p>
                  <h3 class="adTitle">Fotografias</h3>
                  <div class="secondLine">
                    <p class="announcerName"></p>
                  </div>
                  <div class="containerFavourites">
                    <!-- icons -->
                    <p class="favourites">
                      <i class="favouritesNumber"> 35 </i> favoritos
                    </p>
                  </div>
                  <div class="adSummary">
                    <p>
                      Tiro fotografias de cenários para qualquer um de vós!
                      Basta me dizerem o que pretendem e quantas fotos
                      necessitam, a partir daí agilizamos o processo.
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
                  <button
                    class="btn btn-primary btnInterested"
                    type="button">
                    Tenho interesse
                  </button>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.adInfo{
  margin-top: 50px;
  }
</style>
