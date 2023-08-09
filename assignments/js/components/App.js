import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },
    template: `
        <div class="grid gap-6">
            <Assignments/>

            <panel>
                This is default slot.
            </panel>

            <panel>
                <template v-slot:heading>
                    Hello
                </template>

                This is default slot.
            </panel>

            <panel>
                <template v-slot:heading>
                    Hello
                </template>

                This is default slot.

                <template v-slot:footer>
                    This is footer.
                </template>
            </panel>

            <panel theme="light">
                <template v-slot:heading>
                    Hello
                </template>

                This is default slot.

                <template v-slot:footer>
                    This is footer.
                </template>
            </panel>
        </div>
    `,
}