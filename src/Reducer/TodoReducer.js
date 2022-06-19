const reducerTodos = (state , action) => {
    switch (action.type) {
        case 'init-todo':{
            console.log(action.todos)
            return action.todos 
        }
        case 'add-todo':{
            console.log(state)
            const newTodo = { 
                text : action.text,
                id : action.id,
                done : false
            }
            return [...state , newTodo]
        }
        case 'remove-todo':{
            console.log(state)
            const removeTodo = state.filter((p) => p.id !== action.id)
            return removeTodo
        }
        case 'done-todo':{
            const index = state.findIndex((todo) => todo.id === action.id);
            const selectedTodo = { ...state[index] };
            selectedTodo.done  = !action.done;
            const updatedTodos = [...state];
            updatedTodos[index] = selectedTodo;
            return updatedTodos
        } 
        case 'edit-todo':{
            const index = state.findIndex((todo) => todo.id === action.id);
            const selectedTodo = { ...state[index] };
            selectedTodo.text = action.text;
            const updatedTodos = [...state];
            updatedTodos[index] = selectedTodo;
            return updatedTodos
        }
        // case 'filter-todo':{
        //     switch (action.status) {
        //         case 'Done List':{
        //             const filteredTodo = state.find((t) => t.done)
        //             console.log(filteredTodo)
        //             return filteredTodo
        //         }
        //         case 'Not Done':{
        //             const filteredTodo = state.find((t) => !t.done)
        //             console.log(filteredTodo)
        //             return filteredTodo
        //         }
        //         case 'All Todos':{
        //             console.log(state)
        //             return state
        //         }
        //         default:
        //             break;
        //     }
        // }
        default:
            break;
    }
}

export default reducerTodos;