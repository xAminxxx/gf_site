<template>
  <div id="app">
    <div class="container">
      <div>
        <h1 class="header_text">Do you love me?</h1>
        <h1 class="header_text">Be honest?</h1>
      </div>
      <div class="gif_container">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration">
      </div>
      <div class="buttons">
        <button class="btn" id="yesButton" @click="nextPage">Yes</button>
        <button ref="noButton" class="btn" id="noButton" @mouseover="moveButton" @click="moveButton">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$router.push('/date-ideas');
    },
    moveButton() {
      let button = this.$refs.noButton;
      if (button) {
        let x = Math.random() * (window.innerWidth - button.offsetWidth);
        let y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: rgb(190, 67, 77);
  position: relative;
}

.header_text {
  font-family: 'Nunito';
  font-size: 40px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
}

.gif_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  background-color: #ffffff;
  color: rgb(233, 48, 48);
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

#yesButton {
  margin-right: 150px;
}

#noButton {
  position: absolute;
  transition: left 0.5s, top 0.5s;
}

@media only screen and (max-width: 320px) and (max-height: 568px) {
  .container {
    height: 100vh;
  }

  .header_text {
    font-size: 20px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 10px 18px;
    font-size: 12px;
  }
}

@media only screen and (max-width: 414px) and (max-height: 736px) {
  .container {
    height: 90vh;
  }

  .header_text {
    font-size: 28px;
  }

  img {
    height: 60vh;
  }

  .btn {
    padding: 15px 25px;
    font-size: 14px;
  }
}
</style>
