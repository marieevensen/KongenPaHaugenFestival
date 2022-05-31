<template>
    <div v-if="loading">...</div>

    <main class="about" v-else v-for="about in result">
        <div class="about__text">
            <h1 class="text__title">{{ about.title }}</h1>

            <p class="text__info">{{ about.description }}</p>
        </div>

        <figure class="about__image" >
            <img :src="about.imageURL" alt="Picture of the festival">
        </figure>
    </main>
</template>

<script>
    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/about.groq?raw';


	export default {
		mixins: [sanityMixin],
		
		async created() {
    		await this.sanityFetch(query)
		}
	}
</script>

<style>
    .about {
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 60px;
    }

    @media screen and (max-width: 800px) {
        .about {
            flex-direction: column;
            align-items: center;
            padding-top: 30px;
        }
    }

    .about__text {
        margin-right: 40px;
    }

    @media screen and (max-width: 800px) {
        .about__text {
            margin: 0;
        }
    }

    .text__title {
        font-weight: bold;
        text-transform: uppercase;
    }

    @media screen and (max-width: 800px) {
        .text__title {
            font-size: 1.2em;
        }
    }

    .text__info {
        width: 40vw;
        text-align: left;
        margin-top: 15px;
    }

    @media screen and (max-width: 800px) {
        .text__info {
            width: 60vw;
            font-size: 0.8em;
        }
    }

    .about__image {
        width: 300px;
        margin-top: 60px;
    }

    @media screen and (max-width: 800px) {
        .about__image {
            width: 250px;
        }
    }
</style>