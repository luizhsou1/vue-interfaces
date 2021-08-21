Vue.component('my-main', {
    template: `
        <main>
            <div class="fill">
                My Main
                <my-section @input="$emit('input', $event)" />
            </div>
        </main>
    `
})