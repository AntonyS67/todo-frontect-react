import React from 'react'

function Button({title,color,isPrincipal=false,action=null,disabled=false}) {
    return (
        <button disabled={disabled} onClick={action} className={` mr-2 ${isPrincipal ? `text-xs bg-${color}-600 py-2 px-4 rounded-full text-white hover:text-${color}-200` :`text-${color}-600 hover:text-${color}-900`}`}>
            {title}
        </button>
    )
}

export default Button
