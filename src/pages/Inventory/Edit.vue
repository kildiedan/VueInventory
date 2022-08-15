<script setup></script>
<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>aantal aanwezig</th>
      <th>aantal vereist</th>
      <th>price</th>
    </tr>
    <tr>
      <td><input type="string" /></td>
      <td><input type="string" /></td>
      <td><input type="number" /></td>
      <td><input type="number" /></td>
      <td><input type="number" /></td>
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
