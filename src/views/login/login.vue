<template>
    <div class="background-container">
        <b-row style="margin-right: 0;">
          <b-col>
              <div class="">
                  <img :src="image" class="login-image">
              </div>
          </b-col>
          <b-col>
                <div class="align-login-form-container">
                    <div class="align-login-form-container-2">
                        <div class="login-form-header">
                            <h2>A minha conta</h2>
                        </div>
                        <div class="form-selector">
                            <b-button type="button" class="login-btn">Login</b-button>
                            <router-link :to="{ path: 'registo' }">
                                <b-button type="button" class="register-btn">Registo</b-button>
                            </router-link>
                        </div>
                        <form action="">
                            <div class="form-email">
                               <b-form-input type="email" required placeholder="Email de estudante"></b-form-input>
                            </div>
                            <div class="form-password">
                                <b-form-input type="password" required placeholder="Password"></b-form-input>
                            </div>
                            <div class="form-submit">
                                <b-button type="submit">Entrar</b-button>
                            </div>
                        </form>
                        <div class="forgot-password">
                            <a href="#">Esqueci-me da password</a>
                        </div>
                  </div>
              </div>
          </b-col>
        </b-row>
    </div>
</template>

<script>
    import image from "@/assets/img/loginImg.png"

    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>
    
<style lang="css">

    :root {
        --orange: #F17941;
        --black: #353535;
        --border: #ced4da;
    }

           
    button {
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    button:hover {
        background-color: var(--black) !important;
    }

    .login-image {
        width: 100%;
        height: 100%;
    }

    .align-login-form-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .align-login-form-container-2 {
        width: 40%;
        background-color: #fafafa;
        border-radius: 5%;
        padding: 20px 20px 40px 20px;
    }

    .login-form-header {
        margin-bottom: 30px;
        border-bottom: 1px solid var(--border);
    }

    .login-form-header > h2{
        font-weight: bold;
    }

    .login-btn, .register-btn {
        margin: 0 20px 0 20px !important;
    }

    .form-submit, .form-submit > button {
        width: 100%;
    }

    .form-submit > button, .login-btn {
        background-color: var(--orange) !important;
        border: var(--orange) !important;
        font-weight: bold !important;
    }

    .register-btn {
        background-color: #fff !important;
        border: #fff !important;
        color: var(--black) !important;
        font-weight: bold !important;
        width: 30%;
    }

    .login-btn {
        width: 30% !important;
    }

    .register-btn:hover {
        color: #fff;
    }

    .form-email {
        padding: 30px 0 20px 0;
    }

    .form-password {
        padding-bottom: 20px;
    }

    .form-submit, .form-submit > button {
        height: 45px;
    }

    .forgot-password {
        padding-top: 15px;
    }

    .forgot-password > a {
        color: #8d8d8d;
    }

    .forgot-password > a:hover {
        color: #d3d3d3;
    }

</style>