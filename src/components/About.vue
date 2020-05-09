<template>
    <section class="about">
        <div class="title">About</div>
        <p class="instructions">
            Instructions:<br />
            Connect a web camera.<br />
            Stand in front of a green surface.<br />
            Make the sillest face you can,<br />
            And have fun:)<br />
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
export default {
    name: "About",
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

    .title {
        font-weight: bold;
        font-size: 45px;
    }

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
