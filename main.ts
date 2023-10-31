#!/usr/bin/env node
import inquirer from "inquirer";

const exchangeRates:Record<string,number>={
    PKR:1,
    USD:0.0033,
    AED:0.012,
    AUD:0.0051
};
async function main() {
    
const question=await inquirer.prompt([{
    type:"list",
    name:"input",
    message:"select your currency ",
    choices:["PKR","USD","AED","AUD"]
},

{
    type:"list",
    name:"currency",
    message:"select your conversion currency",
    choices:["PKR","USD","AED","AUD"]
},

  {  type:"number",
    name:"amount",
    message:"Enter the amount u want to convert"

}])
const {input,currency,amount}=question
if (input== currency){
    console.log(`You have entered the same currency ${currency}`);   
}
else {
    const convertedamount=(amount/exchangeRates[input])*exchangeRates[currency]
console.log(`You have ${convertedamount.toFixed(2)} ${currency}`);

}
}
main()