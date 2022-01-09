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
        status: "active"
      },
      {
        first_name: "Test",
        last_name: "Admin",
        course: "",
        gender: "Masculino",
        email: "admin@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "admin",
        status: "active"
      }
    ],
    loggedUser: null,
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
    SET_USER_BLOCKED(state,payload) {
      state.users[payload].status = 'blocked'
      localStorage.users = JSON.stringify(state.users)
    },
    SET_USER_ACTIVE(state,payload) {
      state.users[payload].status = 'active'
      localStorage.users = JSON.stringify(state.users)
    }
  },
  actions: {
  },
  modules: {
  }
})
