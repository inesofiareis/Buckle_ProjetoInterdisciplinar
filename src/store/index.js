import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users : localStorage.users ? JSON.parse(localStorage.users) : [
      {     
        first_name: "Test",
        last_name: "User",
        course: "",
        gender: "Masculino",
        email: "user@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif"
      },
      {
        first_name: "Test",
        last_name: "Admin",
        course: "",
        gender: "Masculino",
        email: "admin@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "admin",
        status: "active",
        profileImg: "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif"
      },
    ],
    loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
    ads : localStorage.ads ? JSON.parse(localStorage.ads) :[
      {
        title: "Fotografias",
        description: "Preciso que alguém me empreste uma câmara por um dia.",
        course :  "design-grafico",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        img : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        img_bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        id : 1,
        typeAd: "Procura"
      },
      {
        title: "Video Promocional",
        description: "Sou vocacionada em edição de video. Contactem-me se precisarem de ajuda.",
        course :  "multimedia",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        img : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        img_bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        id : 2,
        typeAd: "Oferta"
      },
      {
        title: "Website",
        description: "Estou disponivel para fazer um site ao teu gosto.",
        course :  "tsiw",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        img : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        img_bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        id : 3,
        typeAd: "Oferta"
      },
      {
        title: "Modelos 3D",
        description: "Alguém sabe criar modelos 3d online?",
        course :  "tsiw",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        img : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        img_bg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        id : 4,
        typeAd: "Procura"
      },
    ],
    activeAd:null
  },
  getters: {
    isLoginValid: (state) => (email, password) => state.users.some(
      (user) => user.email === email && user.password === password
    ),
    isEmailRegistered: (state) => (email) => state.users.some(
      (user) => user.email === email
    ),
    getUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    getAds : (state) => state.ads,
    getAdsId: (state) => state.ads ? state.ads[state.ads.length - 1].id + 1 : 0,
    getId:(state) => state.activeAd,
    getAdSpecific:(state) => (id) => state.ads.find((ad)=> ad.id == id),
    ads: (state) => state.users,
  },
  mutations: {
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
      localStorage.users = JSON.stringify(state.users)
    },
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
      
    }
  },
  actions: {
  },
  modules: {
  }
})
