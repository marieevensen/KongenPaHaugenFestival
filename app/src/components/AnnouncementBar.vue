<template>
	<div class='announcement-bar' @mouseenter='announcementBarAnimationToggle' @mouseleave='announcementBarAnimationToggle'>
		<h4 class='announcement-bar__message' :class='{pause: !this.announcementBar.playing}'>{{ announcementBar.message }}</h4>
	</div>
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
		display: flex;
		align-items: center;
		width: 100%;
		height: 5vh;
		background: black;
		overflow: hidden;
		white-space: nowrap;
	}

	.announcement-bar__message {
		font-family: 'JetBrainsMono', 'Arial Narrow', Arial, sans-serif;
		font-weight: bold;
		font-size: var(--font-size);
		animation: scroll 20s linear infinite;
		padding-left: 100%;
        color: #F9F3DF;
	}

	.pause {
		animation-play-state: paused;
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