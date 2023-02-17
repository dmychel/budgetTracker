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

// span total
const total = document.getElementById('total')

// new item button
const newItem = document.getElementById('newItem');

// user data html
const userDataRow = document.getElementById('userData');


// ------------------------------------------------------ //

// functions

// determines whether an item is and expense or income
function type(){
    if(numberType === 'income'){
            sum()
        }
        else {
            let negative = (stringToNum * 0) - stringToNum;
            sum(negative)
        }
    }
type()

// determines the total
function sum (a){
    let totalCash= a + 0;
     total.innerHTML = totalCash;
}

// new budgetItem
function budgetItem(){
    let clone = userDataRow.cloneNode(true);
    userDataRow.after(clone)
}

// console.log(date)
// console.log(description)
// console.log(numberType)
// console.log(stringToNum)
// console.log(number)
