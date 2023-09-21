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
        cargarEmails({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                commit('LlenarEmails', response.data);
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
