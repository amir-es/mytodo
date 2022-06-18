import Edit from './Edit';
import { useState } from 'react'
import { useTodosAction } from "./todosProvider"
import instance from '../api/todosApi'

const Todo = ({todos}) => {
    const [edit , setEdit] = useState(false)
    const dispatch = useTodosAction()
    console.log(todos)

    const editHandler = (editText) => {
        if (!editText) {
            alert("enter todo !");
            return;
          }

        instance.put(`/todos/${todos.id}.json` , {done:todos.done ,text:editText})
          .then((res => dispatch({type:'edit-todo' , id:todos.id ,text:editText})))
          .catch(err => console.log(err))
        setEdit(false)
    }
    const deleteHandler = () => {
        instance.delete(`/todos/${todos.id}.json`)
          .then((res => dispatch({type:'remove-todo' , id:todos.id})))
          .catch(err => console.log(err))
    }
    const doneHandler = () => {
        instance.put(`/todos/${todos.id}.json` , {done:!todos.done , text:todos.text})
          .then((res =>  dispatch({type:'done-todo' , id:todos.id , done:todos.done})))
          .catch(err => console.log(err))
    }
    return (
        <div className="w-96">
            {
            !edit ? (
                    <div className="flex justify-between w-full mb-4 h-20 items-center rounded px-4 border-2 border-gray-700 bg-red-100">
                        <div className="text-xl font-semibold">    
                            {todos.text}
                        </div>
                        <div>
                            <button  onClick={() => setEdit(true)} className="mx-1 bg-blue-400 w-12 h-7 rounded border-2 border-gray-700 font-semibold">Edit</button>
                            <button  onClick={deleteHandler} className="mx-1 bg-red-400 h-7 rounded border-2 border-gray-700 font-semibold">Delete</button>
                            <button  onClick={doneHandler} className={`mx-1 ${!todos.done ? 'bg-green-400' : 'bg-yellow-300'} h-7 rounded border-2 border-gray-700 font-semibold`}>{!todos.done ? 'Done' : 'unDone'}</button>
                        </div>
                    </div>
            )
            : <Edit text={todos.text} edit={editHandler}/>
            }
        </div>
    )
  }
  
  export default Todo;