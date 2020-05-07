<template>
  <div id="app">
    <MainMenu/>
    <Welcome/>
    <About/>
    <Gallery/>
    <GreenScreenTool/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import Welcome from './components/Welcome.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';
import GreenScreenTool from './components/GreenScreenTool.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
    Welcome,
    About,
    Gallery,
    GreenScreenTool
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex; 
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
}

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #465b70;
  }

  ::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 5px;
      &:hover {
        background:#1f3041;
      }
  }

body {
  background: #d8ece7;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
}
</style>
