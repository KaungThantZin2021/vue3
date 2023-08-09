
import AppButton from './AppButton.js';

export default {
    components: {
        'app-btn': AppButton,
        'test-btn': {
            template: `
                <button class="bg-green-500 text-white rounded py-2 px-3 m-1 disabled:cursor-not-allowed" :disabled="processing" @click="alert">
                    <slot/>
                </button>
            `,
            data() {
                return {
                    processing: false
                }
            },
            methods: {
                alert() {
                    alert('You click me!');
                }
            },
            mounted() {
                // alert('This is btn component.');
                console.log('This is btn component.');
            },    
        },
    },
    mounted() {
        // alert('latest');
        console.log('latest');
    },
}