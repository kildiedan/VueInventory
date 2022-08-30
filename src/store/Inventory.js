import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventory-store', {
    id: 'inventory',
  state: () => ({
    inventory: [{
      id: 1,
      productCode: "1",
      name: "cookies",
      actualAmount: 56,
      minimumAmount: 56,
      price: 1.2,
    },
    {
      id: 2,
      productCode: "2",
      name: "cake",
      actualAmount: 23,
      minimumAmount: 51,
      price: 3.4,
    },
    {
      id: 3,
      productCode: "3",
      name: "wrench",
      actualAmount: 86,
      minimumAmount: 111,
      price: 5.2,
    },
    {
      id: 4,
      productCode: "4",
      name: "drill",
      actualAmount: 64,
      minimumAmount: 64,
      price: 12,
    },
    {
      id: 5,
      productCode: "5",
      name: "water",
      actualAmount: 102,
      minimumAmount: 102,
      price: 12,
    },
    {
      id: 6,
      productCode: "6",
      name: "screws",
      actualAmount: 1801,
      minimumAmount: 1841,
      price: 0.9,
    },
    {
      id: 7,
      productCode: "7",
      name: "nails",
      actualAmount: 1132,
      minimumAmount: 1343,
      price: 1,
    },],
    inventoryItem: null,
    nextId: 8,
    price: 0,
    minimumAmount: 0,
    actualAmount: 0,
    name: "",
    productCode: 0,
    total: 0,
  }),
  getters: {
    orderPrice: (state) => {
      return state.inventory.reduce(function(total, currentValue) {
        return total + (currentValue.price * Math.max(currentValue.minimumAmount - currentValue.actualAmount, 0 ))
      }, 0);
   },
   getInventoryById: (state) => {
    return (inventoryId) => state.inventory.find((item) => item.id === inventoryId)
    
  },
  getById: state =>  id => state.inventory.find(item => item.id === id),
},
  actions: {
    addItem(payload) {
      this.inventory.push({ name: payload.name, id: this.nextId++, price: payload.price, minimumAmount: payload.minimumAmount, productCode: payload.productCode, actualAmount: 0 })
      
    },
    deleteItem(index){
      this.inventory.splice(index, 1)
    },
    updateItem(payload, id){

    }
  },
  

})