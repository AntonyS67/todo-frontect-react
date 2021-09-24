import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function Pagination({numberItems,currentPage,setCurrentPage}) {
  const [numberPages,setNumberPages] = useState(0)

  useEffect(()=>{
    setNumberPages(Math.ceil(numberItems / 10))
    console.log(numberPages);
  },[numberItems])

  const onChangePage = (page) => {
    setCurrentPage(page)
  }
  const pages = []
  for (let index = 0; index < numberPages; index++) {
    pages.push(<button
      onClick={()=>onChangePage(index+1)}
      key={index}
      aria-current="page"
      disabled={currentPage === (index+1) ? true : false}
      className={`${currentPage === (index+1) ? ' z-10 bg-indigo-50 border-indigo-500 text-indigo-600 ' : ' bg-white border-gray-300 text-gray-500 hover:bg-gray-50 '} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
    >
      {index+1}
    </button>)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 w-full">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => onChangePage(currentPage-1)}
          disabled={numberPages>1 ? false : true}
          className={`${numberPages>1 ? ' bg-white hover:bg-gray-50 text-gray-700 ' : 'bg-gray-600 text-white '}relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  `}
        >
          Previous
        </button>
        <button
          onClick={() => onChangePage(currentPage+1)}
          disabled={currentPage===numberPages+1 ? true : false}
          className={`${currentPage===numberPages+1 ? ' bg-white hover:bg-gray-50 text-gray-700 ' : 'bg-gray-600 text-white '} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between w-full">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px w-full"
            aria-label="Pagination"
          >
            <button
              onClick={() => onChangePage(currentPage-1)}
              disabled={numberPages>1 || currentPage===1 ? false : true}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 ${currentPage === 1 ? ' bg-white hover:bg-gray-50 text-gray-300 ' : ' bg-gray-300 text-gray-500 '} text-sm font-medium `}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pages}
            <button
              onClick={() => onChangePage(currentPage+1)}
              disabled={currentPage===numberPages+1 ? true : false}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300  text-sm font-medium  ${currentPage===numberPages ? ' bg-white hover:bg-gray-50 text-gray-300 ' : ' bg-gray-300 text-gray-500 '}`}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
