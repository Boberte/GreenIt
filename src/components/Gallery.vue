<template>
  <section class="gallery">
    <SlideUpContainer>
      <Title text="gallery" />
      <div class="images">
        <FramedImage v-for="(img, index) in images" :key="index" :src="img.path" :text="img.name" class="img-container"/>
      </div>
    </SlideUpContainer>
  </section>
</template>
<script>
import Title from "./Title.vue";
import SlideUpContainer from "./SlideUpContainer.vue";
import FramedImage from "./FramedImage.vue";
import {getGallery} from "../services/api";

export default {
  name: "Gallery",
  components: {
    Title,
    SlideUpContainer,
    FramedImage
  },
  data(){
    return {
      images: []
    };
  },
  async created(){
    this.images = await getGallery();
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
      &:nth-child(3n),
      &:nth-child(3n + 1) {
        flex-grow: 2;
        flex-basis: 40%;
      }      
    }
  }
}
</style>
