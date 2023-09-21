import axios from 'axios';

export default {
    namespaced: true,
    state: {
        Emails: []  
    },
    getters: {
      Emails(state) {
        return state.Emails;
      }  
    },
    mutations: {
        LlenarEmails(state, data) {
            state.Emails = data;  
        }
    },
    actions: {
        cargarEmails({commit},texto) {
            axios.post('http://localhost:8080/query', {
                query: texto
            })
            .then((response) => {
                commit('LlenarEmails', response.data.EmailsEncontrados);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        iniciarEmails({commit}) {
            commit('LlenarEmails', []);
        }
    }
};
