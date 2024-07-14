<template>
  <div class="container">
    <div>
      <h1 class="header_text">Hurrayyyy!! i really love you so much !</h1>
    </div>
    <div class="gif_container">
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif">
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 3000); // Redirect back to the main page after 3 seconds
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(190, 67, 77);
}

.header_text {
  font-family: 'Nunito';
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
}

.gif_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
