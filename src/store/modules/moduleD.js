const moduleD = {
    state: {
        msg: 'moduleD'
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
    moduleD
}