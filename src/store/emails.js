import axios from 'axios';
const HOST_API = import.meta.env.VITE_HOST_API;
//console.log("API URL: ", typeof(HOST_API)+"--"+HOST_API);
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
        async cargarEmails({commit}, texto) {
            try {
                const response = await axios.post(HOST_API, JSON.stringify({ query: texto }));
                commit('LlenarEmails', response.data.EmailsEncontrados);
                return response.data.EmailsEncontrados;
            } catch (error) {
                console.error("Hubo un error al cargar los emails:", error);
                throw error; 
            }
        }
    }
};
