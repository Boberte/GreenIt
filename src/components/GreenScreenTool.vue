<template>
  <div>
    <SlideUpContainer>
      <Title text="GreenIt" />
      <canvas ref="resCanvas" />
      <canvas ref="canvas" class="hidden" />
      <video
        @play="streamToCanvas"
        @loadedmetadata="configureStream"
        ref="video"
        autoplay
        class="hidden"
      ></video>
    </SlideUpContainer>
  </div>
</template>
<script>
import Title from "./Title.vue";
import SlideUpContainer from "./SlideUpContainer.vue";

export default {
  name: "GreenScreenTool",
  components: {
    Title,
    SlideUpContainer
  },
  data() {
    return {
      ctx: null,
      resCtx: null,
      streamInterval: null
    };
  },
  async mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.resCtx = this.$refs.resCanvas.getContext("2d");
    if (navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        this.$refs.video.srcObject = stream;
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.streamInterval);
  },
  methods: {
    configureStream() {
      this.$refs.canvas.width = this.$refs.resCanvas.width =
        this.$refs.video.clientWidth * window.devicePixelRatio;
      this.$refs.canvas.height = this.$refs.resCanvas.height =
        this.$refs.video.clientHeight * window.devicePixelRatio;
    },
    streamToCanvas() {
      this.streamInterval = setInterval(() => {
        this.ctx.drawImage(this.$refs.video, 0, 0);
        const imageData = this.ctx.getImageData(
          0,
          0,
          this.$refs.canvas.width,
          this.$refs.canvas.height
        );

        let r, g, b;
        for (let i = 0; i < imageData.data.length; i++) {
          r = imageData.data[i * 4];
          g = imageData.data[i * 4 + 1];
          b = imageData.data[i * 4 + 2];
          if (
            g > 60 && ((g - r > 15 && g - b > 15 && b > 35 && r > 35) ||
            r + b < g)
          ) {
            imageData.data[i * 4 + 3] = 0;
          }
          if (g > 50 && g - r > 5 && g - b > 5 && b > 35 && r > 35) {
            imageData.data[i * 4 + 3] = 0.4;
          }
        }
        this.resCtx.putImageData(imageData, 0, 0);
      }, 100);
    }
  }
};
</script>
<style scoped lang="scss">
.hidden {
  visibility: hidden;
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
}

canvas {
  background: rgb(255, 251, 192);
}
</style>
