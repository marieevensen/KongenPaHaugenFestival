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
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        background-color: var(--backgroundLight);
        color: var(--foregroundDark);
    }

    .tickets__ticket {
        width: 55vw;
        display: flex;
        text-align: left;
        margin-bottom: 40px;
        padding: 20px;
        background-color: var(--detailsTickets);
        border: 2px solid var(--foregroundDark);
    }

    @media screen and (max-width: 800px) {
        .tickets__ticket {
            display: flex;
            flex-direction: column;
        }
    }

    .text__name {
        font-weight: bold;
    }

    .text__description {
        font-size: 0.9em;
    }

    .ticket__price {
        padding: 20px 0 0 100px;
        font-weight: bold;
        font-size: 1.3em;
    }

    @media screen and (max-width: 800px) {
        .ticket__price {
            padding: 5px 0 0 0;
            text-align: center;
            font-size: 1em;
        }
    }
</style>