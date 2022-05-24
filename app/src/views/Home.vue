<template>
	<div v-if="loading">...</div>

	<div class="frontpage" v-else>
		<section class="frontpage__lineup">
			<span class="lineup__artist" v-for="artist in result">
				<span class="artist__name">{{ artist.artistname }}</span>

				<div class="artist__image">
					<img :src="artist.imageURL" alt="">
				</div>
			</span>
		</section>

		<RouterLink class="lineup__link" :to="{ name: 'artists' }">Info about the artists</RouterLink>

		<Slideshow />

		<section class="frontpage__intro">
			<img class="intro__image" src="/images/karpeHome.jpg" alt="">

			<span class="intro__text">We are back!</span>

			<span class="intro__text--description">
				After two canceled years, we are looking forward to finally 
				share music experiences, party, community and good
				atmosphere at St. Hanshaugen in July.
			</span>

			<svg width="1263" height="653" viewBox="0 0 1263 653" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M984.486 34.312C891.295 78.706 784.976 172.826 665.244 336.439C545.466 500.113 443.569 591.05 357.452 630.003C314.367 649.491 275.184 655.989 239.676 652.029C204.17 648.07 172.461 633.669 144.291 611.533C87.9854 567.289 45.6616 492.027 15.1706 406.828C-15.3305 321.6 -34.0308 226.312 -43 141.905L-41.007 141.773C-32.0455 226.108 -13.3625 321.292 17.0952 406.398C47.5631 491.533 89.7737 566.467 145.701 610.414C173.648 632.373 204.98 646.566 239.955 650.466C274.928 654.365 313.665 647.988 356.458 628.633C442.093 589.898 543.77 499.274 663.512 335.649C783.299 171.961 889.826 77.5617 983.453 32.9599C1030.28 10.6514 1073.91 0.787938 1114.37 0.96718C1154.83 1.14644 1192.04 11.3699 1226.03 29.1401C1293.98 64.6612 1349.09 130.357 1391.77 206.438C1434.45 282.541 1464.75 369.14 1483 446.596L1481.03 446.885C1462.81 369.517 1432.55 283.041 1389.94 207.077C1347.32 131.092 1292.4 65.7287 1224.93 30.4567C1191.21 12.8303 1154.38 2.72356 1114.36 2.54627C1074.34 2.36896 1031.07 12.1226 984.486 34.312Z" fill="white"/>
			</svg>
		</section>

		<!-- <Passes /> -->
		<section class="frontpage__passes">
			<span class="passes__title">FESTIVALPASSES</span>

			<div class="passes">
				<div class="passes__pass">
					
					<span class="pass__price">1799,-</span>

					<span class="pass__text">
						Festivalpass <br>
						• Age: 16 <br>
						• No access to premium area <br>
						• No camping <br>
					</span>		
				</div>

				<div class="passes__pass">
					<span class="pass__price">2399,-</span>

					<span class="pass__text">
						Premiumpass <br>
						• Age: 20 <br>
						• Access to premium area <br>
						• No camping <br>
					</span>		
				</div>

				<div class="passes__pass">
					<span class="pass__price">3099,-</span>

					<span class="pass__text">
						Camp-pass <br>
						• Age: 20 <br>
						• Access to premium area <br>
						• Camping <br>
					</span>		
				</div>
			</div>
		</section>

		<section class="frontpage__images">
			<div class="images__image">
				<img class="image__doja-cat" src="/images/dojaHome.jpg" alt="Bilde avartisten Doja Cat">
			</div>

			<div class="images__image">
				<img class="image__billie" src="/images/billieHome.jpg" alt="Bilde av artisten Billie Eilish">
			</div>
		</section>

		<section class="frontpage__countdown">

		</section>
	</div>
</template>

<script>
	import Slideshow from '../components/Slideshow.vue';
	import Passes from '../components/Passes.vue';

    import sanityMixin from '../mixins/sanityMixin.js';
	import query from '../groq/home.groq?raw';

	export default {
		components: {
			Slideshow,
			Passes
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

	@keyframes transformIt {
		from {
			transform: translate(1100px);
		}
		to {
			transform: translate(0px);
		}
	}

	.lineup__artist {
		text-align: center;
		position: relative;
	}

	.lineup__artist:hover .artist__image {
		opacity: 1;
		color: var(--detailsBlue);
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

	.artist__name:hover {
		color: var(--detailsBlue);
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
		border: 2px solid var(--beige);
		padding: 10px;
		color: var(--beige);
		text-decoration: none;
		text-transform: uppercase;
	}

	.frontpage__intro {
		margin-top: 70px;
	}

	.intro__image {
		width: 380px;
		position: absolute;
		margin: 100px 0 0 170px;
		border-radius: 50%;
	}

	.intro__text {
		position: absolute;
		margin: 200px 0 0 800px;
		font-size: 3em;
		font-weight: bold;
	}

	.intro__text--description {
		width: 450px;
		position: absolute;
		text-align: center;
		margin: 320px 0 0 700px;
		font-size: 1.5em;
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
		border-right: 2px solid var(--beige);
		border-left: 2px solid var(--beige);
		padding: 40px;
		margin: 30px;
	}

	.pass__price {
		font-size: 1.7em;
		font-weight: bold;
	}

	.frontpage__images {
		display: flex;
		margin-top: 150px;
	}

	.image__doja-cat {
		width: 400px;
		margin: 0 60px 0 160px;
		box-shadow: 20px 20px var(--beige); 
	}

	.image__billie {
		width: 400px;
		margin: 30px 50px 0;
		box-shadow: 20px 20px var(--beige); 
	}
</style>