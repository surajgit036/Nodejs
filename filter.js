const arr=[1,3,5,2,6,7,8,4,3,9]

let result = arr.filter((item)=>{
    return item ===3
})

let result1= arr.filter((item)=>{
    return item>4
})


console.warn(result)
console.warn(result1) 