<template>
	<div class="frontpage__slideshow">
		<button class="slideshow__button--left" @click="previousImage" aria-label="Go back in slideshow">
			<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.8375 28.0001C37.6881 27.9996 37.5405 28.0326 37.4055 28.0966C37.2705 28.1606 37.1516 28.2541 37.0575 28.3701L32.2275 34.3701C32.0804 34.549 32 34.7735 32 35.0051C32 35.2367 32.0804 35.4612 32.2275 35.6401L37.2275 41.6401C37.3972 41.8443 37.6411 41.9727 37.9056 41.9971C38.17 42.0215 38.4333 41.9398 38.6375 41.7701C38.8417 41.6004 38.9701 41.3564 38.9945 41.092C39.0189 40.8276 38.9372 40.5643 38.7675 40.3601L34.2975 35.0001L38.6175 29.6401C38.7398 29.4933 38.8174 29.3146 38.8413 29.125C38.8652 28.9355 38.8343 28.743 38.7522 28.5705C38.6702 28.398 38.5404 28.2526 38.3783 28.1515C38.2162 28.0504 38.0285 27.9979 37.8375 28.0001Z" fill="black"/>
                <circle cx="35" cy="35" r="34.5" stroke="black"/>
            </svg>
		</button>

		<figure>
			<img class="slideshow__image" :src="currentSlide.file" :alt="currentSlide.alt"/>
		
			<figcaption class="slideshow__caption">{{ currentSlide.name }}</figcaption>
		</figure>
			
		<button class="slideshow__button--right" @click="nextImage" aria-label="Go forward in slideshow">
			<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.1606 42.0013C33.31 42.0018 33.4576 41.9688 33.5925 41.9048C33.7275 41.8407 33.8464 41.7473 33.9406 41.6313L38.7706 35.6313C38.9176 35.4523 38.998 35.2279 38.998 34.9963C38.998 34.7646 38.9176 34.5402 38.7706 34.3613L33.7706 28.3613C33.6008 28.157 33.3569 28.0286 33.0925 28.0042C32.8281 27.9799 32.5648 28.0615 32.3606 28.2313C32.1563 28.401 32.0279 28.6449 32.0035 28.9093C31.9792 29.1738 32.0608 29.437 32.2306 29.6413L36.7006 35.0013L32.3806 40.3613C32.2583 40.508 32.1806 40.6868 32.1567 40.8763C32.1328 41.0659 32.1638 41.2583 32.2458 41.4308C32.3279 41.6034 32.4576 41.7488 32.6197 41.8499C32.7818 41.9509 32.9695 42.0035 33.1606 42.0013Z" fill="black"/>
                <circle cx="35" cy="35" r="34.5" stroke="black"/>
            </svg>
		</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				slides: [
                    {
						name: 'Billie Eilish',
						file: "/images/billieSlide.jpg",
						alt: "Picture of the artist Billie Eilish"
					},
					{
						name: 'Ariana Grande',
						file: "/images/arianaSlide.jpg",
						alt: "Picture of the artist Ariana Grande"
					},
					{
						name: 'Melanie Martinez',
						file: "/images/melanieSlide.jpg",
						alt: "Picture of the artist Melanie Martinez"
					},
					{
						name: 'Doja Cat',
						file: "/images/dojaSlide.jpeg",
						alt: "Picture of the artist Doja Cat"
					},
					{
						name: 'SZA',
						file: "/images/szaSlide.jpg",
						alt: "Picture of the artist SZA"
					},
				]
			}
		},

		mounted() {
			window.setInterval(() => {
				this.nextImage()
			}, 4000)
		},

		computed: {
			currentSlide() {
				return this.slides[this.index];
			}
		},

		methods: {
			previousImage() {
				this.index = this.index === 0 ? this.slides.length - 1 : this.index - 1;
			},

			nextImage() {
				this.index = this.index === this.slides.length - 1 ? 0 : this.index + 1;
			}
		}
	};
</script>

<!-- Kommenterer script
	1 Lager en interval, som bytter bilde etter 4 sekunder
	2 Currentslide returnerer riktig index
	3 Lager to methodsfunksjoner
	3.1 En for å bla bakover, index minus 1, eller hvis index er 0 så blar den til siste bilde i array 
	3.2 En annen for å bla fremover, index pluss 1, eller hvis index er er sist i array så blar den til index 0
-->

<style>
	.frontpage__slideshow {
		width: 80vw;
		position: relative;
		margin: 150px auto 0;
	}

	@media screen and (max-width: 800px) {
		.frontpage__slideshow {
			width: 95vw;
			margin-top: 60px;
		}
	}

    .slideshow__button--left {
        position: absolute;
        top: 45%;
		left: 0;
        margin-left: 20px;
    }

	.slideshow__caption {
		position: absolute;
		bottom: 0;
		left: 10;
		font-size: 2em;
		color: var(--foregroundDark);
	}

	@media screen and (max-width: 800px) {
		.slideshow__caption {
			font-size: 1.1em;
		}
	}

	.slideshow__image {
		width: 100%;
	}

    .slideshow__button--right {
        position: absolute;
        top: 45%;
		right: 0;
        margin-right: 20px;
    }

	@media screen and (max-width: 800px) {
		.slideshow__button--left, .slideshow__button--right {
			display: none;
		}
	}
</style>
