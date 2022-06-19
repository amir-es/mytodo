import Todo from "./Todo"
import ReducerFilter from  '../Reducer/FilterReducer'
import { useTodos } from "./todosProvider"
import { useTodosFiltered } from "./todosProvider"
import Navbar from './Navbar'

const TodoList = () =>{
    const todos = useTodos()
    const item = useTodosFiltered()
    console.log(item)

    // console.log('todos' , todos ,'filter' , filteredTodos.filteredTodos)
 
    return(
        <div className="pt-10 h-96 flex flex-col items-center">
           { item.dispatchFilter?.length  ? <Navbar unDoneTodos={item.dispatchFilter?.length} /> : null}
           {
            item.dispatchFilter.map((todo) => (
                <>
                    <Todo 
                        todos={todo}
                        key={todo.id}
                    />
                </>
            ))
           } 
        </div>
    )
}

export default TodoList;