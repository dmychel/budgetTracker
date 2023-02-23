console.log('hello world')

// Table variables to grab users entries

// Date
const date = document.getElementById('date').value;

// Item Description
const description = document.getElementById('description').value;

// span total
const total = document.getElementById('total')

// new item button
const newItem = document.getElementById('newItem');

// user data html
const userDataRow = document.getElementById('userData');


// ------------------------------------------------------ //


// New item entry

let cloneCount = 0;
console.log(cloneCount)
function newEntry (){
    let clone = userDataRow.cloneNode(true);
    userDataRow.after(clone);
    cloneCount++

    clone.id = 'userData' + cloneCount
    console.log(cloneCount)
}

// new entry id 


// Delete entry 

// Income vs exepense
const numberType = document.getElementById('numberType').value;

if(numberType === 'income'){
    console.log('income')
}
else {
    console.log('expense')
}

// Total