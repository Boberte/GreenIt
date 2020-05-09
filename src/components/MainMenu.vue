<template>
    <nav>
        <router-link to="/" class="home-btn">☘</router-link>
        <router-link to="/About" class="nav-link">About</router-link>
        <router-link to="/Gallery" class="nav-link">Gallery</router-link>
        <router-link to="/GreenScreenTool" class="nav-link">Green It</router-link>
    </nav>
</template>

<script>
export default {
    name: "MainMenu"
};
</script>

<style scoped lang="scss">
nav {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 30px;
    flex-basis: 60px;

    .home-btn {
        text-decoration: none;
        font-size: 45px;
        width: 57px;
        height: 55px;
        border-radius: 50%;
        background: #bdef91;
        color: #2c3e50;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px 0 0;

        &:hover {
            background: #aaea71;
        }
    }

    .nav-link {
        text-decoration: none;
        color: rgb(14, 192, 192);
        font-size: 18px;
        font-family: Helvetica;
        margin: 5px 10px;
        transition: transform 0.3s cubic-bezier(0.72, 0.33, 0.34, 1.56);
        padding: 5px 10px;
        background: #ebf9f5;
        border-radius: 15px;
        border-bottom: 3px solid #b5d6d6;

        &:active {
            border-bottom: 1px solid #b5d6d6;
        }

        &:hover {
            transform: scale(1.02, 1.02);
            color: rgb(24, 152, 152);
        }
    }
}
@media (max-width: 650px) {
    nav {
        flex-direction: column;
        align-items: center;
        flex-basis: 140px;

        .home-btn,
        .nav-link {
            flex-basis: 21px;
            margin: 4px 0;
        }
    }
}
</style>
