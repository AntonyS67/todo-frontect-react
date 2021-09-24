import { ChevronLeftIcon } from '@heroicons/react/solid'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from '../../context/TodoContext'
import Alert from '../Alert'

function Create() {
    const [name,setName] = useState('')
    const [error,setError] = useState(false)

    const todoContext = useContext(TodoContext)
    const {addTodo,errorApi} = todoContext;

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(name.trim() !== ''){
            setError(false)
            addTodo(name,1)
        }else{
            setError(true)
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <h1 className="text-nav text-2xl bold">Crear ToDo</h1>
                <Link to="/" className="transform motion-safe:hover:scale-110 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-nav ">
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
            </div>
            <div className="mt-5">
                {errorApi && <Alert content="Ocurrio un error" type='error'/>}
                {error && <Alert content="Complete el campo porfavor" type='error'/>}
                <form onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="text-gray-700">Todo Name</span>
                        <input type="text" onChange={e => setName(e.target.value)} className="form-input mt-1 block w-full border-2 border-current p-1 rounded-lg focus:outline-none" placeholder="tarea"/>
                    </label>
                    <button className=" mt-5 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-nav ">
                        Crear
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create
