<template>
    <main class="about">
        <div class="about__text">
            <h1 class="text__title">ABOUT THE FESTIVAL</h1>

            <p class="text__info">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </p>
        </div>

        <figure class="about__image" >
            <img src="/images/about.jpg" alt="Picture of the festival">
        </figure>
    </main>
</template>

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
            width: 200px;
        }
    }
</style>