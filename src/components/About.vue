<template>
    <section class="about">
        <Title text="about" />
        <p class="instructions">
            Instructions:<br />
            Connect a web camera.<br />
            Stand in front of a green surface.<br />
            Make the sillest face you can,<br />
            and have fun:)<br />
        </p>
        <p class="conditions">
            This site is for personal use only.
        </p>
        <p class="credits">
            Built by Boberte.
        </p>
    </section>
</template>
<script>
import Title from './Title.vue';
export default {
    name: "About",
    components: {
        Title
    }
};
</script>
<style scoped lang="scss">
.about {
    flex-basis: 80vh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .instructions {
        font-size: 22px;
        text-align: left;
    }

    .conditions,
    .credits {
        font-size: 15px;
        opacity: 0.6;
    }
}
</style>
