const submitButton = document.getElementById('enter')

let userInput = document.getElementById('userinput')
let list = document.getElementById('todo-items')


function addListItem() {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(userInput.value));
    list.appendChild(li)
    userInput.value = ''   
}

function checkEmpty() {
    if (userInput.value.length > 0) {
        addListItem();
    }
}


submitButton.addEventListener('click', checkEmpty)
userInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        checkEmpty()
    }
})