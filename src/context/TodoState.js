import { useReducer } from "react"
import { clientAxios } from "../config/axios"
import { COMPLETE_TODO, DELETE_TODO, ERROR_TODO, GET_TODOS } from "../types/todoTypes"
import { TodoContext } from "./TodoContext"
import TodoReducer from "./TodoReducer"

const TodoState = props => {
    const initialState = {
        todos:[],
        totalItems:0,
        currentPage:1,
        lastPage:0,
        errorApi:false
    }
    
    const [state,dispatch] = useReducer(TodoReducer,initialState)

    const getAllTodos = async (page) => {
        try {
            const resp = await clientAxios.get('/todo?page='+page);
            dispatch({
                type:GET_TODOS,
                payload:resp.data,
            })
        } catch (error) {
            dispatch({
                type:ERROR_TODO,
                payload:true
            })
        }
    }

    const addTodo = async (name,user) => {
        try {
            const resp = await clientAxios.post('/todo',{name,user_id:user})
            dispatch({
                type:GET_TODOS,
                payload:resp.data.data
            })
        } catch (error) {
            dispatch({
                type:ERROR_TODO,
                payload:true
            })
        }
    }

    const completeTodo = async (id,status) => {
        const resp = await clientAxios.put('/todo/'+id,{complete:status})
            dispatch({
                type:COMPLETE_TODO,
                payload:resp.data.data
            })
    }

    const deleteTodo = async (id) => {
        try {
            const resp = await clientAxios.delete('/todo/'+id)
            dispatch({
                type:DELETE_TODO,
                payload:resp.data.data
            })
        } catch (error) {
            dispatch({
                type:ERROR_TODO,
                payload:true
            })
        }
    }

    return (
        <TodoContext.Provider
            value={{
                todos:state.todos,
                totalItems:state.totalItems,
                errorApi:state.errorApi,
                getAllTodos,
                addTodo,
                completeTodo,
                deleteTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState