<template>
  <div class="flex flex-col md:flex-row w-full h-screen pl-5 pr-5">
    <div class="flex flex-col gap-y-3 w-full h-full p-1">
      <Tablefilter :columns="columns" :rows="products" />
    </div>
  </div>
</template>

<script>
import Tablefilter from "./general/Tablefilter.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Tablefilter,
  },
  setup() {
    const store = useStore();

    
    const emailsArray = computed(() => store.getters['emails/Emails']?? []) ;

    const headers = computed(() => {
      if (emailsArray.value!==null && emailsArray.value.length > 0) {
        return Object.keys(emailsArray.value[0]);
      }
      return [];
    });

    return {
      columns: headers,  // Don't use .value here
      products: emailsArray  // Don't use .value here
    };
  }
};
</script>
