var items=[
    ["potato",45],//p1
    ["tomato",50],//p2
    ["ginger",250],
    ["garlic",300],
    ["onion",35]
]

var costlyItem=items.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)
console.log(costlyItem)

var lowCostlyItem=items.reduce((p1,p2)=>p1[1]>p2[1]?p2:p1)
console.log(lo)
// costly items