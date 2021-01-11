export const state = () => ({
   user: {
    id: "",
    nome: "Diogo",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  },
  aulasCompletas: [],
  counter: 0

})

// export const mutations = {
//   CHANGE_USER(state ,payload) {
//     // console.log(payload.nome)
//     state.user.nome = payload.nome
//     state.user.senha = payload.senha
//   },
//   INCREMENT(state) {
//     state.counter++
//   },
//   COMPLETAR_AULA(state ,payload) {
//     state.aulasCompletas.push(payload)
//   }
// }

export const mutations = {
  // CHANGE_USER(state ,payload) {
  //   // console.log(payload.nome)
  //   state.user.nome = payload.nome
  //   state.user.senha = payload.senha
  // },

  CHANGE_USER(state, payload) {
    state.user.nome = payload.name;
  },
  CHANGE_SENHA(state, payload) {
    state.user.senha = payload.senha;
  },
  INCREMENT(state) {
    state.counter++
  },
  COMPLETAR_AULA(state ,payload) {
    state.aulasCompletas.push(payload)
  }
}

export const actions = {
  completarAula(context, payload){
    context.commit("COMPLETAR_AULA", payload)
  }
}