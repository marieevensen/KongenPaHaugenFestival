<template>
    <div v-if="loading">...</div>

    <div class="program" v-else>
        <span class="program__title">Marie Festival 2022</span>

        <div class="program__setup">
            <div class="setup__days">
                <span class="days__day">Friday 01.july</span>

                <span class="days__day">Saturday 02.july</span>
                
                <span class="days__day">Sunday 03.july</span>
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
		}
	}
</script>

<style>
    .program {
        background-color: black;
        color: white;
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
        border: 2px solid white;
        border-radius: 50px;
    }

    .days__day:hover {
        background-color: white;
        color: black;
    }

    .setup__table {
        width: 1000px;
        margin: 50px 0 0 70px;
        color: white;
        text-align: left;
    }

    table {
        border-collapse: collapse;
    }

    table thead {
        font-weight: bold;
    }

    table tr {
        border-bottom: 1px solid white;
    }

    table td {
        padding: 10px;
    }
</style>