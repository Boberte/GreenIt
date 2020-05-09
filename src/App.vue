<template>
  <div id="app">
    <MainMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  color: #ebf9f5;
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
