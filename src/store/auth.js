export default {
    namespaced: true,
    state: {
        auth: false,
        nombre: '',
        correo: ''
    },
    getters: {
        isAuthenticated: state => state.auth,
        getNombre: state => state.nombre,
        getCorreo: state => state.correo
    },
    mutations: {
        SET_AUTH(state, status) {
            state.auth = status;
        },
        SET_USER_DATA(state, { nombre, correo }) {
            state.nombre = nombre;
            state.correo = correo;
        },
        CLEAR_USER_DATA(state) {
            state.auth = false;
            state.nombre = '';
            state.correo = '';
        }
    },
    actions: {
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        }
    }
};
