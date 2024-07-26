
import inquirer from "inquirer"

const Currency: any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    BAN: 2.37,
    PKR: 280

}

let user_amswer = await inquirer.prompt(
    [
        {
            name:"from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "Ban","PKR"]
        },
        {
            name:"to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name:"amount",
            message: "Enter from Currency",
            type: "number"
            
        }

    ]
)

let fromAmount = Currency[user_amswer.from]
let toAmount = Currency[user_amswer.to]
let amount = user_amswer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));
//console.log(convertedAmount);





            
