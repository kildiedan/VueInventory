import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory-store', {
    id: 'inventory',
  state: () => ({
    inventory: [{
      id: 1,
      productCode: 1,
      name: "cookies",
      actualAmount: 56,
      minimumAmount: 12,
      price: 1.2,
    },],
    nextId: 3,
    price: 0,
    minimumAmount: 0,
    actualAmount: 0,
    name: "",
    productCode: 0,
  }),
  actions: {
    addItem() {
      this.inventory.push({ name: this.name, id: this.nextId++, price: this.price, minimumAmount: this.minimumAmount, actualAmount: this.actualAmount, productCode: this.productCode })
      this.price = 0;
      this.minimumAmount = 0;
      this.actualAmount = 0;
      this.name = "";
      this.productCode = 0;
    },
    deleteItem(index){
      this.inventory.splice(index, 1)
    },
  },
  

})