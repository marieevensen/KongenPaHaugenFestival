<template>
    <div v-if="loading">...</div>

    <main class="contact" v-else v-for="contactInfo in result">
        <h1 class="contact__title">{{ contactInfo.title }}</h1>

        <div class="contact__info" id="change-color">
            <p><span class="info__type">Mail</span> {{ contactInfo.mail }}</p>
            <p><span class="info__type">Number</span> {{ contactInfo.number }}</p>

            <p class="info__text">{{ contactInfo.quote }}</p>
        </div>

        <div class="contact__api">
            <input type="text" class="api__color-value" placeholder="Type a hexcode, e.g. 00BEA7" v-model="hexValue">

            <button class="api__button" @click="fetchValue">
                See what happens!
            </button>
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
		},

        data () {
			return {
				hexValue: '',
			}
		},

		methods: {
			async fetchValue() {
				const url = `https://x-colors.herokuapp.com/api/hex2rgb?value=${this.hexValue}`;
				const res = await fetch(url);
				const result = await res.json();

				const div = document.getElementById('change-color')

				div.style.background = result.rgb;
			},
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

    .contact__api {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    .api__color-value {
        width: 220px;
        padding: 3px;
        border: 1px solid var(--foregroundDark);
        font-size: 0.7em;
    }

    .api__button {
        margin-top: 10px;
        padding: 3px;
        background-color: var(--details);
        border: 1px solid var(--details);
        color: var(--foregroundLight);
        font-size: 0.7em;
    }

    .api__button:hover {
        background-color: var(--backgroundDark);
        border: 1px solid var(--foregroundDark);
        color: var(--foregroundLight);
    }
</style>