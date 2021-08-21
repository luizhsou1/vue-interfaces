new Vue({
    el: '#app',
    data: {
        message: undefined,
        open: false
    },
    methods: {
        updateOpen() {
            this.open = !this.open
        }
    }
})