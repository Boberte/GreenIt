<template>
    <div>
        <span> {{text}} </span>
    </div>
</template>
<script>
export default {
    name: "Title",
    props : {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    div {
        font-weight: bold;
        font-size: 45px;
        margin: 50px 0 20px;
        text-transform: capitalize;
    }
</style>