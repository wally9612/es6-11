// for循环
let arr = [1, 2, 3]

for(let i = 0; i < arr.length, i++;){
    console.log(arr[i])
}

/**
 * forEach循环
 * element当前遍历对象
 * index当前遍历对象的索引
 * array当前遍历的数组本身
 * 不支持break和continue
 * return也不会生效
 */
arr.forEach((element, index, array) => {
    console.log(element,index)
});


/**
 * map循环
 * 遍历数组中的每个元素
 * 根据回调操作，需要什么返回值会形成一个新的数组
 * 并不会改变原数组的值
 */

let result = arr.map(value => {
    value+=1
    return value
})
console.log(arr, result) //[1,2,3], [2,3,4]


/**
 * filter
 * 筛选符合条件的值，返回一个新的数组
 */

let result = arr.filter(value => {
    return value == 2
})
console.log(arr, result)//[1,2,3], [2]


/**
 * some循环
 * 遍历是否符合条件的元素
 * 会返回判断条件的布尔值
 */

let result = arr.some(value => {
     return value == 1
})
console.log(arr, result)//[1,2,3], true
 

/**
 * every循环
 * 会检测数组中的每一项是否都符合当前的条件
 * 都符合才会返回true
 */

let result = arr.every(value => {
    return value == 2
})
console.log(arr, result)//[1,2,3], false


/**
 * reduce
 * 接受一个函数作为累加器
 * prev代表上一次调用回调时，所对应的返回值
 * cur当前正在处理的元素
 * index当前正在处理的索引
 * array 当前数组对象
 * 同时需要传递一个累加初始值
 */

let sum = arr.reduce(function(prev, cur, index, array){
    return prev + cur
}, 0)
console.log(arr, sum)//[1,2,3], 6

//实例：求出最大值
let max = arr.reduce((prev, cur) => {
    return Math.max(prev, cur)
})
console.log(max)//3

//实例：去重
let arr2 = arr.reduce((prev, cur) => {
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
}, [])
console.log(arr2)


// es6

/**
 * find遍历
 * 返回第一个通过测试的元素
 */

let res = arr.find(value => {
    return value == 2
})
console.log(res)//2


/**
 * findIndex
 * 返回第一个通过测试的元素的索引
 */

let ind = arr.findIndex(value => {
    return value == 2
})
console.log(ind) //1


/**
 * for of
 * 
 */

 //返回数组中的值,同arr.values()
for(let item of arr){
    console.log(item)//1,2,3
}

//返回数组中的下标，arr.keys()
for(let item of arr.keys()){
    console.log(item)//0,1,2
}

//返回数组元素与索引
for(let [index, item] of arr.entries()){
    console.log(index,item)//0,1,2和 1,2,3
}