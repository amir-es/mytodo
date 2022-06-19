const ReducerFilter = (state , action , todos) => {
    console.log(todos)
    switch (action.status) {
        case 'Done List':{
            console.log(todos)
            const filteredTodo = todos.filter((t) => t.done)
            console.log(filteredTodo)
            return filteredTodo
        }
        case 'Not Done':{
            console.log(todos)
            const filteredTodo = todos.filter((t) => !t.done)
            console.log(filteredTodo)
            return filteredTodo
        }
        case 'All Todos':{
            console.log(state)
            return todos
        }
        default:
            break;
    }
}

export default ReducerFilter;