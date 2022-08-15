<script setup></script>
<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>aantal aanwezig</th>
      <th>aantal vereist</th>
    </tr>
    <tr v-for="(item, index) in inventory" :key="item.id">
      <td>{{ item.productCode }}</td>
      <td>{{ item.name }}</td>
      <td><input type="number" v-model="item.actualAmount" /></td>
      <td>{{ item.minimumAmount }}</td>
    </tr>
  </table>
</template>

<script>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useInventoryStore();
    const { inventory } = storeToRefs(store);
    return { inventory };
  },
};
</script>
