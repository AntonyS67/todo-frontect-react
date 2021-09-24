import React from 'react'

function Span({title,color}) {
    return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color}-100 text-${color}-800`}>
            {title}
        </span>
    )
}

export default Span
