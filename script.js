const submitButton = document.getElementById('enter')

let userInput = document.getElementById('userinput')
let list = document.getElementById('todo-items')


function addListItem() {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(userInput.value));
    li.setAttribute('class', 'listItem')

    function changeCompleted() {    // function to change style of li after it's clicked.  Toggleable so if hit by mistake can undo.
        li.classList.toggle('completed')
        delBtn.classList.toggle('completed')
    }

    li.addEventListener('click', changeCompleted)
    list.appendChild(li)
    userInput.value = ''

    // Delete button is added below.
    let delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('X'));
    delBtn.setAttribute('id', 'delete')
    li.appendChild(delBtn);
    delBtn.addEventListener('click', deleteButton)
    // Event listener call function for delete button, simply deletes li, have to access it through the parentNode as JS doesn't let DOM elements remove themselves.
    function deleteButton() {
        li.parentNode.removeChild(li)
    }
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