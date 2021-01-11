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
  counter: 0,
  acao: null,
  livros: [
    {
      nome: "O Senhor dos Anéis",
      lido: true,
    },
    {
      nome: "Harry Potter",
      lido: true,
    },
    {
      nome: "As Crônicas de Gelo e Fogo",
      lido: false,
    }
  ]
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
  },
  UPDATE_ACAO(state, payload) {
    state.acao = payload;
  },
}

export const actions = {
  completarAula(context, payload){
    context.commit("COMPLETAR_AULA", payload)
  },  
  puxarAcao(context) {
    fetch('https://api.origamid.dev/stock/aapl/quote')
      .then((r) => r.json())
      .then((respostaJson) => {
        console.log(context)
        context.commit('UPDATE_ACAO', respostaJson);
        context.dispatch('completarAula', {
          aula: "apple"
        })
    })
  }
}
export const getters = {
  livrosLidos(state) {
    return state.livros.filter(livro => livro.lido);
  }
  // ou
  // livrosLidos: state => state.livros.filter(livro => livro.lido)
}