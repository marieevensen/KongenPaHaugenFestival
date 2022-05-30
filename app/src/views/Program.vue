<template>
    <div v-if="loading">...</div>

    <div class="program" v-else>
        <span class="program__title">Marie Festival 2022</span>

        <div class="program__setup">
            <table class="setup__table">
                <thead>
                    <tr>
                        <td>Artist</td>
                        <td>Tid</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="concert in result">
                        <td>{{ concert.name }}</td>
                        <td>{{ concert.datetime }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/concerts.groq?raw';


	export default {
		mixins: [sanityMixin],
		
		async created() {
    		await this.sanityFetch(query)
		},

        // data() {
        //     return {
        //      selectedDate
        //     }
        // },

        // computed() {
        //     datoer.filter(dato => dato.startsWith(this.selectedDate))
        // },

        methods: {
            formatDate(datetimeString) {
                const dato = new Date()
                dato.getFullYear()
            }
        }
	}
</script>

<style>
    .program {
        background-color: var(--backgroundDark);
        color: var(--foregroundLight);
    }
    
    .program__title {
        margin: 100px 0px 0px 50px; /*hva skjer her top?*/
        font-size: 50px;
    }

    .program__setup {
        margin-top: 30px;
        font-size: 0.8em;
    }

    .days__day {
        margin-left: 60px;
        padding: 7px 15px;
        border: 2px solid var(--foregroundLight);
        border-radius: 50px;
        color: var(--foregroundLight);
    }

    .days__day:hover {
        background-color: var(--BACKgroundLight);
        color: var(--foregroundDark);
    }

    .setup__table {
        width: 1000px;
        margin: 50px 0 0 70px;
        color: var(--foregroundLight);
        text-align: left;
    }

    table {
        border-collapse: collapse;
    }

    table thead {
        font-weight: bold;
    }

    table tr {
        border-bottom: 1px solid var(--foregroundLight);
    }

    table td {
        padding: 10px;
    }
</style>