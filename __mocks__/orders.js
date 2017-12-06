export const DELIVERY_ORDERS = [
  {
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
  },
  {
    orderNumber: 201611300004,
    orderType: "delivery",
    orderInfo: {numOfItems: 6, totalPrice: 121, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "13:09:15"},
    deliveryInfo: {deliveryAddress: "68南昌街", deliveryPhoneNumber: "6653 4621", notes: ""},
    orderList: {
      foodItems: [
        {name: "咖喱牛腩飯", customization: "少飯,走蒜", menuName: "咖喱牛腩飯", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "12:35:32", payStatus: "notPaid", base: "飯", ingredients: [{name: "咖喱牛腩"}]},
        {name: "豬扒雞翼撈檬", customization: "", menuName: "豬扒雞翼撈檬", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "12:35:43", payStatus: "notPaid", base: "撈檬", ingredients: [{name: "香茅豬扒"}, {name: "風沙雞翼"}]}
      ],
      drinkItems: [
        {name: "凍檸檬茶(餐)", customization: "走甜,少冰", menuName:"凍O茶(餐)", shortName: "凍OT", type: "mealDrink", quantity: 2, price: 2, orderTime: "12:35:20", payStatus: "notPaid", cold: 1},
        {name: "青檸梳打冰(餐)", customization: "", menuName: "青O(餐)", shortName: "青O", type: "mealDrink", quantity: 1, price: 6, orderTime: "12:36:40", payStatus: "notPaid", cold: 1}
      ]
    }
  }
]

export const TABLE_ORDERS = [
  {
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
 },
 {
   orderNumber: 201612300002,
   orderType: "table",
   orderInfo: {numOfItems: 3, totalPrice: 111, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "18:30:01"},
   tableInfo: {tableNumber: "1", tableSubNumber: "D", numOfPeople: 3},
   orderList: {
     foodItems: [
       {name: "咖喱牛腩飯", customization: "少飯,走蒜", menuName: "咖喱牛腩飯", shortName: "喱反", type: "regularFood", quantity: 1, price: 37, orderTime: "18:30:24", payStatus: "notPaid", base: "飯", ingredients: [{name: "咖喱牛腩"}]},
       {name: "豬扒雞翼撈檬", customization: "", menuName: "豬扒雞翼撈檬", shortName: "朱扒亦凍蒙", type: "regularFood", quantity: 2, price: 37, orderTime: "19:05:35", payStatus: "notPaid", base: "撈檬", ingredients: [{name: "香茅豬扒"}, {name: "風沙雞翼"}]}
     ],
     drinkItems: []
   }
 },
 {
   orderNumber: 201612300003,
   orderType: "table",
   orderInfo: {numOfItems: 3, totalPrice: 49, orderStatus: "notPaid", date: "2016/09/12", endTime: "", startTime: "13:09:40"},
   tableInfo: {tableNumber: "1", tableSubNumber: "B", numOfPeople: 2},
   orderList: {
     foodItems: [],
     drinkItems: [
       {name: "凍檸檬茶", customization: "走甜,少冰", menuName: "凍O茶", shortName: "凍OT", type: "regularDrink", quantity: 2, price: 15, orderTime: "13:11:23", payStatus: "notPaid", cold: 1},
       {name: "青檸梳打冰", customization: "", menuName: "青O", shortName: "青O", type: "regularDrink", quantity: 1, price: 19, orderTime: "13:15:40", payStatus: "notPaid", cold: 1}
     ]
   }
 }
]
