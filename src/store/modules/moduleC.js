const moduleC = {
    state: {
        msg: 'moduleC'
    },
    mutations: {
        changeMsg (state, param) {
            state = state + param
        }
    },
    actions: {
        changeMsg (context) {
            context.commit('changeMsg')
        }
    },
    // getters: { ... }
}
export default{
    moduleC
}