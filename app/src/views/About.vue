<template>
    <main class="about">
        <h1 class="about__title">ABOUT THE FESTIVAL</h1>
        
        <div class="about__description">
            <p class="description__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </p>
                
            <img class="description__image" src="/images/about.jpg" alt="Picture of the festival">
        </div>
    </main>
</template>

<style>
    .about {
        margin: 60px 0 0 200px;
    }

    .about__title {
        margin-left: 100px;
        font-weight: bold;
    }

    .about__description {
       display: flex;
       margin-top: 20px;
    }

    .description__text {
        width: 500px;
        margin-right: 40px;
    }

    .description__image {
        width: 300px;
    }
</style>