import { useState } from "react"

const Error = ({children}) => {
    return (
        <div className=' bg-red-600 text-white text-center rounded-lg p-3 uppercase '>
            <p>{children}</p>
        </div>
    )
}

export default Error
