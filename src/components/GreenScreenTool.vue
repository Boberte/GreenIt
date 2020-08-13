<template>
  <div>
    <SlideUpContainer>
      <Title text="GreenIt" />
      <BackgroundSelector @select="updateBackground" />
      <img ref="renderedImage" class="hidden" />
      <canvas ref="striptedImageCanvas" class="hidden" />
      <canvas ref="videoStreamCanvas" class="hidden" />
      <canvas ref="resultCanvas" />
      <video
        @play="streamToCanvas"
        @loadedmetadata="configureStream"
        ref="video"
        autoplay
        class="hidden"
      ></video>
      <CaptureButton @click="capture" />
    </SlideUpContainer>
  </div>
</template>
<script>
import Title from "./Title.vue";
import SlideUpContainer from "./SlideUpContainer.vue";
import CaptureButton from "./CaptureButton";
import BackgroundSelector from "./BackgroundSelector";
import { saveImage } from "../services/api";

export default {
  name: "GreenScreenTool",
  components: {
    Title,
    SlideUpContainer,
    CaptureButton,
    BackgroundSelector,
  },
  data() {
    return {
      videoStreamCtx: null,
      stripedImgCtx: null,
      resultCtx: null,
      streamInterval: null,
      backgroundImage: null,
    };
  },
  async mounted() {
    this.videoStreamCtx = this.$refs.videoStreamCanvas.getContext("2d");
    this.stripedImgCtx = this.$refs.striptedImageCanvas.getContext("2d");
    this.resultCtx = this.$refs.resultCanvas.getContext("2d");
    if (navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
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
      this.$refs.videoStreamCanvas.width = this.$refs.striptedImageCanvas.width = this.$refs.resultCanvas.width = this.$refs.striptedImageCanvas.width = this.$refs.renderedImage.width =
        this.$refs.video.clientWidth * window.devicePixelRatio;
      this.$refs.videoStreamCanvas.height = this.$refs.striptedImageCanvas.height = this.$refs.resultCanvas.height = this.$refs.striptedImageCanvas.height = this.$refs.renderedImage.height =
        this.$refs.video.clientHeight * window.devicePixelRatio;
    },
    streamToCanvas() {
      this.streamInterval = setInterval(() => {
        this.videoStreamCtx.drawImage(this.$refs.video, 0, 0);
        const imageData = this.videoStreamCtx.getImageData(
          0,
          0,
          this.$refs.videoStreamCanvas.width,
          this.$refs.videoStreamCanvas.height
        );

        let r, g, b;
        for (let i = 0; i < imageData.data.length; i++) {
          r = imageData.data[i * 4];
          g = imageData.data[i * 4 + 1];
          b = imageData.data[i * 4 + 2];
          if (
            g > 60 &&
            ((g - r > 15 && g - b > 15 && b > 35 && r > 35) || r + b < g)
          ) {
            imageData.data[i * 4 + 3] = 0;
          }
          if (g > 50 && g - r > 5 && g - b > 5 && b > 35 && r > 35) {
            imageData.data[i * 4 + 3] = 0.4;
          }
        }

        this.stripedImgCtx.putImageData(imageData, 0, 0);
        const img = this.$refs.striptedImageCanvas.toDataURL("image/png");
        this.$refs.renderedImage.src = img;
        this.$refs.renderedImage.onload = () => {
          this.backgroundImage &&  this.$refs.videoStreamCanvas && 
            this.resultCtx.drawImage(
              this.backgroundImage,
              0,
              0,
              this.$refs.videoStreamCanvas.width,
              this.$refs.videoStreamCanvas.height
            );
          this.$refs.videoStreamCanvas &&
            this.resultCtx.drawImage(
              this.$refs.renderedImage,
              0,
              0,
              this.$refs.videoStreamCanvas.width,
              this.$refs.videoStreamCanvas.height
            );
        };
      }, 100);
    },
    async capture() {
      const img = this.$refs.resultCanvas.toDataURL("image/png");
      try {
        const res = await saveImage(img);
        if (res.status === 200) {
          console.log(res.data.fileName);
        } else {
          // TODO
        }
      } catch (err) {
        // TODO
      }
    },
    updateBackground(image) {
      this.backgroundImage = image;
    },
  },
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
  border-radius: 1rem;
}
</style>
