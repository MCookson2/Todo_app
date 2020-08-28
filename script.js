const submitButton = document.getElementById('enter')

let userInput = document.getElementById('userinput')
let list = document.getElementById('todo-items')


function addListItem() {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(userInput.value));
    li.setAttribute('class', 'listItem')

    function changeCompleted() {    // function to change style of li after it's clicked.  Toggleable so if hit by mistake can undo.
        li.classList.toggle('completed')
    }

    li.addEventListener('click', changeCompleted)
    
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