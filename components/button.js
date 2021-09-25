import React from 'react'
import Link from 'next/link'

export const Button = ({
    children,
    type,
    onClick,
}) => {
    return(
       
        <a onClick={onClick} type={type} >
            {children}
        </a>

    )
}