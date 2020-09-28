<template>
  <div class="flex flex-row flex-no-wrap w-full h-screen">
    <div class="flex flex-col h-screen side-bar">
      <!-- <div class="flex flex-col justify-center items-center w-full py-16">
        <img class="avatar" src="../assets/img/avatar.png" alt="">
        <p class="pt-4 font-bold uppercase tracking-widest">Open Source</p>
        <div class="flex">
          <a class="text-sm rounded-full flex justify-center items-center more-button"
            href="">More</a>
        </div>
      </div> -->
      <div class="mt-6">
        <nav class="flex w-full items-center flex-col">
          <a class="flex flex-no-wrap items-center" href="">
            <i class="uil uil-desktop-cloud-alt text-2xl"></i>
          </a>
          <a class="flex flex-no-wrap items-center" href="">
            <i class="uil uil-bell text-2xl"></i>
          </a>
          <a class="flex flex-no-wrap items-center" href="">
            <i class="uil uil-cog text-2xl"></i>
          </a>
        </nav>
      </div>
    </div>
    <div>
      <maps />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.side-bar {
  width: 50px;
  background: #FFF;
  nav {
    a {
      @apply px-1;
      @apply pt-2;
      i::after {
        margin: 0 !important;
        padding: 0 !important;
      }
    }
  }
  img.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .more-button {
    background: #e6e6e6;
    padding: 10px 25px;
  }
}
</style>
<script>
import maps from '@/components/maps.vue';

export default {
  components: {
    maps,
  },
};
</script>
