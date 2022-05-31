<template>
	<div v-if="loading">...</div>

	<main class="frontpage" v-else>
		<section class="frontpage__lineup">
			<span class="lineup__artist" v-for="artist in result">
				<span class="artist__name">{{ artist.artistname }}</span>

				<figure class="artist__image">
					<img :src="artist.imageURL" alt="Picture of the artist">
				</figure>
			</span>
		</section>

		<RouterLink class="lineup__link" :to="{ name: 'artists' }">Info about the artists</RouterLink>

		<Slideshow />

		<div class="frontpage__intro">
			<img class="intro__image" src="/images/karpeHome.jpg" alt="Picture of the artist Chirag">

			<div class="intro__message">
				<h1 class="message__title">We are back!</h1>

				<p class="message__text">
					After two canceled years, we are looking forward to finally 
					share music experiences, party, community and good
					atmosphere at St. Hanshaugen in July.
				</p>
			</div>
		</div>

		<section class="frontpage__passes">
			<h1 class="passes__title">FESTIVALPASSES</h1>

			<div class="passes">
				<section class="passes__pass">
					<h2 class="pass__price">1799,-</h2>

					<h4>Festivalpass</h4>
					
					<ul class="pass__text">
						<li>Age: 16</li>
						<li>No access to premium area</li>
						<li>No camping</li>
					</ul>		
				</section>

				<section class="passes__pass">
					<h2 class="pass__price">2399,-</h2>

					<h4>Premiumpass</h4>
					
					<ul class="pass__text">
						<li>Age: 20</li>
						<li>Access to premium area</li>
						<li>No camping</li>
					</ul>	
				</section>

				<section class="passes__pass">
					<h2 class="pass__price">3099,-</h2>

					<h4>Camp-pass</h4>

					<ul class="pass__text">
						<li>Age: 20</li>
						<li>Access to premium area</li>
						<li>Camping</li>
					</ul>		
				</section>
			</div>
		</section>

		<div class="frontpage__images">
			<figure>
				<img class="image--doja" src="/images/dojaHome.jpg" alt="Picture of the artist Doja Cat">
			</figure>

			<figure>
				<img class="image--billie" src="/images/billieHome.jpg" alt="Picture of the artist Billie Eilish">
			</figure>
		</div>
	</main>
</template>

<script>
	import Slideshow from '../components/Slideshow.vue';

    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/artists.groq?raw';

	export default {
		components: {
			Slideshow
		},

		mixins: [sanityMixin],
		
		async created() {
    	 	await this.sanityFetch(query)
		},
	}
</script>

<style>
	.frontpage {
		text-align: center;
	}

	.frontpage__lineup {
		margin: 50px;
		text-align: center;
		animation-name: transformIt;
		animation-duration: 3s;
	}

	@media screen and (max-width: 800px) {
        .frontpage__lineup {
			margin: 15px;
		}
    }

	@keyframes transformIt {
		from {
			transform: translate(1100px);
		}
		to {
			transform: translate(0px);
		}
	}

	.lineup__artist {
		position: relative;
	}

	.lineup__artist:hover .artist__image {
		opacity: 1;
		color: var(--details);
		text-decoration-line: line-through;
	}

	.artist__name {
		position: relative;
		font-size: 3em;
		text-transform: uppercase;
		font-weight: bold;
		padding: 0 20px;
		cursor: pointer;
	}

	@media screen and (max-width: 800px) {
        .artist__name {
			font-size: 1.5em;
			padding: 0 10px;
		}
    }

	.artist__name:hover {
		color: var(--details);
		text-decoration-line: line-through;
	}

	.artist__image {
		width: 300px;
		opacity: 0;
		position: absolute;
		z-index: 1;
		position: fixed;
		pointer-events: none;
		top: 35%;
		left: 40%;
	}

	.lineup__link {
		padding: 10px;
		text-decoration: none;
		text-transform: uppercase;
		border: 2px solid var(--foregroundLight);
		color: var(--foregroundLight);
	}

	.lineup__link:hover {
		padding: 10px;
		text-decoration: none;
		text-transform: uppercase;
		background-color: var(--backgroundLight);
		border: 2px solid var(--foregroundLight);
		color: var(--foregroundDark);
	}

	.frontpage__intro {
		display: flex;
		justify-content: center;
		margin-top: 70px;
	}

	.intro__image {
		width: 380px;
		margin-top: 100px;
		border-radius: 50%;
	}

	.message__title {
		margin: 200px 0 0 60px;
		font-size: 3em;
		font-weight: bold;
	}

	.message__text {
		width: 500px;
		margin: 15px 0 0 140px;
		font-size: 1.3em;
	}

	.frontpage__passes {
		margin-top: 150px;
	}

	.passes {
		display: flex;
		justify-content: center;
	}

	.passes__title {
		font-size: 2.5em;
	}

	.passes__pass {
		text-align: left;
		display: flex;
		flex-direction: column;
		border-right: 2px solid var(--foregroundLight);
		border-left: 2px solid var(--foregroundLight);
		padding: 40px;
		margin: 30px;
	}

	.pass__price {
		text-align: center;
		font-weight: bold;
	}

	.frontpage__images {
		display: flex;
		justify-content: center;
		margin-top: 150px;
	}

	.image--doja {
		width: 400px;
		margin: 100px 100px 0 0;
		box-shadow: 20px 20px var(--foregroundLight); 
	}

	.image--billie {
		width: 400px;
		/* margin: 30px 50px 0; */
		box-shadow: 20px 20px var(--foregroundLight); 
	}
</style>