<template>
    <section class="gallery">
        <div class="title">Gallery</div>
        <div class="images">
            <img src="@/assets/img/mountain1.jpg" />
            <img src="@/assets/img/mountain2.jpg" />
            <img src="@/assets/img/mountain3.jpg" />
            <img src="@/assets/img/mountain4.jpg" />
            <img src="@/assets/img/main.jpg" />
            <img src="@/assets/img/mountain1.jpg" />
        </div>
    </section>
</template>
<script>
export default {
    name: "Gallery"
};
</script>
<style scoped lang="scss">
.gallery {
    flex-basis: 80vh;
    flex-grow: 1;

    .title {
        font-weight: bold;
        font-size: 45px;
        margin: 50px 0 20px;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        margin: 10px 50px;

        img {
            height: 250px;
            flex-grow: 1;
            margin: 7px;
            box-shadow: 3px 2px #00000030;
            border-radius: 5px;

            &:nth-child(3n),
            &:nth-child(3n + 1) {
                flex-grow: 2;
            }
        }
    }
}
</style>
