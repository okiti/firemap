<template>
  <modal
    :open="open"
    :closeAction="closeAction"
    :title="'About'">
    <div class="flex flex-col justify-center items-center w-full h-full">
      <p>&copy; 2020</p>
      <p>Fire Alarm</p>
      <p class="text-center pt-5">
        <!-- eslint-disable-next-line max-len -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, debitis veritatis omnis veniam sunt vitae aut consequuntur magnam dolore harum, ut fugiat, recusandae ab praesentium aperiam. Sint unde voluptas quibusdam.</p>
    </div>
  </modal>
</template>
<script>
import modal from '@/components/modals/modalTemplate.vue';

export default {
  props: ['open', 'closeAction'],
  data() {
    return {
      submitted: false,
      gender: { 0: 'male', 1: 'female' },
    };
  },
  components: {
    modal,
  },
  methods: {
    submit() {
      this.submitted = true;
      setTimeout(
        () => { this.submitted = false; }, 3000,
      );
    },
  },
};
</script>
