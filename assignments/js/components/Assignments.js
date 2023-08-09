import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list title="In Progress" :assignments="filters.inProgress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list 
                    title="Completed" 
                    :assignments="filters.completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                >
                </assignment-list>
            </div>

        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true,
        }
    },
    computed: {
        inProgress() {
            return this.assignments.filter(a => !a.complete);
        },
        completed() {
            return this.assignments.filter(a => a.complete);
        },
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(assignments => {
            this.assignments = assignments;
        }); 
    },
    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
                tag: 'eng',
            })
        }
    },
}