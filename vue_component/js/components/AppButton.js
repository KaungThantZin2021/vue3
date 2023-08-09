export default {
    template: `
        <button 
            :class="{
                'rounded py-2 px-3 m-1 disabled:cursor-not-allowed' : true,
                'bg-blue-600 text-white hover:bg-blue-500' : type === 'primary',
                'bg-gray-600 text-white hover:bg-gray-500' : type === 'secondary',
                'bg-green-600 text-white hover:bg-green-500' : type === 'success',
                'is-loading' : processing,

            }" 

            :disabled="disabled" 
            @click="load">

            <slot/>

        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        // processing: {
        //     type: Boolean,
        //     default: false
        // }
    },
    data() {
        return {
            disabled: false,
            processing: false,
        }
    },
    methods: {
        // alert() {
        //     alert('You click ' + this.type + ' btn!');
        // }

        load() {
            this.processing = !this.processing;
        }
    },
    mounted() {
        // alert('This is btn component.');
        console.log('This is app btn component.');
    },    
}