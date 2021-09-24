import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";
import Button from "../Button";
import Span from "../Span";
import Pagination from "./Pagination";

export const Index = () => {
  const [change,setChange] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)

  const todoContext = useContext(TodoContext)

  const {todos,totalItems,getAllTodos,completeTodo,deleteTodo} = todoContext

  useEffect(() => {
    getAllTodos(currentPage)
    setChange(false)
    //eslint-disable-next-line
  },[change,currentPage])

  const onDelete = (id) => {
    deleteTodo(id)
    getAllTodos(currentPage)
    setChange(true)
  }
  const onChangeStatus = (id,status) => {
    completeTodo(id,status)
    getAllTodos(currentPage)
    setChange(true)
  }

  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-nav text-2xl bold">TODO List</h1>
        <Link
          to="/create"
          className="transform motion-safe:hover:scale-110 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-nav "
        >
          Add New Todo
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 mt-5">
            <thead className="bg-gray-50">
            <tr>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                ToDo Name
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Completed
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Action
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {todos.map(todo => (
                <tr key={todo.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{todo.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {todo.complete === 1 ? 
                        <Span title="Completo" color="green" />
                        :
                        <Span title="Incompleto" color="red" />
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <Button disabled={todo.complete===1 ? true : false} title="Completar" color={todo.complete===1 ? 'gray': "indigo"} isPrincipal action={()=>onChangeStatus(todo.id,todo.complete === 0 ? 1 : 0)}/>
                      <Button title="Borrar" color="red" action={()=>onDelete(todo.id)}/>
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
      
      <Pagination numberItems={totalItems} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  );
};
