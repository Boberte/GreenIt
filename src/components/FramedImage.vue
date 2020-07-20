<template>
  <div class="img-container">
    <img :src="src" />
    <div v-if="text">
      <span>{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "FramedImage",
  props: {
    src: {
      required: true,
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>
<style scoped lang="scss">
.img-container {
  height: 250px;
  flex-grow: 1;
  box-shadow: 3px 2px #00000030;
  border-radius: 5px;
  margin: 7px;
  flex-basis: 30%;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in;
  }

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(0deg, #1f3041 15%, transparent 50%);
    opacity: 0;
    color: #eaf8f4;
    transition: all 0.5s ease-in;
    margin-top: 50px;

    span {
      padding: 20px;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
      opacity: 0.7;
      filter: grayscale(0.4);
    }

    div {
      opacity: 1;
      margin-top: 0;
    }
  }
}
</style>
