export const DELIVERY_ORDERS = [
  {
    orderNumber: 201612300005,
    orderType: "delivery",
    orderInfo: {numOfItems: 4, totalPrice: 101, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "12:30:54"},
    deliveryInfo: {deliveryAddress: "250鴨寮街", deliveryPhoneNumber: "2580 0983", notes: "extra chopsticks"},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:43", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:56", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:45", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:04", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
  },
  {
    orderNumber: 201611300004,
    orderType: "delivery",
    orderInfo: {numOfItems: 7, totalPrice: 98, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "13:09:15"},
    deliveryInfo: {deliveryAddress: "68南昌街", deliveryPhoneNumber: "6653 4621", notes: ""},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:32", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:43", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:20", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:40", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
  }
]

export const TABLE_ORDERS = [
  {
    orderNumber: 201612300001,
    orderType: "table",
    orderInfo: {numOfItems: 4, totalPrice: 101, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "12:30:30"},
    tableInfo: {tableNumber: "2", tableSubNumber: "A", numOfPeople: 4},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:23", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
        {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:40", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
      ],
      drinkItems: [
        {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:04", payStatus: "notPaid", hotCold: "cold"},
        {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:50", payStatus: "notPaid", hotCold: "cold"}
      ]
    }
 },
 {
   orderNumber: 201612300002,
   orderType: "table",
   orderInfo: {numOfItems: 2, totalPrice: 74, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "18:30:01"},
   tableInfo: {tableNumber: "1", tableSubNumber: "D", numOfPeople: 3},
   orderList: {
     foodItems: [
       {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "18:30:24", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
       {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "19:05:35", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
     ],
     drinkItems: []
   }
 },
 {
   orderNumber: 201612300003,
   orderType: "table",
   orderInfo: {numOfItems: 2, totalPrice: 46, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "13:09:40"},
   tableInfo: {tableNumber: "1", tableSubNumber: "B", numOfPeople: 2},
   orderList: {
     foodItems: [],
     drinkItems: [
       {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 28, orderTime: "13:11:23", payStatus: "notPaid", hotCold: "cold"},
       {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 18, orderTime: "13:15:40", payStatus: "notPaid", hotCold: "cold"}
     ]
   }
 }
]

export const ORDER_SAMPLE = {
  orderNumber: 201612300005,
  orderType: "delivery",
  orderInfo: {numOfItems: 4, totalPrice: 101, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "12:30:54"},
  deliveryInfo: {deliveryAddress: "250鴨寮街", deliveryPhoneNumber: "2580 0983", notes: "extra chopsticks"},
  orderList: {
    foodItems: [
      {name: "咖喱牛腩飯", customization: "少飯,走蒜", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:43", payStatus: "notPaid", base: "飯", ingredients: {ingredient1: "咖喱牛腩", ingredient2: "", ingredient3: "", ingredient4: ""}},
      {name: "香茅豬扒風沙雞翼撈檬", customization: "", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:56", payStatus: "notPaid", base: "撈檬", ingredients: {ingredient1: "香茅豬扒", ingredient2: "風沙雞翼", ingredient3: "", ingredient4: ""}}
    ],
    drinkItems: [
      {name: "凍檸檬茶", customization: "走甜,少冰", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:45", payStatus: "notPaid", hotCold: "cold"},
      {name: "青檸梳打冰", customization: "", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:04", payStatus: "notPaid", hotCold: "cold"}
    ]
  }
}

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
