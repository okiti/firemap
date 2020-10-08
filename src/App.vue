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
.avatar {
  width: 80px;
  height: 80px;
}
.mapboxgl-popup-content {
  border-radius: 7px;
}
.mapboxgl-popup {
  width: 280px;
  border-radius: 7px;
}
.tel-holder {
  width: 50px; height: 50px;
  margin-top: 10px;
  @apply bg-gray-300;
  i {
    @apply text-gray-600;
  }
}
.status {
  font-size: 40px;
  width: 20px; height: 20px;
  border-radius: 50%;
  display: flex;
}
.st-true {
  @apply text-green-500;
}
.marker {
  background-size: cover;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgb(15, 157, 88);
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
