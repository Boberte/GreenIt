<template>
    <section class="welcome">
        <Title text="welcome!" />
        <p>
            In this lovely site you can take a photo and replace all green
            background to any image you like! Enjoy:)
        </p>
    </section>
</template>
<script>
import Title from "./Title.vue";
export default {
    name: "Welcome",
    components: {
        Title
    }
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
