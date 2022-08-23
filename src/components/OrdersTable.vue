<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  price: Number,
  actualAmount: Number,
  minimumAmount: Number,
  productCode: String,
});
</script>
<template>
  <tr v-if="actualAmount < minimumAmount">
    <td>{{ productCode }}</td>
    <td>{{ name }}</td>
    <td>{{ minimumAmount - actualAmount }}</td>
    <td>{{ price }}</td>
  </tr>
</template>
