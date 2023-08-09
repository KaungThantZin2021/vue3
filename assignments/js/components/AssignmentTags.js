export default {
    template: `
        <div class="my-2">
            <button 
                @click="this.$emit('update:currentTag', tag)"
                v-for="tag in tags"
                class="my-2 mr-1 px-1 border rounded text-xs"
                :class = "{
                    'border-blue-500 text-blue-500': tag == currentTag
                }"
                >
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    }
}