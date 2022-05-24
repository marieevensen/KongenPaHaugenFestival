<template>
    <div class="contact">
        <h2 class="contact__title">CONTACT US</h2>

        <div class="contact__info">
            <span class="info__type">Mail</span> post@festival-name.no <br>
            <span class="info__type">Number</span> 922 66 299 <br>

            <h4 class="info__text">Also check out the links down below for our socials!</h4>
        </div>
    </div>
</template>

<style>
    .contact {
        padding: 60px 0 0 330px;
        background-color: var(--beige);
        color: var(--black);
    }

    .contact__title {
        margin-bottom: 40px;
    }

    .contact__info {
        width: 450px;
        margin-left: 80px;
        padding: 25px;
        border: 2px solid var(--black);
        font-size: 0.8em;
    }

    .info__type {
        font-weight: bold;
    }

    .info__text {
        margin-top: 50px;
        font-weight: lighter;
    }
</style>