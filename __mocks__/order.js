export const ORDER_DEFAULT = {
  orderNumber: null,
  orderType: null,
  orderInfo: {numOfItems: null, totalPrice: null, orderStatus: null, date: null, endTime: null, startTime: null},
  tableInfo: {tableNumber: null, tableSubNumber: null, numOfPeople: null},
  orderList: {
    foodItems: [],
    drinkItems: []
  }
}

export const FOOD_ITEM_DEFAULT = {
  ingredients: [],
  base: null,
  customizations: [],
  quantity: 1
}

export const DRINK_ITEM_DEFAULT = {
  drink: null,
  customizations: [],
  quantity: 1
}

export const ORDER_SAMPLE_DELIVERY = {
  orderNumber: 201612300005,
  orderType: "delivery",
  orderInfo: {numOfItems: 6, totalPrice: 121, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "12:30:54"},
  deliveryInfo: {deliveryAddress: "250鴨寮街", deliveryPhoneNumber: "2580 0983", notes: "extra chopsticks"},
  orderList: {
    foodItems: [
      {name: "咖喱牛腩飯", customization: "少飯,走蒜", menuName: "咖喱牛腩飯", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:43", payStatus: "notPaid", base: "飯", ingredients: [{name: "咖喱牛腩"}]},
      {name: "豬扒雞翼撈檬", customization: "", menuName: "豬扒雞翼撈檬", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:56", payStatus: "notPaid", base: "撈檬", ingredients: [{name: "香茅豬扒"}, {name: "風沙雞翼"}]}
    ],
    drinkItems: [
      {name: "凍檸檬茶(餐)", customization: "走甜,少冰", menuName:"凍O茶(餐)", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:45", payStatus: "notPaid", cold: 1},
      {name: "青檸梳打冰(餐)", customization: "", menuName: "青O(餐)", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:04", payStatus: "notPaid", cold: 1}
    ]
  }
}

export const ORDER_SAMPLE_TABLE = {
  orderNumber: 201612300001,
  orderType: "table",
  orderInfo: {numOfItems: 6, totalPrice: 121, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "12:30:30"},
  tableInfo: {tableNumber: "2", tableSubNumber: "A", numOfPeople: 4},
  orderList: {
    foodItems: [
      {name: "咖喱牛腩飯", customization: "少飯,走蒜", menuName: "咖喱牛腩飯", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:23", payStatus: "notPaid", base: "飯", ingredients: [{name: "咖喱牛腩"}]},
      {name: "豬扒雞翼撈檬", customization: "", menuName: "豬扒雞翼撈檬", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:40", payStatus: "notPaid", base: "撈檬", ingredients: [{name: "香茅豬扒"}, {name: "風沙雞翼"}]}
    ],
    drinkItems: [
      {name: "凍檸檬茶(餐)", customization: "走甜,少冰", menuName:"凍O茶(餐)", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:04", payStatus: "notPaid", cold: 1},
      {name: "青檸梳打冰(餐)", customization: "", menuName: "青O(餐)", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:50", payStatus: "notPaid", cold: 1}
    ]
  }
}
