import React from 'react'
import classes from './Input.module.css'
interface Props{
    placeholder : string
}

const Input = (props : Props) => {
    return (
        <input className={classes.input} {...props} type="text"/>
    )
}
export default Input