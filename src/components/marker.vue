<template>
  <div class="flex column nowrap call">
     <span class="flex justify-content-center align-items-center pulse">
       <a href="tel:08030732001">
         <i class='call-icon material-icons'>call</i>
       </a>
     </span>
     <span class="flex justify-content-center align-items-center pulse-w">
       <a href="https://wa.me/+2348030732001">
         <img class="mini-svg" src="../assets/whatsapp-brands.svg" alt="">
       </a>
     </span>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'marker',
};
</script>
<style>
.mini-svg {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
.call-icon {
    color: #ffffff;
}
.call {
    position: fixed;
  right: 0;
  bottom: 0;

}
  .pulse {
  margin:20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d30b2a;
  cursor: pointer;
  box-shadow: 0 0 0 #d30b2a;
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}
  .pulse-w {
  margin:20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(37, 211, 102);
  cursor: pointer;
  box-shadow: 0 0 0 rgba(37, 211, 102, 0.7);
  animation: pulse-w 2s infinite;
}
.pulse-w:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(211, 11, 42, 0.7);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
    box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(211, 11, 42, 0.7);
      box-shadow: 0 0 0 10px rgba(211, 11, 42, 0.7);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
      box-shadow: 0 0 0 0 rgba(211, 11, 42, 0.7);
  }
}
</style>
