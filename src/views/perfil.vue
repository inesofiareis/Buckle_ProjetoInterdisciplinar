<template>
  <div>
      <div class="generalContainer">
        <div class="main-body">
          <div class="row mainContainer">
            <div class="card-body col-md-3">
              <div class="cardHeader">
                <img :src="loggedUser.profileImg" style="width: 90px; height: 90px; object-fit: cover;" alt="">
                <h4>{{getLoggedUser.first_name}} {{getLoggedUser.last_name}}</h4>
              </div>
              <div class="cardsProfile">
                
                <b-card no-body class="cardProfile">
                  <b-tabs pills card vertical nav-wrapper-class="w-100">
                    <b-tab class="buttonsProfile" title="Informação" active @click="selector ='dadosPerfil'"></b-tab>
                    <b-tab class="buttonsProfile" title="Anúncios Ativos" @click="selector ='anunciosAtivos'"></b-tab>
                    <b-tab class="buttonsProfile" title="Projetos Ativos" @click="selector ='projetosAtivos'"></b-tab>
                    <b-tab class="buttonsProfile" title="Favoritos" @click="selector ='favoritosPerfil Page'"></b-tab>
                    <b-tab class="buttonsProfile" title="Avaliações" @click="selector ='avaliacoesPerfil Page'"></b-tab>
                    <button class="btn btn-primary adminsButtons" v-if="getLoggedUser.role === 'admin'">Gerir Utilizadores</button>
                    <button class="btn btn-primary adminsButtons" v-if="getLoggedUser.role === 'admin'">Gerir Anúncios</button>
                    <button class="btn btn-primary adminsButtons" v-if="getLoggedUser.role === 'admin'">Gerir Projetos</button>
                  </b-tabs>
                </b-card>
                
              </div>
  
              <div class="certificado">
                <h3>Certificação</h3>
                <p>Conclui todos para obteres um certificado</p>
                <h5>Anuncios oferta concluídos</h5>
                <div class="progress">
                  <div class="progress-bar " role="progressbar" aria-valuenow="6" style="width: 60%" aria-valuemin="0" aria-valuemax="10"></div>
                </div>
                <h5>Avaliações 5 estrelas</h5>
                <div class="progress">
                  <div class="progress-bar " role="progressbar" aria-valuenow="1" style="width: 20%" aria-valuemin="0" aria-valuemax="5"></div>
                </div>
              </div>
            </div>
            
            <div v-if="selector === 'dadosPerfil'" class="dadosPerfil col-md-9">
              <div class="tituloContainer">
                <h1 class="titulo">Informação</h1>
              </div>
              <div class="container dadosPerfil">
                <div class="dadosContainer">
                  <label for="nameAgeTxt">Nome</label>
                  <input type="text" class="inputsPerfil" id="nameAgeTxt" :value="getLoggedUser.first_name + ' ' + getLoggedUser.last_name " disabled>
                </div>
                <div class="dadosContainer">
                  <label for="descriptionTxt">Descrição</label>
                  <input type="text" class="inputsPerfil" id="descriptionTxt" >
                </div>
                <div class="dadosContainer">
                  <label for="areaTxt">Área</label>
                  <input type="text" class="inputsPerfil" id="areaTxt" :value="getLoggedUser.course" disabled>
                </div>
                <div class="dadosContainer">
                  <label for="contactTxt">Contacto</label>
                  <input type="text" class="inputsPerfil" id="contactTxt" :value="getLoggedUser.email" disabled>
                </div>
                <div class="dadosContainer">
                  <label for="aboutTxt">Sobre</label>
                  <input type="text" class="inputsPerfil" id="aboutTxt">
                </div>
                <div class="saveButton">
                  <button class="btn btn-warning">Salvar</button>
                </div>
                
              </div>
            </div>
            <div v-if="selector === 'anunciosAtivos'" class="anunciosAtivos col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Anuncios ativos</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary" @click="selector ='addAnuncio Page'">Adicionar</button>
                </div>
              </div>
              <div>
                
              </div>
              <div class="adsContainer Perfil">
                  <div class="row" >
                    <!-- <div class="cards" v-for="(ad,index) in getAds" :key="index" :value="ad"> -->
                      <div class="Card col-md-4" v-for="(ad,index) in userAds" :key="index" :value="ad" >
                        <div class="card text-center " >
                          <div class="backgroundAnuncios">
                            <img :src="ad.img_bg" alt="" class="backgroundAnuncio" >
                          </div>
                          <div class="imagemAnuncios">
                            <img :src="ad.img" class="imgAnuncio col-md-3">
                            <div class="nome curso container">
                              <h4>{{getLoggedUser.first_name}} {{getLoggedUser.last_name}}<h5>de {{getLoggedUser.course}}</h5></h4>
                              <p>{{ad.description}}</p>
                            </div>
                          </div>
                            <button class="btn btn-warning" @click=" editSelectAd(ad.id) ">Editar</button>
                            
                          
                        </div>
                        <div class="col-md-1"></div>
                      </div>
                    <!-- </div> -->
                    
                    
                  </div>  
                   
              </div>
            </div>
            <div v-if="selector === 'projetosAtivos'" class="projetosAtivos col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Projetos ativos</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary" @click="selector ='addProjeto Page'">Criar</button>
                </div>
              </div>
              <div class="ProjetosContainer Perfil">
                  <div class="row">
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" >
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div v-if="selector === 'favoritosPerfil Page'" class="favoritos col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Favoritos</h1>
                </div>                
              </div>
              <div class="ProjetosContainer Perfil">
                  <div class="row">
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div v-if="selector === 'avaliacoesPerfil Page'" class="avaliacoes col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Avaliações</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary">Ver Todas</button>
                </div>
              </div>
              <div class="avaliacoes Container">
                <div class="row">
                  <div class="col-md-3 avaliacaoContainer">
                    <div class="statsComment">
                      <img :src="ratingComment" class="ratingComment">
                      <p class="newComment">Novo!</p>
                    </div>
                    
                    <p>O meu professor pediu que programassemos em Javascript e eu nunca o tinha feito. Pedi ajuda ao Daniel e hoje entreguei o projeto. Estou muito agradecida.</p>
                    <hr>
                    <div>
                      <p class="personComment"><b>Inês Silva</b></p> 
                      <p class="cursoAvaliacao">Multimédia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="selector === 'addAnuncio Page'" class="addAnuncio col-md-9">
              <form @submit.prevent="addAds">
                <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Anúncio</h1>
                  
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                    <div class="dadosContainer col-md-3">
                    <label for="tituloAdsTxt">Titulo</label>
                    <input type="text" class="inputsPerfil" id="tituloAdsTxt" v-model="form.title">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="imgTxt">Image</label>
                    <input type="url"  id="imgTxt" placeholder="URL" class="inputsPerfil" v-model="form.img">
                  </div>
                  <div class="col-md-1"></div>
                    <div class="dadosContainer col-md-3">
                      <label for="bgImgTxt">Background Image</label>
                      <input type="url"  id="bgImgTxt" placeholder="URL" class="inputsPerfil" v-model="form.img_bg">
                    </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3" v-model="form.description"></textarea>
                </div>
                
                <div class="addAds cursoTipoTempo">
                  <div class="dadosContainer col-md-3">
                    <label for="cursoTxt">Curso</label>
                    <select  id="cursoTxt" class="inputsPerfil" v-model="form.course" required>
                      <option value=""  disabled>Escolha um curso</option>
                      <option v-for="(course, index) in courses" :key="index" :value="course">
                        {{course.text}}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tipoTxt">Tipo de Anúncio</label>
                    <select id="tipoTxt" class="inputsPerfil" v-model="form.typeAd" required>
                       <option value="" disabled>Escolha um tipo</option>
                      <option v-for="(typeAd, index) in typeAds" :key="index" :value="typeAd">
                        {{typeAd.text}}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tempoTxt">Tempo necessário</label>
                    <input type="text" class="inputsPerfil" id="tempoTxt" v-model="form.time">
                  </div>
                </div> 

                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <input type="submit" class="btn btn-warning" value="Criar">
                </div>
                </div>
                
                
              </div>
              </form>
              
            </div>

            <div v-if="selector === 'addProjeto Page'" class="addProjeto col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Projeto</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                  <div class="dadosContainer col-md-5">
                  <label for="tituloAdsTxt">Titulo</label>
                  <input type="text" class="inputsPerfil" id="tituloAdsTxt" >
                </div>
                <div class="col-md-3"></div>
                <div class="dadosContainer col-md-3">
                  <label for="tituloAdsTxt">Fotografia</label>
                  <div class="container addAdsFoto">
                    <button class="btn btn-warning">Escolher imagem (jpeg ou png)</button>
                  </div>
                </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3"></textarea>
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="dataTxt">Data</label>
                  <input type="text" class="inputsPerfil" id="dataTxt" >
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="colaboradoresTxt">Colaboradores</label>
                  <input type="text" class="inputsPerfil" id="colaboradoresTxt">
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="linksTxt">Links</label>
                  <input type="text" class="inputsPerfil" id="linksTxt">
                </div>
                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <button class="btn btn-warning">Salvar</button>
                </div>
                </div>
                
                
              </div>
            </div>
            <div v-if="selector ==  'editAd Page'" class="editAnuncio col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Editar Anúncio</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                    <div class="dadosContainer col-md-3">
                    <label for="tituloAdsTxt">Titulo</label>
                    <input type="text" class="inputsPerfil" id="tituloAdsTxt"  :value="getId.title">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="imgTxt">Image</label>
                    <input type="url"  id="imgTxt" placeholder="URL" class="inputsPerfil" :value="getId.img">
                  </div>
                  <div class="col-md-1"></div>
                    <div class="dadosContainer col-md-3">
                      <label for="bgImgTxt">Background Image</label>
                      <input type="url"  id="bgImgTxt" placeholder="URL" class="inputsPerfil" :value="getId.img_bg">
                    </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3" :value="getId.description"></textarea>
                </div>
                <div class="addAds cursoTipoTempo">
                  <div class="dadosContainer col-md-3">
                    <label for="cursoTxt">Curso</label>
                    <input type="text"  id="cursoTxt" class="inputsPerfil" :value="getId.course.text">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tipoTxt">Tipo de Anúncio</label>
                    <input type="text"  id="tipoTxt" class="inputsPerfil" :value="getId.typeAd.text">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tempoTxt">Tempo necessário</label>
                    <input type="text" class="inputsPerfil" id="tempoTxt" :value="getId.time">
                  </div>
                </div> 
                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <button class="btn btn-warning" >Editar</button>
                </div>
                </div>
                
                
              </div>
            </div>

            <div v-if="selector === 'editProjeto Page'" class="editProjeto col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Projeto</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                  <div class="dadosContainer col-md-5">
                  <label for="tituloAdsTxt">Titulo</label>
                  <input type="text" class="inputsPerfil" id="tituloAdsTxt" >
                </div>
                <div class="col-md-3"></div>
                <div class="dadosContainer col-md-3">
                  <label for="tituloAdsTxt">Fotografia</label>
                  <div class="container addAdsFoto">
                    <button class="btn btn-warning">Escolher imagem (jpeg ou png)</button>
                  </div>
                </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3"></textarea>
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="dataTxt">Data</label>
                  <input type="text" class="inputsPerfil" id="dataTxt" >
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="colaboradoresTxt">Colaboradores</label>
                  <input type="text" class="inputsPerfil" id="colaboradoresTxt">
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="linksTxt">Links</label>
                  <input type="text" class="inputsPerfil" id="linksTxt">
                </div>
                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <button class="btn btn-warning">Salvar</button>
                </div>
                </div>
                
                
              </div>
            </div>
        </div>
      </div>
      </div>
  </div>
  
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import profileImage from "@/assets/imagem.png"
import ratingComment from "@/assets/estrelas.png"

export default {
  name: "pefil",
  data() {
    return {
      selector: "dadosPerfil",
      profileImage: profileImage,
      ratingComment:ratingComment,

      form: {
        title: "",
        description: "",
        course: "",
        time : "",
        email : "",
        img: "",
        img_bg: "",
        typeAds: ""

        
      },
      
      userAds:[],

      loggedUser:{},

      courses:[
        { value: 'tsiw', text: 'TSIW' },
        { value: 'tcav', text: 'TCAV' },
        { value: 'design-grafico', text: 'Design Gráfico' },
        { value: 'design-industrial', text: 'Design Industrial'},
        { value: 'fotografia', text: 'Fotografia'},
        { value: 'multimedia', text: 'Multimédia'},
      ],
      typeAds:[
        { value: 'oferta', text: 'Oferta' },
        { value: 'procura', text: 'Procura' },
      ]
      
    
    }
  },

  mounted () {
    this.userAds = this.$store.state.ads.filter((ad) => ad.email == this.getLoggedUser.email)
    this.loggedUser = this.getLoggedUser
  },

  computed: {
    ...mapGetters(["getLoggedUser", "getAds", "getAdsId", "getId", ]),
   
  },

  methods: {
    ...mapMutations(["SET_ADS", "SET_ACTIVE_AD"]),

    

    addAds(){
      this.form.id = this.getAdsId;
      this.form.email= this.getLoggedUser.email,

      this.SET_ADS (this.form)
      

    },

    editSelectAd(idEdit){

      this.SET_ACTIVE_AD(idEdit)

      this.selector ='editAd Page'
    }

    
  },
  
};
</script>

<style>

:root {
        --orange: #F17941;
        --black: #353535;
        --border: #ced4da;
        --blue: #5266B7;
    }



.progress {
  background-color: #FFB18C !important;
}

.progress-bar {
  background-color: var(--orange) !important;
}

/* Botoes do Perfil */

.cardProfile ul li a {
  text-align: left;
  color: #353535 !important;
  font-weight: bold;
}

.cardProfile ul li a.active {
  text-align: left;
  background-color: var(--orange) !important;
  color: white !important;
}

.cardProfile ul li a.active:hover {
  text-align: left;
  background-color: var(--orange) !important;
  color: white !important;
}
.cardProfile ul li{
  text-align: left;
}
.cardProfile ul li a:hover{
  color: var(--orange) !important;
}
.cardProfile ul li a:active{
  color: white !important;
}

.cardProfile ul li:focus{
  background-color:#F17941 !important;
}

.cardProfile ul{
  background-color:#F1F1F1;
}
.card.cardProfile{
  background-color:#F1F1F1;
  border: none;
}


.personComment{
  margin-bottom: 0rem;
}

.newComment{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #5266B7;
}
.statsComment{
  display:flex;
  flex-direction: row;
  align-items: flex-start;
}
.ratingComment{
  margin-bottom: 1rem;
}

.avaliacaoContainer{
  text-align: left;
}
.avaliacoes.Container{
  margin-top: 5rem;
}

.cursoAvaliacao{
  color: #F17941;
}

.mainContainer{
 padding-top: 6rem;
}

.backgroundAnuncio{
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  height:14rem;
}

.imagemAnuncios{
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.imgAnuncio{
  border-radius: 5px;
  border: 1px solid;
  vertical-align: middle;
  width: 5rem;
  height:5rem;
  object-fit: cover;
  
}
.card.text-center{
  border: 1px solid ;
  border-radius:10px;
  margin-top:2rem;
}

.card.text-center {
  position: relative;  
  width:100%;
    
}
.card.text-center:before {
  content:"";
  position:absolute;
  width:100%;
  height:100%;
  top:0;left:0;right:0;
  background-color:rgba(0,0,0,0);
}
.card.text-center:hover::before {
  background-color:rgba(0,0,0,0.5);
  backdrop-filter: blur(1px);
  filter: blur(1px);
  transition: 0.5s ease;
}
.card.text-center img {
  display:block;
}
.card.text-center button {
  width: 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity:0;
} 
.card.text-center:hover button {   
  opacity: 1;
}


.FotoNome.Card{
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left: 1rem;
  margin-top:1rem;
  margin-bottom: 1rem;
}


.card-body.col-md-3{
  background-color: #F1F1F1;
  padding-bottom: 10%;
}
.cardHeader{
  display: flex;
  align-items: center;  
}

.cardHeader img{
  margin-right: 1rem;
}
.buttonsPerfil{
  display:flex;
  flex-direction:column;
  width: 100%;
  padding-top:1rem
  
}

.certificado{
  padding-top: 2rem;
}


.titulo{
  border-bottom: 1px solid ;
  display: flex;
  align-items: flex-start;
}
.tituloContainer{
  padding-left: 4rem;
  padding-right: 4rem;
}

.tituloAnuncios{
  width: 100%;
  display: flex;
}
.botaoAdicionar{
 width: 100%;
 display: flex;
 justify-content: end;
 padding-right: 5rem;
}

.container.dadosPerfil{
  background-color: #FFB18C;
  border-radius: 10px;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 1px 1px #353535;
}

.dadosContainer{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  
}

.inputsPerfil{
  width: 100%;
  border: 1px solid;
  border-color: var(--orange);
  border-radius: 5px;
}

.container.saveButtonAds{
  display: flex;
  flex-direction: row;
}

.saveButtonAds{
  display: flex;
  flex-direction: column;
}

.saveButton{
  display: flex;
  justify-content: flex-end;
}

.addAds.tituloFoto{
  display: flex;
  flex-direction: row;
}
.addAds.cursoTipoTempo{
  display: flex;
  flex-direction: row;
}

.container.addAdsFoto{
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
}

.btn.btn-warning{
  background-color: #F17941;
  border-color: #F17941;
  color:white
}

.btn.btn-warning:hover{
  background-color: #F17941 !important;
  border-color: #F17941 !important;
  color:white
}

.btn.btn-warning:focus{
  background-color: #F17941;
  border-color: #F17941;
  color:white
}

.btn.btn-primary{
  color: #353535;
  border-color: #F1F1F1;
  background-color: #F1F1F1;
  font-weight: bold;
  text-align: left;
}

.btn.btn-primary:hover{
  background-color: #F17941;
  border-color: #F17941;
}

.btn.btn-primary:focus{
  background-color: #F17941;
  border-color: #F17941;
  box-shadow: 0 12px 16px 0 white, 0 17px 50px 0 white;
}

.titulo.btn.btn.btn-primary{
   background-color: #F17941;
   color: white;
  
}

.titulo.btn.btn.btn-primary:hover{
   background-color: #F17941 !important;
   color: white !important;
}

.titulo.btn.btn.btn-primary:focus{
   background-color: #F17941;
   color: white;
  
}

.btn.btn-primary.adminsButtons{
  background-color: #F17941;
  color: white;
  width: 100%;
  text-align:center;
  margin-bottom: 10px;
}

.btn.btn-primary.adminsButtons:hover{
  background-color: var(--orange) !important;
  color: white;
  width: 100%;
  text-align:center;
  
}

</style>