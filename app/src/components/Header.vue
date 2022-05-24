<template>
    <header class="header">
        <RouterLink class="header__link" :to="{ name: 'home' }">home</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'about' }">ABOUT</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'program' }">PROGRAM</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'artists' }">ARTISTS</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'tickets' }">TICKETS</RouterLink>
        <RouterLink class="header__link" :to="{ name: 'contact' }">CONTACT</RouterLink>
    </header>
</template>

<style>
    .header {
        background-color: #00BEA7;
        height: 10vh;
        text-align: right;
        padding-top: 15px;
    }

    .header__link {
        color: black;
        margin: 0px 25px 0px 0px;
        text-decoration: none;
        font-size: 0.9em;
    }

    .header__link:hover {
        color: white;
    }
</style>