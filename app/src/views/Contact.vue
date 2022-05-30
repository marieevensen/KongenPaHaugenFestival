<template>
    <main class="contact">
        <h1 class="contact__title">CONTACT US</h1>

        <div class="contact__info">
            <p><span class="info__type">Mail</span> post@festival-name.no</p>
            <p><span class="info__type">Number</span> 922 66 299</p>

            <p class="info__text">Also check out the links down below for our socials!</p>
        </div>
    </main>
</template>

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
    }

    @media screen and (max-width: 800px) {
        .contact__title {
            margin-bottom: 10px;
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
            width: 250px;
            font-size: 0.7em;
        }
    }

    .info__type {
        font-weight: bold;
    }

    .info__text {
        margin-top: 50px;
        font-weight: lighter;
        font-size: 1.1em;
    }
</style>