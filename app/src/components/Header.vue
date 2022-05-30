<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink class="" :to="{ name: 'home' }">
                <img class="logo__image" src="/images/logo.png" alt="Logo, click here to go to the homepage">
            </RouterLink>

                1. - 3. july <br>
                St. hanshaugen
        </div>

        <nav class="header__navigation">
            <RouterLink class="navigation__link" :to="{ name: 'about' }">ABOUT</RouterLink>
            
            <RouterLink class="navigation__link" :to="{ name: 'program' }">PROGRAM</RouterLink>
            
            <RouterLink class="navigation__link" :to="{ name: 'artists' }">ARTISTS</RouterLink>
            
            <RouterLink class="navigation__link" :to="{ name: 'tickets' }">TICKETS</RouterLink>
            
            <RouterLink class="navigation__link" :to="{ name: 'contact' }">CONTACT</RouterLink>
        </nav>
    </header>
</template>

<style>
    .header {
        display: flex;
        background-color: var(--details);
        height: 10vh;
        text-align: right;
    }

    .header__logo {
        display: flex;
        text-align: left;
        font-size: 0.8em;
        color: var(--foregroundDark);
        font-weight: bold;
        margin-right: 515px;
    }

    .logo__image {
        width: 110px;
        margin: 6px 15px 0 25px;
    }

    .header__navigation {
        margin-top: 11px;
    }

    .navigation__link {
        color: var(--foregroundDark);
        margin: 0 20px 0 0;
        text-decoration: none;
    }

    .navigation__link:hover {
        color: var(--foregroundLight);
    }
</style>