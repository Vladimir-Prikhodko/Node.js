get_todos()

function get_todos () {
  const request = new XMLHttpRequest()
  let requestURL = '/get_todos'
  request.open('GET', requestURL)
  request.responseType = 'json'
  request.send()
  request.onload = function () {
    const todos = request.response
    printTodos(todos)
  }
}

function printTodos (todos) {
  const table = document.getElementById('todo_table')

  for (const i in todos) {
    const todo_id = todos[i].todo_id
    const todo = todos[i].todo
    const row = document.createElement('tr')
    const todo_cell = document.createElement('td')
    todo_button = document.createElement('button')
    todo_button.setAttribute('onclick', 'completeTodo(' + todo_id + ')')
    todo_button.id = 'complete_todo_button'
    todo_button.innerHTML = todo
    todo_cell.append(todo_button)
    row.append(todo_cell)
    table.append(row)
  }
}

function completeTodo (todo_id) {
  const form = document.getElementById('complete_todo_form')
  form.action = form.action + todo_id
  form.submit()
}
