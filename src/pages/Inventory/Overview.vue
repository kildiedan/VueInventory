<template>
  <table>
    <tr>
      <th>product code</th>
      <th>productnaam</th>
      <th>aantal aanwezig</th>
      <th>aantal vereist</th>
      <th>edit</th>
    </tr>
    <tr v-for="(item, index) in inventory" :key="item.id">
      <td>{{ item.productCode }}</td>
      <td>{{ item.name }}</td>
      <td><input type="number" v-model="item.actualAmount" /></td>
      <td>{{ item.minimumAmount }}</td>
      <td>
        <button
          @click="$router.push({ name: 'edit', params: { id: item.id } })"
        >
          edit
        </button>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";

const store = useInventoryStore();
const { inventory } = storeToRefs(store);
</script>
