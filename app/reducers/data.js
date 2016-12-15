export const DELIVERY_ORDERS = [
  {
    orderNumber: 201611300005,
    orderStatus: {numOfItems: 4, totalPrice: 101, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "12:30"},
    deliveryInfo: {deliveryAddress: "250鴨寮街", deliveryPhoneNumber: "25800983", notes: "extra chopsticks"},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
  },
  {
    orderNumber: 201611300004,
    orderStatus: {numOfItems: 7, totalPrice: 98, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "13:09"},
    deliveryInfo: {deliveryAddress: "68南昌街", deliveryPhoneNumber: "66534621", notes: ""},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
  }
]

export const TABLE_ORDERS = [
  {
    orderNumber: 201611300001,
    orderStatus: {numOfItems: 4, totalPrice: 101, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "12:30"},
    tableInfo: {tableNumber: "2", tableSubNumber: "A", numOfPeople: 4},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
 },
 {
   orderNumber: 201611300002,
   orderStatus: {numOfItems: 2, totalPrice: 74, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "18:30"},
   tableInfo: {tableNumber: "1", tableSubNumber: "D", numOfPeople: 3},
   orderList: {
     foodItems: [
       {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "18:30", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
       {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "18:45", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
     ],
     drinkItems: []
   }
 },
 {
   orderNumber: 201611300003,
   orderStatus: {numOfItems: 2, totalPrice: 46, payStatus: "notPaid", date: "2016/09/12", paidTime: "", startTime: "13:09"},
   tableInfo: {tableNumber: "1", tableSubNumber: "B", numOfPeople: 2},
   orderList: {
     foodItems: [],
     drinkItems: [
       {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 28, orderTime: "13:11", payStatus: "notPaid", hotCold: "cold"},
       {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 18, orderTime: "13:15", payStatus: "notPaid", hotCold: "cold"}
     ]
   }

 }
]

export const ORDER_DEFAULT = {
  orderNumber: null,
  orderStatus: {numOfItems: null, totalPrice: null, payStatus: null, date: null, paidTime: null, startTime: null},
  tableInfo: {tableNumber: null, tableSubNumber: null, numOfPeople: null},
  orderList: {
    foodItems: [],
    drinkItems: []
  }
}
