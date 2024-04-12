#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
    USD: 1, // BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR:74.58,
    PKR:280
};

let user_ans = await inquirer.prompt([{
    name:"from",
    message:"Enter From Currency:",
    type:"list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
   {name:"to",
    message:"Enter To Currency:",
    type:"list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name:"amount",
    message:"Enter Your Amount",
    type:"number"
}
]);
console.log(user_ans)

let fromAmount = currency[user_ans.from] // exchange rate
let toAmount = currency[user_ans.to] // exchange rate
let amount = user_ans.amount
let baseAmount = amount / fromAmount // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);