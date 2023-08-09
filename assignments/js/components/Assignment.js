export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assignment.name }}
                <span class="bg-blue-500 text-xs px-1 py-px rounded-md">{{ assignment.tag }}</span>
                <input type="checkbox" v-model="assignment.complete" class="ml-2">
            </label>
        </li>
    `,
    props: {
        assignment: Object,
    }
}