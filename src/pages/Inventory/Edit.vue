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
        <input
          type="string"
          v-model="inventory[$route.params.index].productCode"
        />
      </td>
      <td>
        <input type="string" v-model="inventory[$route.params.index].name" />
      </td>
      <td>
        <input
          type="number"
          v-model="inventory[$route.params.index].minimumAmount"
        />
      </td>
      <td>
        <input type="number" v-model="inventory[$route.params.index].price" />
      </td>
    </tr>
  </table>
  <button
    @click="
      $router.push('/');
      revert(route.params.index);
    "
  >
    Annuleren
  </button>
  <button @click="$router.push('/')">Aanpassen</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const store = useInventoryStore();
const { inventory } = storeToRefs(store);
// TODO: gebruik van backup en revert methods in store zijn omslachtig; gooi deze weg en maak een getter waarmee je een item via zijn id
// op kunt vragen en bewerken
const { backup, revert } = store;
const route = useRoute();
onMounted(() => {
  backup(route.params.index);
});
</script>
