import { ADD_TODO, COMPLETE_TODO, ERROR_TODO, GET_TODOS } from "../types/todoTypes";

const TodoReducer = (state,action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos:action.payload.data,
                totalItems:action.payload.total,
                currentPage:action.payload.current_page,
                lastPage:action.payload.last_page,
                errorApi:false
            }
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,action.payload],
                errorApi:false
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos:[...state.todos],
                errorApi:false
            }
        case ERROR_TODO:
            return {
                ...state,
                errorApi:true
            }
        default:
            return state;
    }
}

export default TodoReducer;