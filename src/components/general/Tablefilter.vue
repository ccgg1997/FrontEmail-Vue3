<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            v-for="column in columns"
            :key="column"
            scope="col"
            class="px-6 py-3"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
          @click="openModal(row)"
        >
          <td
            v-for="key in Object.keys(row)"
            :key="key"
            class="px-6 py-4"
          >
            {{ row[key] }}
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="showModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div class="bg-white p-5 rounded shadow-lg">
        <h2 class="text-xl mb-4">Row Details:</h2>
        <div v-for="(value, key) in selectedRow" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </div>
        <button @click="showModal = false" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      selectedRow: {},
    };
  },
  methods: {
    openModal(row) {
      this.selectedRow = row;
      this.showModal = true;
    },
  },
};
</script>

