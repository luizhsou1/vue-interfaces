Vue.component('my-section', {
    template: `
        <section :style="style">
            <div class="fill">
                My Section
                <input type="text" v-model="str">
            </div>
        </section>
    `,
    data: () => ({
        style: {
            background: 'yellow'
        },
        str: ''
    }),
    watch: {
        str() {
            this.$emit('input', this.str)
        }
    }
})