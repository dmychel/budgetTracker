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
    if(numberType === 'income'){
            sum()
        }
        else {
            let negative = (stringToNum * 0) - stringToNum;
            console.log(negative)
            sum(negative)
        }
    }
type()

function sum (a){
    let totalCash= a + 0;
     total.innerHTML = totalCash;
}

// console.log(date)
// console.log(description)
// console.log(numberType)
// console.log(stringToNum)
// console.log(number)
