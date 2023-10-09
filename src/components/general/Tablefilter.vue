<template>
  <div v-if="headersEmpty" class="relative overflow-auto border border-gray-200 rounded-xl">
    <table v-if="!showModal" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th v-for="column in columns" :key="column" scope="col" class="px-6 py-3 w-10 h-2"
              v-show="['from', 'to', 'content'].includes(column)">
            <div class="truncate">{{ column }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer" @click="openModal(row)">
          <td v-for="key in Object.keys(row)" :key="key" class="w-3 h-20 px-6 py-4"
              v-show="['from', 'to', 'content'].includes(key)">
            <div class="truncate max-w-sm">{{ row[key] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showModal" class="flex">
      <div class="bg-white p-5 rounded shadow-lg">
        <button @click="showModal = false" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Return</button>
        <h2 class="text-xl mb-4">Row Details:</h2>
        <div v-for="(value, key) in selectedRow" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="!headersEmpty">
    no hay datos
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
    rows: {
      type: Array,
      default: () => [],
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
    headersEmpty() {
      return this.columns === null || this.rows === null || this.columns.length === 0 || this.rows.length === 0;
    },
  },
};
</script>
