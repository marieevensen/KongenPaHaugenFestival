<template>
    <div v-if="loading">...</div>

    <div class="tickets" v-else>
        <div class="tickets__ticket" v-for="ticket in result">
            <div class="ticket__text">
                <span class="text__name">{{ ticket.name }}</span><br>

                <span class="text__description">{{ ticket.description[0] }}</span>
            </div>

            <div class="ticket__price">
                {{ ticket.price }}kr
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
		}
	}
</script>

<style>
    .tickets {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 60px;
        background-color: #F9F3DF;
        color: black;
    }

    .tickets__ticket {
        width: 700px;
        text-align: left;
        background-color: #F0F4F4;
        border: 2px solid #000000;
        margin-bottom: 40px;
        padding: 20px;
        display: flex;
    }

    .text__name {
        font-weight: bold;
    }

    .text__description {
        font-size: 0.9em;
    }

    .ticket__price {
        font-weight: bold;
        font-size: 35px;
        padding: 10px 0 0 160px;
    }
</style>