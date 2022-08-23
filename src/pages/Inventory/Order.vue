<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>order amount</th>
      <th>price</th>
    </tr>
    <orders-table
      v-for="item in inventory"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :actualAmount="item.actualAmount"
      :productCode="item.productCode"
      :minimumAmount="item.minimumAmount"
    />
    <tr>
      <td colspan="3">total price</td>
      <td>{{ store.orderPrice }}</td>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";
import OrdersTable from "../../components/OrdersTable.vue";

const store = useInventoryStore();
const { inventory, total } = storeToRefs(store);
</script>
