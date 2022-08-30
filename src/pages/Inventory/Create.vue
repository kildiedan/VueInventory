<template>
  <p>name</p>
  <input type="string" v-model="inventory.name" />
  <p>product code</p>
  <input type="string" v-model="inventory.productCode" />
  <p>price</p>
  <input type="number" v-model="inventory.price" />
  <p>minimum amount</p>
  <input type="number" v-model="inventory.minimumAmount" /><br />
  <button @click="$router.push('/')">Annuleren</button>
  <button
    @click="
      addItem(inventory);
      $router.push('/');
    "
  >
    Toevoegen
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";

const store = useInventoryStore();
const inventory = ref({
  name: "",
  price: 0,
  minimumAmount: 0,
  productCode: "",
});
const { addItem, cleanData, back } = store;
</script>
