// 1.請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
// var res = ""

// const stars = (n) => {
//     for(let i=0; i<n; i++){
//         res += "*"
//         console.log(res)
//     }
// }
// stars(4)



// 2.請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
// var result = ""
// const makestars = (n) => {
//     for(let i=0; i<n; i++){
//         for(let j=0; j<=i; j++){
//             result += "*"
            

//         }
//         if(i<n-1){
//             result += "\\n"
//         }
//     }
//     return(result)  
// }
// console.log(makestars(5))


// 陣列寫法
// let arr = []
// function markstars(n){
//     let res = ""
    
//     for(let i=0; i<n; i++){
//         for(let j=0; j<=i; j++){
//             res += "*"
//             // console.log(res)
           
//         }
      
//         arr.push(res)
//         res = ""
//         // console.log(arr)
        

//     }

//     return(arr.join("\n"))
// }

// console.log(markstars(5))



// 3.請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。
// const stars2 = (n) => {
//     let arr = []
//     let sum = ""
//     let arr2 = []

//     for(let i=0; i<n-1; i++){
//         sum += "*"
//         arr.push(sum)
//         arr2.unshift(sum)
//         console.log(arr2)
//     }
//     sum += "*"
//     arr.push(sum)

//     const arr3 = arr.concat(arr2)
//     console.log(arr3.join("\n"))

// }
// stars2(5)



// 4.請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果
const table = (n) => {
    let str = 0
    for(let i=1; i<10; i++){
        str = n * i
        console.log(`${n} * ${i} = ${str}`)
    }
}
table(1)



// 5.請寫出一個 function table9to9，並列出 1*1 ~ 9*9。 (99乘法表)


