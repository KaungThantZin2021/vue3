export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black bg-white flex">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2"/>
                <button type="submit" class="p-2 border-l w-full">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            if (this.newAssignment == "") return false;

            this.$emit('add', this.newAssignment);

            this.newAssignment = "";
        }
    },
}