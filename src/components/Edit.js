import React , {useState , useRef , useEffect} from 'react'

function Edit ({text , edit}) {

    const [ editText , setEditText] = useState(text)
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const inputHandler = e => setEditText(e.target.value)

    return (
        <div className="flex  justify-center">
                <div  className="flex justify-between w-96 h-20 items-center rounded px-4 border-2 border-gray-700 bg-red-100">
                    <div>
                        <input value={editText} onChange={inputHandler} className="p-1 rounded focus:outline-none border-2 text-xl font-semibold border-gray-700" ref={inputRef} />
                    </div>
                    <div>
                        <button type="button" onClick={() => edit(editText)} className="mx-1 bg-blue-400 w-12 h-7 rounded border-2 border-gray-700 font-semibold">Edit</button>
                    </div>
                </div>
        </div>         
    )
}

export default Edit ;