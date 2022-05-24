<template>
    <div class="about">
            <span class="info__title">ABOUT THE FESTIVAL</span>
            
            <div class="info__text">
                <div class="text__description">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                </div>
                
                <img class="text__image" src="/images/about.jpg" alt="">
            </div>
    </div>
</template>

<style>
    .about {
        margin: 60px 0 0 200px;
    }

    .info__title {
        margin-left: 100px;
        font-size: 2em;
        font-weight: bold;
    }

    .info__text {
       display: flex;
    }

    .text__description {
        width: 500px;
        margin-right: 40px;
    }

    .text__image {
        width: 300px;
    }

</style>