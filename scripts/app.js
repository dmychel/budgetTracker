console.log('hello world')

// Table variables to grab users entries

// Date
const date = document.getElementById('date').value;

// Item Description
const description = document.getElementById('description').value;

// Expense or Income
const numberType = document.getElementById('numberType').value;

// Amount Row
const number = document.getElementById('number').value
const stringToNum = Number(number);

const total = document.getElementById('total')


function type(){
    if(numberType === 'expense'){
        console.log('expense')
        }
        else {
            console.log('income')
        }
    }
type()

// function sum (){
//     let totalCash = stringToNum + 200;
//     total.innerHTML = totalCash
// }
// sum()
// console.log(date)
// console.log(description)
// console.log(numberType)
// console.log(number)
