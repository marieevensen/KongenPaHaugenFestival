<template>
    <div v-if="loading">...</div>

    <main class="program" v-else>
        <h1 class="program__title">KONGEN PÅ HAUGEN 2022</h1>

            <table class="setup__table">
                <thead>
                    <tr>
                        <td>Artist</td>
                        <td>Date and time</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="concert in result">
                        <td>{{ concert.name }}</td>
                        <td>{{ concert.datetime }}</td>
                    </tr>
                </tbody>
            </table>
    </main>
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
        padding-top: 60px;
        background-color: var(--backgroundDark);
        color: var(--foregroundLight);
    }
    
    .program__title {
        margin-left: 150px;
        font-size: 50px;
    }

    .setup__table {
        width: 800px;
        margin: 20px 0 0 200px;
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