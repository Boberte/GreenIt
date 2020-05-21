<template>
  <section class="gallery">
    <SlideUpContainer>
      <Title text="gallery" />
      <div class="images">
        <div class="img-container">
          <img src="@/assets/img/mountain1.jpg" />
          <div><span>mountain1</span></div>
        </div>
        <div class="img-container">
          <img src="@/assets/img/mountain2.jpg" />
          <div><span>mountain2</span></div>
        </div>
        <div class="img-container">
          <img src="@/assets/img/mountain3.jpg" />
          <div><span>mountain3</span></div>
        </div>
        <div class="img-container">
          <img src="@/assets/img/mountain4.jpg" />
          <div><span>mountain4</span></div>
        </div>
        <div class="img-container">
          <img src="@/assets/img/main.jpg" />
          <div><span>main</span></div>
        </div>
        <div class="img-container">
          <img src="@/assets/img/mountain1.jpg" />
          <div><span>mountain1</span></div>
        </div>
      </div>
    </SlideUpContainer>
  </section>
</template>
<script>
import Title from "./Title.vue";
import SlideUpContainer from "./SlideUpContainer.vue";

export default {
  name: "Gallery",
  components: {
    Title,
    SlideUpContainer
  }
};
</script>
<style scoped lang="scss">
.gallery {
  flex-basis: 80vh;
  flex-grow: 1;

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: 10px 50px;

    .img-container {
      height: 250px;
      flex-grow: 1;
      box-shadow: 3px 2px #00000030;
      border-radius: 5px;
      margin: 7px;
      flex-basis: 30%;
      overflow: hidden;
      position: relative;

      &:nth-child(3n),
      &:nth-child(3n + 1) {
        flex-grow: 2;
        flex-basis: 40%;
      }

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
        background: linear-gradient(0deg, #ffffff9e 15%, transparent 50%);
        opacity: 0;
        color: #2c3e50;
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
              margin-top:0;
          }
      }
    }
  }
}
</style>
