const moduleB = {
    state: {
        msg: 'moduleB'
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
    moduleB
}