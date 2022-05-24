<template>
    <header class="header">
        <div>
            <RouterLink class="header__link" :to="{ name: 'home' }">
            home
            </RouterLink>
            <!-- <div>
                1. - 3. july
                St. hanshaugen
            </div> -->
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
        padding-top: 15px;
    }

    .header__link {
        color: var(--black);
        margin: 0px 25px 0px 0px;
        text-decoration: none;
        font-size: 0.9em;
    }

    .header__link:hover {
        color: var(--beige);
    }
</style>