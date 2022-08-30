<script setup></script>
<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>aantal vereist</th>
      <th>price</th>
    </tr>
    <tr>
      <td>
        <input type="string" v-model="inventory.productCode" />
      </td>
      <td>
        <input type="string" v-model="inventory.name" />
      </td>
      <td>
        <input type="number" v-model="inventory.minimumAmount" />
      </td>
      <td>
        <input type="number" v-model="inventory.price" />
      </td>
    </tr>
  </table>
  <button @click="$router.push('/')">Annuleren</button>
  <button @click="$router.push('/')">Aanpassen</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const store = useInventoryStore();
const { backup, revert } = store;
const { inventoryItem } = storeToRefs(store);
const route = useRoute();
const inventoryId = 2;
// const inventoryId = ref(route.params.id);
console.log(inventoryId);
const inventory = store.getById(inventoryId);
</script>
