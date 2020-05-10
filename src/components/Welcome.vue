<template>
    <section class="welcome">
        <SlideUpContainer class="slide-up">
            <Title text="welcome!" />
            <p>
                In this lovely site you can take a photo and replace all green
                background to any image you like! Enjoy:)
            </p>
        </SlideUpContainer>
    </section>
</template>
<script>
import Title from "./Title.vue";
import SlideUpContainer from './SlideUpContainer.vue';

export default {
    name: "Welcome",
    components: {
        Title,
        SlideUpContainer
    }
};
</script>
<style scoped lang="scss">
.welcome {
    flex-grow: 1;
    flex-basis: 80vh;
    display: flex;

    .slide-up{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        p {
            width: 40%;
            font-size: 20px;
            line-height: 1.5;
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
