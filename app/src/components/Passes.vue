<template>
    <div v-if="loading">...</div>

	<div class="frontpage__passes" v-else>
		<span class="passes__title">ÅRETS FESTIVALPASS</span>

        <div class="passes__pass">
            <div class="pass" v-for="ticket in result">
                <!-- <span class="pass__price">{{ ticket.price[0] }}</span> -->
                <!-- <span class="pass__title">{{ ticket.name }}</span> -->
                <span class="pass__text">{{ ticket.description[1] }}</span>
            </div>
        </div>
	</div>
</template>

<script>
    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/tickets.groq?raw';

	export default {
		mixins: [sanityMixin],
		
		async created() {
    	 	await this.sanityFetch(query)
		},
	}
</script>

<style>
    .frontpage__passes {
        margin-top: 200px;
    }

    .passes__title {
        font-size: 2.5em;
        font-weight: bold;
    }

    .passes__pass {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pass {
        width: 150px;
    }


</style>