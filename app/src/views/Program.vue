<template>
    <div v-if="loading">...</div>

    <main class="program" v-else>
        <h1 class="program__title">KONGEN PÅ HAUGEN 2022</h1>

        <p class="program__date">1. to 3. july at St. Hanshaugen</p>

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

        // methods: {
        //     formatDate(datetimeString) {
        //         const dato = new Date()
        //         dato.getFullYear()
        //     }
        // }
	}
</script>

<style>
    .program {
        padding-top: 60px;
        background-color: var(--backgroundDark);
        color: var(--foregroundLight);
    }

    @media screen and (max-width: 800px) {
        .program {
            padding-top: 30px;
            text-align: center;
        }
    }
    
    .program__title {
        margin-left: 150px;
    }

    @media screen and (max-width: 800px) {
        .program__title {
            margin-left: 0;
            font-size: 1.2em;
        }
    }

    .program__date {
        margin: 10px 0 0 200px;
    }

    @media screen and (max-width: 800px) {
        .program__date {
            text-align: center;
            margin: 10px 0 0;
            font-size: 0.8em;
       }
    }

    .setup__table {
        width: 70vw;
        margin: 20px 0 0 160px;
        color: var(--foregroundLight);
        text-align: left;
    }

    @media screen and (max-width: 800px) {
        .setup__table {
            width: 80vw;
            margin: 20px 0 0 40px;
            font-size: 0.7em;
        }
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

    @media screen and (max-width: 800px) {
        table td {
            padding: 5px;
        }
    }
</style>