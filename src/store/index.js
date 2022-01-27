import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users : localStorage.users ? JSON.parse(localStorage.users) : [
      {     
        first_name: "Test",
        last_name: "User",
        course: "multimedia",
        gender: "Masculino",
        email: "user@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        description: "",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'

      },
      {
        first_name: "Test",
        last_name: "Admin",
        course: "tsiw",
        gender: "Masculino",
        email: "admin@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "admin",
        status: "active",
        profileImg: "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        description: "",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      },
    ],
    loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
    ads : localStorage.ads ? JSON.parse(localStorage.ads) :[
      {
        title: "Fotografias",
        description: "Preciso que alguém me empreste uma câmara por um dia.",
        course :  "design grafico",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        id : 1,
        typeAd: { value: 'oferta', text: 'Oferta' }
      },
      {
        title: "Video Promocional",
        description: "Sou vocacionada em edição de video. Contactem-me se precisarem de ajuda.",
        course :  "multimedia",
        time : "50-60",
        email :"user@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        id : 2,
        typeAd: { value: 'oferta', text: 'Oferta' }
      },
      {
        title: "Website",
        description: "Estou disponivel para fazer um site ao teu gosto.",
        course :  "tsiw",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        id : 3,
        typeAd: { value: 'procura', text: 'Procura' }
      },
      {
        title: "Modelos 3D",
        description: "Alguém sabe criar modelos 3d online?",
        course :  "tsiw",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        id : 4,
        typeAd: { value: 'procura', text: 'Procura' }
      },
    ],
    favs : localStorage.favs ? JSON.parse(localStorage.favs) :[],
    avaliacoes : localStorage.avaliacoes ? JSON.parse(localStorage.avaliacoes) :[],
    activeAd:localStorage.activeAd ? JSON.parse(localStorage.activeAd):null, 
    activeProfile : localStorage.activeProfile ? JSON.parse(localStorage.activeProfile) : null,
  },
  getters: {
    isLoginValid: (state) => (email, password) => state.users.some((user) => user.email === email && user.password === password),
    isEmailRegistered: (state) => (email) => state.users.some((user) => user.email === email),
    getUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    getAds : (state) => state.ads,
    getAdsId: (state) => state.ads ? state.ads[state.ads.length - 1].id + 1 : 0,
    getId:(state) => state.activeAd,
    getActiveProfile:(state) => state.activeProfile,
    getAdSpecific:(state) => (id) => state.ads.find((ad)=> ad.id == id),
    getFavs:(state) => state.favs,
    getThisAdFav:(state) => (id) => state.favs.find((fav) => fav.adId == id),
    ads: (state) => state.users,
    getAvaliacoes: (state) => state.avaliacoes
  },
  mutations: {
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
      localStorage.users = JSON.stringify(state.users)},
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.email === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SIGNOUT_USER(state) {
      state.loggedUser = null
      localStorage.removeItem('loggedUser')
    },
    SET_USER_BLOCKED(state,payload) {
      state.users[payload].status = 'blocked'
      localStorage.users = JSON.stringify(state.users)
    },
    SET_USER_ACTIVE(state,payload) {
      state.users[payload].status = 'active'
      localStorage.users = JSON.stringify(state.users)
    },
    SET_ADS(state, payload) {
      state.ads.push(payload)
      localStorage.ads = JSON.stringify(state.ads)
    },
    SET_ACTIVE_AD(state,payload) {
      state.activeAd = state.ads.find((ad) => ad.id === payload);
      localStorage.activeAd = JSON.stringify(state.activeAd) 
    },
    ADD_FAV(state,payload) {
      state.favs.push(payload)
      localStorage.favs = JSON.stringify(state.favs)
    },
    REMOVE_FAV(state,payload) {
      state.favs.splice(payload,1)
      localStorage.favs = JSON.stringify(state.favs)
    },
    REMOVE_AD(state,payload) {
      state.ads.splice(payload,1)
      localStorage.ads = JSON.stringify(state.ads)
    },
    REMOVE_USER(state,payload) {
      state.users.splice(payload,1)
      localStorage.users = JSON.stringify(state.users)
    },
    SET_ACTIVE_AD_OUT(state){
      state.activeAd = null;
      localStorage.removeItem("activeAd")
    },

    SET_UPDATE_USER(state,payload){
      state.users.push(payload)
      localStorage.users.setItem(getLoggedUser.email, payload)
    },

    SET_ACTIVE_PROFILE(state,payload) {
      state.activeProfile = state.users.find((user) => user.email === payload);
      localStorage.activeProfile = JSON.stringify(state.activeProfile)
      
    },

    ADD_COMMENT(state,payload) {
      state.avaliacoes.push(payload)
      localStorage.avaliacoes = JSON.stringify(state.avaliacoes)
    },

  },
  actions: {
  },
  modules: {
  }
})
