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
        padding: 60px 0 0 330px;
        background-color: var(--backgroundLight);
        color: var(--foregroundDark);
    }

    .contact__title {
        margin-bottom: 40px;
    }

    .contact__info {
        width: 450px;
        margin-left: 80px;
        padding: 25px;
        border: 2px solid var(--foregroundDark);
        font-size: 0.8em;
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