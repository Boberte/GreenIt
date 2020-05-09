<template>
    <section class="welcome">
        <div class="title">Welcome!</div>
        <p>
            In this lovely site you can take a photo and replace all green
            background to any image you like! Enjoy:)
        </p>
    </section>
</template>
<script>
export default {
    name: "Welcome"
};
</script>
<style scoped lang="scss">
.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-top: 100px;
    opacity: 0;
    animation: slideUp 1s 0.5s 1 forwards;
    flex-basis: 80vh;

    .title {
        font-weight: bold;
        font-size: 45px;
    }

    p {
        width: 40%;
        font-size: 20px;
        line-height: 1.5;
    }

    @keyframes slideUp {
        100% {
            opacity: 1;
            margin: 0;
        }
    }
}

@media (max-width: 640px) {
    .welcome {
        p {
            width: 85%;
        }
    }
}
</style>
