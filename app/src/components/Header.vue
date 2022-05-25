<template>
    <header class="header">
        <div class="header__name">
            <RouterLink class="" :to="{ name: 'home' }">
                <img class="link__logo" src="/images/logo.png" alt="">
            </RouterLink>
                1. - 3. july <br>
                St. hanshaugen
        </div>
        <RouterLink class="header__link" :to="{ name: 'about' }">ABOUT</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'program' }">PROGRAM</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'artists' }">ARTISTS</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'tickets' }">TICKETS</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'contact' }">CONTACT</RouterLink>
    </header>
</template>

<style>
    .header {
        display: flex;
        background-color: var(--detailsBlue);
        height: 10vh;
        text-align: right;
    }

    .header__name {
        display: flex;
        text-align: left;
        font-size: 0.8em;
        color: var(--black);
        font-weight: bold;
        margin-right: 530px;
    }

    .header__link {
        color: var(--black);
        margin: 14px 25px 0px 0px;
        text-decoration: none;
        font-size: 0.9em;
    }

    .header__link:hover {
        color: var(--beige);
    }

    .link__logo {
        width: 110px;
        margin: 6px 15px 0 25px;
    }
</style>