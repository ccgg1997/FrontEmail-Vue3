import axios from 'axios';
const HOST_API = import.meta.env.VITE_HOST_API;
console.log("API URL: ", typeof(HOST_API)+"--"+HOST_API);
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
            axios.post(HOST_API, {
                query: texto
            })
            .then((response) => {
                commit('LlenarEmails', response.data.EmailsEncontrados);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
};
