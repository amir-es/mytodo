import { useState , useEffect } from 'react'
import Select from 'react-select'
import { useTodosAction } from "./todosProvider"
import { useTodos } from "./todosProvider"
import { useTodosFiltered } from "./todosProvider"

const Navbar = ({unDoneTodos}) => {
    const [selectedOption , setSelectedOption] = useState("All")
    const item = useTodosFiltered()    
    const todos = useTodos()
    console.log('todos')

    useEffect(() => {
        if(selectedOption.value){
            item.dispatchFilter({status:selectedOption.value , todos:todos})
        }
    },[todos , selectedOption])

    const changeHandler = (e) => {
        setSelectedOption(e);
        // dispatch({type:'filter-todo' , status:e.value})
    }

    const options = [
        { value: 'All Todos', label: 'All Todos' },
        { value: 'Done List', label: 'Done List' },
        { value: 'Not Done', label: 'Not Done'}
    ]

    return (
        <div className="flex justify-between w-96 mb-4 ">
            <div className="flex p-2 pb-0 font-semibold text-xl">
                {unDoneTodos ? 
                <>
                    <span className="w-8 h-8 rounded-3xl bg-red-100 border-2 border-gray-700">{unDoneTodos}</span>
                    <h2 className="pl-2">Are Not Done</h2>
                </>
                :  <h2 className="pl-2">Set Your New Todos !</h2>
                }
            </div>
            <Select options={options} value={selectedOption} onChange={(e) => changeHandler(e)} className="w-40 relative"/>
        </div>
    )
}

export default Navbar;