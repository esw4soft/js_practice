// console.log("Aaa")


//  1.請分別用 for loop 以及 while 迴圈，印出 1~9。
// for (var i=1; i<10; i++){
//     console.log(i);
// }


// i=1;
// while(i<10){
//     console.log(i);
//     i++;
// }


// 2.請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
// const print = (n) => {
//     for(let i=1; i<=n; i++){
//         console.log(i);
        
//     }
// }
// print(6);


// 3.寫一個函式 star，接收一個參數 n，並印出 n 個 *
// function star(n){
//    arr = [];
//    for(let i=0; i<n; i++){
//        arr.push("*");
//    }
   
//    let str = arr.join("");
//    console.log(str)
// }
// star(4);


// 4.請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
// const returnstar = (n) => {
//     arr = [];
//     for(let i=0; i<n; i++){
//         arr.push("*");
//     }
//     // console.log(arr.join(""))
//     return(arr.join(""))
    
// }

// console.log(returnstar(5))


// 5.請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
// const isUpperCase = (str) => {
//     let asciiCode = str[0].charCodeAt();
//     // console.log(asciiCode);
//     if(asciiCode >= 97){
//         return('flase')
//     }else{
//         return("true")
//     }
    
// }
// console.log(isUpperCase("acdsw"))


// 6.請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
// var arr = [];
// const position = (str) => {
//     for(let i=0; i<str.length; i++){
//         let asciiCode = str[i].charCodeAt();
//         arr.push(asciiCode)
//         // console.log(arr);  
//     }

//     console.log(arr);
//     let a = arr.findIndex(o => o <= 97)
    // console.log(a)

    // 快速三目
    // return(a == -1?  a :  (str[a] + " " + a))

    // 原本寫法
    // if(a == -1){
    //     return a

    // }else{
    //     return (str[a] + " " + a)
    // }
    

// };

// console.log(position("weQr"));



// 7.請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
// var sum = 0;
// const findsmallcount = (arr, n) => {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < n){
//             sum += 1;
//         }
//     }

//     return(sum);
// }
// console.log(findsmallcount([1,2,3,4,5,6], 4));


// 8.請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
// var sum = 0;
// const findsmallcount = (arr, n) => {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < n){
//             sum += arr[i];
//         }
//     }

//     return(sum);
// }
// console.log(findsmallcount([1,2,3,4,5,6], 4));



// 9.請寫一個函式 finaAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
// var arrey = [];
// const findallsmall = (arr, n) => {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < n){
//             arrey.push(arr[i])
//         }
//     }

//     return(arrey)
// }
// console.log(findallsmall([1,2,3,4,5,6,7,8,9,12], 10))



// 10.請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
var sbox = 0
const sum = (arr) => {
    for(let i=0; i<arr.length; i++){
        sbox += arr[i]
    }
    return(sbox)
}
console.log(sum([1,2,3,45,6,7,8]))


