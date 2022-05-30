<template>
    <div v-if="loading">...</div>

    <main class="tickets" v-else>
        <section class="tickets__ticket" v-for="ticket in result">
            <div class="ticket__text">
                <p class="text__name">{{ ticket.name }}</p>

                <p class="text__description">{{ ticket.description }}</p>
            </div>

            <p class="ticket__price">{{ ticket.price }}kr</p>
        </section>
    </main>
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
        padding-top: 60px;
        background-color: var(--backgroundLight);
        color: var(--foregroundDark);
    }

    .tickets__ticket {
        width: 700px;
        text-align: left;
        background-color: var(--detailsTickets);
        border: 2px solid var(--foregroundDark);
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