<template>
    <div>
        <SlideUpContainer>
            <Title text="GreenIt" />
            <canvas ref="canvas" />
        </SlideUpContainer>
    </div>
</template>
<script>
import Title from './Title.vue';
import SlideUpContainer from './SlideUpContainer.vue';

export default {
    name: "GreenScreenTool",
    components: {
        Title,
        SlideUpContainer
    }
};
</script>
<style scoped lang="scss"></style>
