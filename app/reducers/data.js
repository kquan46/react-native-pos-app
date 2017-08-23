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

export const ORDER_SAMPLE_DELIVERY = {
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

export const ORDER_SAMPLE_TABLE = {
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

export const MENU_DEFAULT = {
  base: [],
  drinks: [],
  drinksMeal: [],
  ingredients: [],
  snacks: [],
  drinkCustomizations: [],
  foodCustomizations: [],
  customizationPrefixes: [],
}

export const FOOD_ITEM_DEFAULT = {
  ingredient: null,
  base: null
}

export const MENU_DRINKS = [
  {name: "香濃滴漏咖啡", menuName: "滴啡", shortName: "的", hotCold: "hot", type: "regularDrink", price: 16},
  {name: "凍香濃滴漏咖啡", menuName: "凍滴啡", shortName: "凍的", hotCold: "cold", type: "regularDrink", price: 19},
  {name: "香濃即溶咖啡", menuName: "即溶", shortName: "即溶", hotCold: "hot", type: "regularDrink", price: 13},
  {name: "凍香濃即溶咖啡", menuName: "凍即溶", shortName: "凍即溶", hotCold: "cold", type: "regularDrink", price: 16},
  {name: "青檸梳打冰", menuName: "青O", shortName: "青O", hotCold: "cold", type: "regularDrink", price: 19},
  {name: "檸檬茶", menuName: "O茶", shortName: "OT", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍檸檬茶", menuName: "凍O茶", shortName: "凍OT", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "檸檬水", menuName: "O水", shortName: "O水", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍檸檬水", menuName: "凍O水", shortName: "凍O水", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "奶茶", menuName: "奶茶", shortName: "奶T", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍奶茶", menuName: "凍奶茶", shortName: "凍奶T", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "咖啡", menuName: "咖啡", shortName: "啡", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍咖啡", menuName: "凍咖啡", shortName: "凍啡", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "鴛鴦", menuName: "鴛鴦", shortName: "央", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍鴛鴦", menuName: "凍鴛鴦", shortName: "凍央", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "好立克", menuName: "立克", shortName: "立", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍好立克", menuName: "凍立克", shortName: "凍立", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "阿華田", menuName: "華田", shortName: "田", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍阿華田", menuName: "凍華田", shortName: "凍田", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "杏仁霜", menuName: "杏霜", shortName: "杏", hotCold: "hot", type: "regularDrink", price: 12},
  {name: "凍杏仁霜", menuName: "凍仁霜", shortName: "凍杏", hotCold: "cold", type: "regularDrink", price: 15},
  {name: "汽水", menuName: "汽水", shortName: "汽水", hotCold: "cold", type: "regularDrink", price: 7},
  {name: "333啤酒罐裝", menuName: "333啤", shortName: "333啤", hotCold: "cold", type: "regularDrink", price: 13},
  {name: "藍妹啤酒大支", menuName: "藍妹啤", shortName: "藍妹", hotCold: "cold", type: "regularDrink", price: 26},
  {name: "森堡啤酒大支", menuName: "森堡啤", shortName: "森保", hotCold: "cold", type: "regularDrink", price: 15},
]

export const MENU_DRINKS_MEAL = [
  {name: "香濃滴漏咖啡(餐)", menuName: "滴啡", shortName: "的", hotCold: "hot", type: "mealDrink", price: 5},
  {name: "凍香濃滴漏咖啡(餐)", menuName: "凍滴啡", shortName: "凍的", hotCold: "cold", type: "mealDrink", price: 7},
  {name: "檸檬茶(餐)", menuName: "O茶", shortName: "OT", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍檸檬茶(餐)", menuName: "凍O茶", shortName: "凍OT", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "青檸梳打冰(餐)", menuName: "青O", shortName: "青O", hotCold: "cold", type: "mealDrink", price: 6},
  {name: "香濃即溶咖啡(餐)", menuName: "即溶", shortName: "即溶", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍香濃即溶咖啡(餐)", menuName: "凍即溶", shortName: "凍即溶", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "檸檬水(餐)", menuName: "O水", shortName: "O水", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍檸檬水(餐)", menuName: "凍O水", shortName: "凍O水", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "汽水(餐)", menuName: "汽水", shortName: "汽水", hotCold: "cold", type: "mealDrink", price: 0},
  {name: "奶茶(餐)", menuName: "奶茶", shortName: "奶T", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍奶茶(餐)", menuName: "凍奶茶", shortName: "凍奶T", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "阿華田(餐)", menuName: "華田", shortName: "田", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍阿華田(餐)", menuName: "凍華田", shortName: "凍田", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "杏仁霜(餐)", menuName: "杏霜", shortName: "杏", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "咖啡(餐)", menuName: "咖啡", shortName: "啡", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍咖啡(餐)", menuName: "凍咖啡", shortName: "凍啡", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "好立克(餐)", menuName: "立克", shortName: "立", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍好立克(餐)", menuName: "凍立克", shortName: "凍立", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "凍杏仁霜(餐)", menuName: "凍仁霜", shortName: "凍杏", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "鴛鴦(餐)", menuName: "鴛鴦", shortName: "央", hotCold: "hot", type: "mealDrink", price: 0},
  {name: "凍鴛鴦(餐)", menuName: "凍鴛鴦", shortName: "凍央", hotCold: "cold", type: "mealDrink", price: 2},
  {name: "不飲", menuName: "不飲", shortName: "不飲", hotCold: "", type: "mealDrink", price: -2},
]

export const MENU_BASE = [
  {name: "湯米粉", menuName: "湯米", shortName: "米", type: "base", price: 37},
  {name: "湯河粉", menuName: "湯河", shortName: "河", type: "base", price: 37},
  {name: "湯檬", menuName: "湯檬", shortName: "湯蒙", type: "base", price: 37},
  {name: "撈檬", menuName: "撈檬", shortName: "凍蒙", type: "base", price: 37},
  {name: "暖檬", menuName: "暖檬", shortName: "干蒙", type: "base", price: 37},
  {name: "湯烏冬", menuName: "湯冬", shortName: "冬", type: "base", price: 39},
  {name: "湯米線", menuName: "湯線", shortName: "線", type: "base", price: 37},
  {name: "湯粉絲", menuName: "湯絲", shortName: "C", type: "base", price: 37},
  {name: "湯金邊粉", menuName: "湯金", shortName: "金", type: "base", price: 37},
  {name: "飯", menuName: "飯", shortName: "反", type: "base", price: 37},
]

export const MENU_BASE_MINISET = [
  {name: "湯米粉(迷你)", menuName: "湯米", shortName: "米(小)", type: "baseMiniSet", price: 30},
  {name: "湯河粉(迷你)", menuName: "湯河", shortName: "河(小)", type: "baseMiniSet", price: 30},
  {name: "湯檬(迷你)", menuName: "湯檬", shortName: "湯蒙(小)", type: "baseMiniSet", price: 30},
  {name: "湯烏冬(迷你)", menuName: "湯冬", shortName: "冬(小)", type: "baseMiniSet", price: 31},
  {name: "湯米線(迷你)", menuName: "湯線", shortName: "線(小)", type: "baseMiniSet", price: 30},
  {name: "湯粉絲(迷你)", menuName: "湯絲", shortName: "C(小)", type: "baseMiniSet", price: 30},
  {name: "湯金邊粉(迷你)", menuName: "湯金", shortName: "金(小)", type: "baseMiniSet", price: 30},
]

export const MENU_INGREDIENTS = [
  {name: "蝦膠扎肉番茄", menuName: "蝦番茄", shortName: "虾", type: "nonCombinations", miniSet: "yes", price: 1},
  {name: "招牌", menuName: "招牌", shortName: "招", type: "nonCombinations", miniSet: "no", price: 2},
  {name: "生牛肉", menuName: "生牛", shortName: "生牛", type: "nonCombinations", miniSet: "yes", price: 0},
  {name: "熟牛肉", menuName: "熟牛", shortName: "熟牛", type: "nonCombinations", miniSet: "yes", price: 0},
  {name: "生熟牛肉", menuName: "生熟牛", shortName: "生熟牛", type: "nonCombinations", miniSet: "no", price: 0},
  {name: "茄汁牛腩", menuName: "茄汁腩", shortName: "腩", type: "nonCombinations", miniSet: "no", price: 0},
  {name: "咖喱牛腩", menuName: "咖喱腩", shortName: "喱", type: "nonCombinations", miniSet: "no", price: 0},
  {name: "三寶", menuName: "三寶", shortName: "三宝", type: "nonCombinations", miniSet: "no", price: 2},
  {name: "雞絲", menuName: "雞絲", shortName: "雞絲", type: "combinations", miniSet: "yes", price: 0},
  {name: "春卷", menuName: "春卷", shortName: "春", type: "combinations", miniSet: "yes", price: 0},
  {name: "豬扒", menuName: "豬扒", shortName: "朱扒", type: "combinations", miniSet: "yes", price: 0},
  {name: "雞翼", menuName: "雞翼", shortName: "亦", type: "combinations", miniSet: "yes", price: 0},
  {name: "扎肉", menuName: "扎肉", shortName: "扎肉", type: "combinations", miniSet: "yes", price: 0},
]

export const MENU_SNACKS = [
  {name: "越式拼盤", menuName: "拼盤", shortName: "拼", type: "snacks", price: 55},
  {name: "炸三寶", menuName: "炸三寶", shortName: "炸三", type: "snacks", price: 25},
  {name: "炸蝦餅(3)", menuName: "炸蝦(3)", shortName: "虾(3)", type: "snacks", price: 33},
  {name: "炸春卷(3)", menuName: "炸春(3)", shortName: "春(3)", type: "snacks", price: 21},
  {name: "風沙雞翼(3)", menuName: "雞翼(3)", shortName: "亦(3)", type: "snacks", price: 21},
  {name: "香茅豬扒(2)", menuName: "豬扒(2)", shortName: "朱扒(3)", type: "snacks", price: 18},
  {name: "炸蝦餅", menuName: "炸蝦", shortName: "虾", type: "snacks", price: 11},
  {name: "炸春卷", menuName: "炸春", shortName: "春", type: "snacks", price: 7},
  {name: "風沙雞翼", menuName: "雞翼", shortName: "亦", type: "snacks", price: 7},
  {name: "香茅豬扒", menuName: "豬扒", shortName: "朱扒", type: "snacks", price: 9},
]

export const MENU_DRINK_CUSTOMIZATIONS = [
  {name: "冰"},
  {name: "花奶"},
  {name: "煉奶"},
  {name: "檸檬"},
  {name: "青檸"},
  {name: "甜"},
]

export const MENU_FOOD_CUSTOMIZATIONS = [
  {name: "底"},
  {name: "雞湯"},
  {name: "茄湯"},
  {name: "牛湯"},
  {name: "洋蔥"},
  {name: "蔥油"},
  {name: "蒜"},
  {name: "酸葉"},
  {name: "青"},
  {name: "青瓜"},
  {name: "芽菜"},
  {name: "花生"},
  {name: "香葉"},
  {name: "辣"},
  {name: "飯"},
  {name: "粉"},
  {name: "干蒜"},
]

export const MENU_CUSTOMIZATION_PREFIXES = [
  {prefix: "走", price: 0},
  {prefix: "少", price: 0},
  {prefix: "加", price: 0},
  {prefix: "多", price: 0},
  {prefix: "要", price: 0},
  {prefix: "全走", price: 0},
  {prefix: "分上", price: 0},
  {prefix: "後上", price: 0},
]

export const MENU_SAMPLE = {
  base: MENU_BASE,
  baseMiniSet: MENU_BASE_MINISET,
  drinks: MENU_DRINKS,
  drinksMeal: MENU_DRINKS_MEAL,
  ingredients: MENU_INGREDIENTS,
  snacks: MENU_SNACKS,
  drinkCustomizations: MENU_DRINK_CUSTOMIZATIONS,
  foodCustomizations: MENU_FOOD_CUSTOMIZATIONS,
  customizationPrefixes: MENU_CUSTOMIZATION_PREFIXES,
}
