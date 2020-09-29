<template>
  <div id="app" class="text-dark">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;500;600;700;800&display=swap');
body {
  font-family: 'Baloo Tammudu 2', cursive;
}
.marker {
  background-size: cover;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(51, 165, 50);
  cursor: pointer;
  box-shadow: 0 0 0 #d30b2a;
  animation: pulse 2s infinite;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(15, 157, 88, 0.7);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(15, 157, 88, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(15, 157, 88, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(15, 157, 88, 0.8);
    box-shadow: 0 0 0 0 rgba(15, 157, 88, 0.8);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(15, 157, 88, 0);
      box-shadow: 0 0 0 10px rgba(15, 157, 88, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(15, 157, 88, 0);
      box-shadow: 0 0 0 0 rgba(15, 157, 88, 0);
  }
}
</style>
