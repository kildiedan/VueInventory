<script setup></script>
<template>
  <p>name</p>
  <input type="string" v-model="name" />
  <p>product code</p>
  <input type="string" v-model="productCode" />
  <p>price</p>
  <input type="number" v-model="price" />
  <p>actual amount</p>
  <input type="number" v-model="actualAmount" />
  <p>minimum amount</p>
  <input type="number" v-model="minimumAmount" /><br />
  <button @click="addItem()">submit</button>
</template>

<script>
import { ref, onMounted } from "vue";
import { useInventoryStore } from "../../store/Inventory.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useInventoryStore();
    const { inventory, price, name, productCode, actualAmount, minimumAmount } =
      storeToRefs(store);
    const { addItem } = store;
    return {
      inventory,
      addItem,
      price,
      name,
      productCode,
      actualAmount,
      minimumAmount,
    };
  },
};
</script>
