<template>
  <p>name</p>
  <input type="string" v-model="name" />
  <p>product code</p>
  <input type="string" v-model="productCode" />
  <p>price</p>
  <input type="number" v-model="price" />
  <p>minimum amount</p>
  <input type="number" v-model="minimumAmount" /><br />
  <button @click="$router.push('/')">Annuleren</button>
  <button @click="addItem()">Toevoegen</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";

const store = useInventoryStore();
const { inventory, price, name, productCode, minimumAmount } =
  storeToRefs(store);
const { addItem, cleanData, back } = store;
onMounted(() => {
  // cleanData method kan weg uit store: voeg een leeg object via ref in dit component toe die je in aan de state toevoegt
  cleanData();
});
</script>
