document.addEventListener('DOMContentLoaded', function() {
    // target the form
    var theForm = document.getElementById('the-form')


    // when the form is submitted, then execute some instructions
    theForm.addEventListener('submit', function(event) {

        // prevent the page from reloading
        event.preventDefault()

        // target the new todo input field
        var newTodoField = document.getElementById('new-todo-field')
        
        // store the value of the input field
        var newTodo = newTodoField.value

        // create a new list item element
        var newListItem = document.createElement('li')

        // add the todo to the list item text
        newListItem.innerText = newTodo

        console.log('the new list item', newListItem)
        var listOfTodos = document.getElementById('list-of-todos')

        listOfTodos.appendChild(newListItem)
    })
})