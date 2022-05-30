<template>
	<RouterLink class="announcement-bar" aria-label="Tickets on sale from 6.june to 12.june, buy now, pay later" :to="{ name: 'tickets' }" @mouseenter='announcementBarAnimationToggle' @mouseleave='announcementBarAnimationToggle'> 
		<h4 class='announcement-bar__message' :class='{pause: !this.announcementBar.playing}'>{{ announcementBar.message }}</h4>
	</RouterLink>
</template>

<script>
	export default {
		data() {
			return {
				announcementBar: {
					message: '!!! TICKETS ON SALE FROM 6.JUNE TO 12.JUNE !!! BUY NOW, PAY LATER !!!',
					playing: true,
				}
			}
		},
		
		methods: {
			announcementBarAnimationToggle() {
				this.announcementBar.playing = !this.announcementBar.playing
			},
		}
	}
</script>


<style>
	.announcement-bar {
		width: 100%;
		height: 5vh;
		display: flex;
		align-items: center;
		background: var(--backgroundDark);
		overflow: hidden;
		white-space: nowrap;
		text-decoration: none;
	}

	@media screen and (max-width: 800px) {
		.announcement-bar {
			height: 2vh;
			font-size: 0.6em;
		}
	}
	
	.announcement-bar:hover {
		background-color: var(--backgroundLight);
	}

	.announcement-bar__message {
		padding-left: 100%;
		font-family: 'JetBrainsMono', 'Arial Narrow', Arial, sans-serif;
		font-weight: bold;
		animation: scroll 20s linear infinite;
        color: var(--foregroundLight);
	}

	.pause {
		animation-play-state: paused;
		color: var(--foregroundDark);
	}

	@keyframes scroll {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}
</style>