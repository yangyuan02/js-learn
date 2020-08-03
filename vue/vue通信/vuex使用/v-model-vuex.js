<input v-model="message" />
computed:{
    message:{
        get() {
            return this.$store.state.message
        },
        set(value) {
            this.$store.commit('updateMessage', value)
        }
    }
}