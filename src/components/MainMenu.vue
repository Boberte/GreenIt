<template>
  <nav>
    <a href="#">About</a>
    <a href="#">Gallery</a>
    <a href="#">Green It!</a>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 30px;
  flex-basis: 60px;
}

nav a {
  text-decoration: none;
  color: rgb(14, 192, 192);
  font-size: 18px;
  font-family: Helvetica;
  margin: 5px 10px;
  transition: transform .3s cubic-bezier(.72,.33,.34,1.56);
  padding: 5px 10px;
  background: #ebf9f5;
  border-radius: 15px;
  border-bottom: 3px solid #b5d6d6;
}

nav a:active{
  border-bottom: 1px solid #b5d6d6;
}

nav a:hover {
  transform: scale(1.02, 1.02);
  color: rgb(24, 152, 152);
}

@media (max-width:650px) {
  nav {
    flex-direction: column;
    align-items: center;
    flex-basis: 140px;
  }

  nav a {
    flex-basis: 21px;
    margin: 4px 0;
  }
}

</style>
