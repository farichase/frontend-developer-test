import React from "react";
import classes from './Button.module.css'

interface Props {
    children : String,
    onClick : () => void
}

const Button = (props : Props) => {
    return(
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;