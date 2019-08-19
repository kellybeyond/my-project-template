const moduleA = {
    state: {
        msg: 'moduleA'
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
export default {
    moduleA
}