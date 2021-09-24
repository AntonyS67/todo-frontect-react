import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="flex p-5 bg-nav text-white h-10 items-center justify-between">
            <Link to="/">Todo</Link>
            <div>
                <Link to="/" className="mr-10" >Registro</Link>
                <Link to="/">Login</Link>
            </div>
        </div>
    )
}

export default Nav
