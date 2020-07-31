<template>
  <div @click="$emit('click')">
    <CameraIcon />
  </div>
</template>
<script>
import CameraIcon from "./icons/CameraIcon";

export default {
  name: "CaptureButton",
  components: {
    CameraIcon
  }
};
</script>

<style lang="scss" scoped>
div {
  background: #536c85;
  border-radius: 16px;
  width: 60px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px #152b41;
  margin: auto;
  margin-top: 10px;
  transition: all 0.5s;

  &:hover {
    background: #627c96;
  }

  &:active {
    box-shadow: 0px 2px #152b41;
    background: #536c85;
  }

  svg {
    width: 30px;
    height: 30px;
  }
}
</style>