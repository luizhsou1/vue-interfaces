Vue.component('my-section', {
    mixins: [ Mixin ],
    props: ['message'],
    template: `
        <section :style="style">
            <div class="fill">
                My Section
                {{ reverse }}
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
    computed: {
        reverse () {
            return this.str ? this.str.split('').reverse().join('') : ''
        }
    },
    mounted() {
        this.str = this.message
    },
    watch: {
        str() {
            this.$emit('input', this.str)
        }
    }
})