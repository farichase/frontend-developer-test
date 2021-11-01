import React from "react";
import classes from './Select.module.css'
interface Props {
    defaultValue : string,
    value: string,
    options: Array<{value : string}>,
    onChange: (sort : string) => void
}

const Select = (props: Props) => {
    return(
        <select
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className={classes.select}
        >
            <option disabled value="">{props.defaultValue}</option>
            {
                props.options.map((item) => {
                    return(
                        <option key={item.value}>
                            {item.value}
                        </option>
                    )
                })
            }
        </select>
    )
}
export default Select