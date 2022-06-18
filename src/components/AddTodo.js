import {useState , useEffect , useRef} from 'react'
import { useTodosAction } from './todosProvider'
import instance from '../api/todosApi'

const AddTodo = ({edit , todos}) =>{
    const [text , setText] = useState()
    const dipatch = useTodosAction()
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const submitHandler = (e) =>{
        e.preventDefault();

        if (!text) {
            alert("enter todo !");
            return;
        }

        const todo = {text , done:false}
        instance.post(`/todos.json` , todo)
          .then((res => dipatch({type:'add-todo' , text , id:res.data.name})))
          .catch(err => console.log(err))
        setText('')
    }
    const changeHandler = (e) =>{
        setText(e.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="pt-16 border-b-4 pb-16 bg-red-100 border-rose-300">
                <input 
                    value={text}  
                    onChange={changeHandler} 
                    placeholder="Add new value"
                    ref={inputRef}
                    className=" p-1 bg-slate-50 rounded focus:outline-none border-2 border-gray-700"
                    placeholder="i want to do ..."
                />
                <button className=" bg-yellow-300 p-1 ml-2 rounded border-2 font-semibold border-gray-700">{edit ? 'update' : 'Add'}</button>
            </div>
        </form>
    )
}

export default AddTodo;