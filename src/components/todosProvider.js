import React , {useReducer , useContext , useEffect, useState} from 'react'
import instance from '../api/todosApi';
import reducerTodos from  '../Reducer/TodoReducer'
import ReducerFilter from  '../Reducer/FilterReducer'
const providerContext = React.createContext();
const providerContextDispatcher = React.createContext();
const providerContextFiltered = React.createContext();

const TodosProvider = ({children}) => {
    const initialState = [];
    const initialState2 = [];
    // const [filteredTodos , dispatchFilter] = useState([])
    
    const jsonHandler = (data) => {
       let todos = Object 
                 .entries(data)
                 .map(([id , text]) => {
                    console.log(text)
                   return {
                     ...text ,
                     id
                   }
                 });
 
        dispatchFilter({status:'All Todos'})
        dispatchTodos({type : 'init-todo' , todos})
    }
    useEffect(() => {
        instance.get(`/todos.json`)
          .then(res => jsonHandler(res.data))
          .catch(err => console.log(err))
    }, [])

    const [todos , dispatchTodos] = useReducer(reducerTodos , initialState)
    const [filteredTodos , dispatchFilter] = useReducer(ReducerFilter , initialState2)
    console.log(todos)
    return(
        <>
            <ReducerFilter todos={todos} />
            <providerContextFiltered.Provider value={{filteredTodos , dispatchFilter}}> 
                <providerContext.Provider value={todos}>
                    <providerContextDispatcher.Provider value={dispatchTodos}>
                        {children}
                    </providerContextDispatcher.Provider >
                </providerContext.Provider>
            </providerContextFiltered.Provider >    
        </>
    )
}

export default TodosProvider;

export const useTodos = () => useContext(providerContext)
export const useTodosAction = () => useContext(providerContextDispatcher)
export const useTodosFiltered = () => useContext(providerContextFiltered)