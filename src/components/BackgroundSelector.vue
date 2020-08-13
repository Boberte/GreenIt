<template>
  <div class="images">
    <FramedImage
      v-for="(img, index) in images"
      :key="index"
      :src="img.path"
      :text="img.name"
      class="img-container"
      ref="selectedImage"
      @click="selectImg(img, index)"
    />
  </div>
</template>
<script>
import FramedImage from "./FramedImage.vue";
import { getBackgrouds } from "../services/api";

export default {
  name: "BackgroundSelector",
  components: {
    FramedImage
  },
  data() {
    return {
      images: [],
      selected: null
    };
  },
  async created() {
    this.images = await getBackgrouds();
  },
  methods: {
    selectImg(img, index){
      this.selected = img;
      this.$emit('select', this.$refs.selectedImage[index].$el.getElementsByTagName('img')[0]);
    }
  }
};
</script>
<style scoped lang="scss">
.images {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px 50px;
}
</style>
