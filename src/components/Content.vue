<template>
  <div class="flex flex-col md:flex-row w-full h-screen">
    <div class=" flex flex-col gap-y-3 w-full h-full  overflow-auto p-1 ">
        <Tablefilter/>
    </div>
   
  </div>
</template>

<script>
import Tablefilter from "./general/Tablefilter.vue";
export default {
  components: {
    Tablefilter,
  },
};
</script>
