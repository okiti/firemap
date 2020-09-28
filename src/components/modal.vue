<template>
  <div v-show="open" class="flex justify-center items-center p-5
  w-full h-screen z-50 modal-container">
    <div class="modal my-10 bg-white w-full border border-gray-400 rounded-md
    flex items-center justify-center flex-col z-50
    lg:w-3/12">
      <div class="flex justify-end w-full py-5 pr-2">
        <!-- <a class=" outline-none hover:bg-transparent" @click.prevent="toggleFunction" href="">
          <i class="uil uil-times-circle font-light
          text-2xl text-gray-700 hover:bg-transparent"></i></a> -->
      </div>
      <div class="mb-5 mx-5">
        <p class="text-sm text-center">
            Are you sure you want to delete this event?</p>
      </div>
      <p class="flex flex-no-wrap justify-between w-full p-5">
        <a @click.prevent="toggleFunction"
          class="flex justify-center items-center py-2 px-3 border border-gray-500
         rounded-md text-gray-900 buttin" href="">Cancle</a>
        <a @click.prevent="deletingFunction" href=""
        class="flex justify-center items-center py-2 px-3 bg-red-600
          rounded-md text-white buttin">
          <p v-if="!deleting">Yes</p>
          <spinner
          :loading="deleting"
          :color="'#ffffff'"
          :radius="'20'"/>
        </a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .modal-container {
    @apply fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    .line-top {
      border-top: 1px solid #e9e9e9;
    }
    .line-bottom {
      border-bottom: 1px solid #e9e9e9;
    }
    .buttin {
        width: 73px;
    }
  }
</style>
<script>
import spinner from '@/components/spinner.vue';

export default {
  props: ['toggleFunction', 'open', 'deleting', 'deletingFunction'],
  components: {
    spinner,
  },
};
</script>
