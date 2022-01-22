<template>
    <div class="chat">
        <div class="left-column">
            <!-- <b-col cols="2"> -->
            <div class="left-side-container">
                <div class="left-side-header">
                    <b-dropdown id="profile-selec" class="m-md-2">
                        <template #button-content>{{getLoggedUser.first_name}}</template>
                        <b-dropdown-item>Definições de perfil</b-dropdown-item>
                        <b-dropdown-item>Os teus anúncios</b-dropdown-item>
                        <b-dropdown-item>Os teus projetos</b-dropdown-item>
                        <b-dropdown-item>Favoritos</b-dropdown-item>
                        <b-dropdown-item>Avaliações</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item @click="logOut()">Terminar sessão</b-dropdown-item>
                    </b-dropdown>
                </div>
                <div class="left-side-content">
                    <div class="card-container">
                        <div class="card-img">
                            <img src="../assets/img/CardExample.png" alt="">
                        </div>
                        <div class="card-text">
                            <h4>Irene Costa</h4>
                            <p>Anúncio oferta</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </b-col> -->
        </div>
        <div class="right-column">
            <p>chat</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getLoggedUser'])
    },
    methods : {
        ...mapMutations(['SIGNOUT_USER']),

        logOut() {
            Swal.fire({
            title: 'Atenção!',
            text: "Tens a certeza que queres sair da tua conta ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
            }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Adeus!',
                'Foste deslogado com sucesso.',
                'Ok'
              ).then(() => {
                this.$router.push({ name: "PaginaInicial"})
              })
              this.SIGNOUT_USER()
            }
            })
        }
    }
}
    
</script>

<style>
    .chat {
        display: flex;
        height: 100vh;
    }

    .chat > .left-column {
        width: 350px;
        z-index: 1;
        /* background: wheat; */
    }

    .chat > .right-column {
        width: 100%;
        z-index: 0;
        background-color: #f1f1f1;
    }

    .left-side-header {
        display: flex;
        justify-content: flex-start;
        padding-top: 10px;
        margin: 0px 20px 25px 20px;
        padding-bottom: 7px;
        border-bottom: 1px solid var(--border) !important;
    }

    .left-side-content > .card-container > .card-img > img  {
        width: 60px;
        border-radius: 10px;
    }

    .card-img {
        width: 150px !important;
    }

    .card-container {
        display: flex !important;
        align-items: center !important;
        height: 100%;
    }

    .left-side-content {
        background-color: var(--orange);
        margin: 0 20px;
        border-radius: 10px;
        height: 70px;
    }

    .left-side-container {
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.45) 15px -10px 20px -20px;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px; */
    }

    .card-container > .card-text {
        color: white;
        width: 100%;
        margin-right: 20px;
        max-height: 100%;
        text-align: left;
    }

    .card-container > .card-text > h4 {
        font-size: 19px;
        margin: 0;
        font-weight: bold;
    }

    .card-container > .card-text > p {
        font-size: 15px;
        margin: 0;
    }

    #profile-selec > button{
        color: var(--black);
        background: white;
        border: none;
        font-weight: bold;
        font-size: 20px;
    }
    

</style>