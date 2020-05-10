<template>
    <div class="slide-up">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "SlideUpContainer"
}
</script>
<style lang="scss" scoped>
    .slide-up {
        margin-top: 100px;
        opacity: 0;
        animation: slideUp 1s 0.5s 1 forwards;
    }

    @keyframes slideUp {
        100% {
            opacity: 1;
            margin: 0;
        }
    }
</style>