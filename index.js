// * Create a function with a function name printSum( ) and print the sum of an array.
//let array = [9,8,45,67,7,8,10,0] 

let printSum =(array)=>
{
    let sum = 0;
    for(i = 0; i <array.length; 1++){
        sum += array[i]
    }
    console.log(sum)
}
printSum ([5,5,5]);

/*Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, 
awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.
the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet
 b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1],
 a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point
If a[i]<b[i] then bob is awarded 1 point
If a[i]===b[i] then none of them gets a point
The comparison points should be the total points a person earned.
*/

const alice = [10,56,1]
const bob = [100,30,0]

let comparedPoint = (alice, bob)=>{
    let alicePoints = 0
    let bobPoints = 0

    if(alice[0] > bob[0])
    {
        alicePoints++
    }
    else if (alice[0] < bob[0])
    {
        bobPoints++
    }
    if(alice[1] > bob[1])
    {
        alicePoints++
    }
    else if (alice[1] < bob[1])
    {
        bobPoints++
    }
    if(alice[2] > bob[2])
    {
        alicePoints++
    }
    else if (alice[2] < bob[2])
    {
        bobPoints++
    }
    if(alice[0] === bob[0] || alice[1] === bob[1] || alice[2] === bob [2])
    {
        alicePoints
        bobPoints
    }
    // if(alice[1] === bob[1])
    // {
    //      alicePoints
    //      bobPoints
    // }
    // if(alice[2] === bob[2])
    // {
    //     alicePoints
    //     bobPoints
    // }    
    
    totalScores = [alicePoints, bobPoints]
    console.log(totalScores)

}
comparedPoint([100,80,90], [100,80,90])

/* 
    Given an array of integers, calculate the ratio of its elements that are positive, 
    negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.
*/

const array = [70, 67, 3, -5, 7, -9, -45, 0]

let positive = 0
let negative = -1
let zero = 0

for (i = 0; i < array.length; i++ )
{
    if(array[i] > 0)
    {
        positive++
    }
    if(array[i] < 0)
    {
        negative++  
    }

    if(array[i] === 0)
    {
        zero++
    }

    console.log(parseFloat(positive / array.length))
    console.log(parseFloat(negative / array.length))
    console.log(ParseFloat(zero / array.length))

}
fraction()

// Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)

// let number1 = 50;
// let number2 = 100;
let firstfunction = (number1, number2)=>
{
    let sum = number1 + number2
    console.log(sum)
}
firstFunction[400, 1000]