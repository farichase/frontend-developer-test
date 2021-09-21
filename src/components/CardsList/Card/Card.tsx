import React, { useState } from 'react';
import Conditionals from '../Conditionals/Conditionals';
import classes from './Card.module.css'

interface Props {
    index: number,
    card: any,
}

const Card = (props: Props) => {
    const [isShown, setIsShown] = useState(false);
    const showConditions = () => {
        setIsShown(true)
    }
    const hideConditions = () => {
        setIsShown(false)
    }
    return (
        <div className={classes.item}>
            <div key={props.index} className={classes.card}>
                <div className={classes.column1}>
                    <img src={props.card.organization.logo} alt='#s' />
                </div>
                <div className={classes.column2}>
                    <div>{props.card.rate.periods[0].rate.from} %</div>
                </div>
                <div className={classes.column3}>
                    {
                        props.card.rate.creditAmount.to === undefined
                            ? <div>от {props.card.rate.creditAmount.from} руб.</div>
                            : <div>{props.card.rate.creditAmount.from} - {props.card.rate.creditAmount.to} руб.</div>
                    }
                </div>
                <div className={classes.column4}>
                    <div>Возраст: от {props.card.customerRequirements.age}</div>
                    <div>Количество документов: {props.card.customerRequirements.documents}</div>
                </div>
                <div className={classes.column5}>
                    <form className={classes.formbtn} action="https://www.sravni.ru/ipoteka/wl/">
                        <button className={classes.btnRedirect}>
                            Перейти на сайт
                        </button>
                    </form>
                    
                    {
                        isShown === true
                            ?
                            <button className={classes.btn} onClick={() => hideConditions()}>
                                Свернуть условия
                            </button>
                            :
                            <button className={classes.btn} onClick={() => showConditions()}>
                                Показать условия
                            </button>
                    }
                </div>
            </div>
            {
                isShown && (
                    <Conditionals index={props.index} card={props.card} />
                )
            }
        </div>

    )
}

export default Card