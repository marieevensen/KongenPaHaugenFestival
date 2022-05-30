<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink class="" :to="{ name: 'home' }">
                <img class="logo__image" src="/images/logo.png" alt="Logo, click here to go to the homepage">
            </RouterLink>

            <div>
                <p class="logo__date">1. - 3. july</p>
                <p class="logo__date">St. hanshaugen</p>
            </div>
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
        justify-content: space-between;
    }

    @media screen and (max-width: 800px) {
        .header {
            flex-direction: column;
            height: 12vh;
            justify-content: center;
            text-align: center;
        }
    }

    .header__logo {
        display: flex;
        text-align: left;
        font-size: 0.8em;
        color: var(--foregroundDark);
        font-weight: bold;
    }

    @media screen and (max-width: 800px) {
        .header__logo {
            display: inline;
            text-align: center;
        }
    }

    .logo__image {
        width: 110px;
        margin: 6px 15px 0 25px;
    }

    @media screen and (max-width: 800px) {
        .logo__image {
            width: 90px;
        }
    }

    @media screen and (max-width: 800px) {
        .logo__date {
            display: none;
        }
    }

    .header__navigation {
        margin-top: 12px;
    }

    @media screen and (max-width: 800px) {
        .header__navigation {
            margin-top: 3px;
            font-size: 0.7em;
            font-weight: bold;
        }
    }

    .navigation__link {
        margin: 0 15px;
        text-decoration: none;
        color: var(--foregroundDark);
    }

    @media screen and (max-width: 800px) {
        .navigation__link {
            margin: 0 9px;
        }
    }

    .navigation__link:hover {
        color: var(--foregroundLight);
    }
</style>