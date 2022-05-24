<template>
    <div v-if="loading">...</div>

    <div class="program" v-else>
        <span class="program__title">Marie Festival 2022</span>

        <div class="program__setup">
            <div class="setup__days">
                <button class="days__day" @click="selectedDate = '2022-07-01'">Friday 01.july</button>
                
                <button class="days__day" @click="selectedDate = '2022-07-02'">Saturday 02.july</button>

                <button class="days__day" @click="selectedDate = '2022-07-03'">Sunday 03.july</button>
            </div>

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
        background-color: var(--black);
        color: var(--beige);
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
        border: 2px solid var(--beige);
        border-radius: 50px;
        color: var(--beige);
    }

    .days__day:hover {
        background-color: var(--beige);
        color: var(--black);
    }

    .setup__table {
        width: 1000px;
        margin: 50px 0 0 70px;
        color: var(--beige);
        text-align: left;
    }

    table {
        border-collapse: collapse;
    }

    table thead {
        font-weight: bold;
    }

    table tr {
        border-bottom: 1px solid var(--beige);
    }

    table td {
        padding: 10px;
    }
</style>