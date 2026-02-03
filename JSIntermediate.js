//1. Addition
//for loop start at 200 and end at 2700
/// condition check if thr number is divisible by 3 or 5 but not both
//add thr number 
//print the sum
//define varaible to hold the sum of the number 
// let sum=0
// for(let i=0; i<=2700;i++){
//     if ((i%3==0|| i%5==0)&&!(i%3==0 && i%5==0)){
//         sum+=i
//     }
// }
// console.log(sum)

//2-shift the values
//

// let newArray=[]
// let x=[2,1,6,4,-7]
// for(let i=0 ;i<x.length;i++){
//     newArray.unshift(x[i])
// }
// console.log(newArray)
// let x = [2,1,6,4,-7]
// let last = x.pop()
// x.unshift(last)
// console.log(x)




//3-fizzBuzz
//create an algorithm than inserts the numbers from 1 to 135 intoan array, while replacing the values 
//that are divisible by 3 with the word "fizz" , the numbers that are divisble by 5 by the word "Buzz"
//and the numbers that are divisible with 3 and 5 with the word "FizzBuzz"
//YOur output should look like [1,2,'Fizz',4,'Buzz','fizz',7,8...]
// let array=[1,2,3,4,5]
// console.log(array.length)
// array.splice(1,1)
// console.log(array)


// let arr=[]
// for(let i=1; i<=135;i++){
//     if(i%3==0 && i%5==0){
//         arr[i]='fizzbuzz'

//     }else if(i%3==0){
//         arr[i]='fizz'
//     }else if(i%5==0){
//         arr[i]='buzz'
//     }else (
//         arr[i]=i
//     )
// }
// console.log(arr)



//4. Fibonacci

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with
//0 1 1 2 3 5 8 13 21...
// let fib=[]
// for(let i=0; i<100;i++){
//     if(i==0||i==1){
//         fib[i]=i

//     }else {
//         fib[i]=fib[i-1]+fib[i-2]
//     }
// }
// console.log(fib)

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].



// let x=[1,-2,4,1]
// for(let i=0 ; i<x.length; i++){
//     if(x[i]<0){
//         x.splice(i,1)
//         i=i-1
//     }
// }
// console.log(x)


//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
//define a variable empty string
//for loop to generate stars according to the givin word
//for loop to iterate through the array elements
//condition to check if we have a match 
//if ture replace the elemnt with the srtring of stars

let x=['Man','I','love','The','Matrix','program']
let word='The'
let st=''
for(let i=0; i<x.length; i++){
    if(word==x[i]){
        x[i]=st
    }
}
console.log(x)