<script setup></script>
<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>aantal aanwezig</th>
      <th>aantal vereist</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><input /></td>
      <td></td>
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
