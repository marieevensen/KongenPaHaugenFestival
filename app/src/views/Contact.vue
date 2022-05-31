<template>
    <div v-if="loading">...</div>

    <main class="contact" v-else v-for="contactInfo in result">
        <h1 class="contact__title">{{ contactInfo.title }}</h1>

        <div class="contact__info">
            <p><span class="info__type">Mail</span> {{ contactInfo.mail }}</p>
            <p><span class="info__type">Number</span> {{ contactInfo.number }}</p>

            <p class="info__text">{{ contactInfo.quote }}</p>
        </div>
    </main>
</template>

<script>
    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/contactInfo.groq?raw';


	export default {
		mixins: [sanityMixin],
		
		async created() {
    		await this.sanityFetch(query)
		}
	}
</script>

<style>
    .contact {
        text-align: center;
        padding-top: 60px;
        background-color: var(--backgroundLight);
        color: var(--foregroundDark);
    }

    @media screen and (max-width: 800px) {
        .contact {
            padding-top: 30px;
        }
    }

    .contact__title {
        margin-bottom: 40px;
        text-transform: uppercase;
    }

    @media screen and (max-width: 800px) {
        .contact__title {
            margin-bottom: 20px;
            font-size: 1.2em;
        }
    }

    .contact__info {
        width: 450px;
        text-align: left;
        margin: auto;
        padding: 25px;
        border: 2px solid var(--foregroundDark);
        font-size: 0.8em;
    }

    @media screen and (max-width: 800px) {
        .contact__info {
            width: 270px;
            font-size: 0.7em;
        }
    }

    .info__type {
        padding-right: 10px;
        font-weight: bold;
    }

    .info__text {
        margin-top: 50px;
        font-weight: lighter;
        font-size: 1.1em;
    }
</style>