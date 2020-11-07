<template>
  <div
    @click.self="closeAction"
    v-if="open"
    class="backdrop flex flex-no-wrap justify-center items-center">
    <div class="flex flex-col flex-no-wrap bg-white rounded-lg modal-container">
      <div class="flex justify-between items-center border-b border-gray-400 flex-no-wrap">
        <span class="flex flex-col flex-no-wrap px-5 py-2">
          <p class="text-base lg:text-xl font-semibold">{{title}}</p>
          <p v-if="description" class="text-sm">{{description}}</p>
        </span>
        <a @click.prevent="closeAction" class="mr-4" href="">
          <i class="uil uil-times text-2xl"></i>
        </a>
      </div>
      <div class="content flex m-5">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ['open', 'closeAction', 'title', 'description'],
  components: {
  },
};
</script>
<style lang="scss" scoped>
  .backdrop {
    position: fixed;
    top: 0; left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%; height: 100vh;
    z-index: 9999999999;
    .modal-container {
      min-width: 600px;
      max-width: 600px;
      overflow: hidden;
      min-height: 400px;
      @include sm {
        min-width: 95%;
        width: 95%;
      }
    }
  }
  input[type='text'] {
    outline: none;
    @apply my-4;
    @apply border; @apply border-gray-400;
    @apply bg-gray-100;
    min-width: 350px;
  }
</style>
