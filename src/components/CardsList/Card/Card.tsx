import React, { useState } from 'react';
import CardType from '../../../types/cardType';
import Button from '../../UI/button/Button';
import Conditionals from '../Conditionals/Conditionals';
import classes from './Card.module.css'

interface Props {
    index: number,
    card: CardType,
}

const Card = (props: Props) => {
    const [isShown, setIsShown] = useState(false);
    const showConditions = () => {
        setIsShown(true)
    }
    const hideConditions = () => {
        setIsShown(false)
    }
    const followingLink = () => {
        window.location.href = "https://www.sravni.ru/ipoteka/wl/"
    }
    return (
        <div className={classes.item}>
            <div className={classes.card} key={props.index}>
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
                    <Button onClick={() => followingLink()}>Перейти на сайт</Button>
                    {
                        isShown
                            ?
                            <Button onClick={() => hideConditions()}>Свернуть условия</Button>
                            :
                            <Button onClick={() => showConditions()}>Показать условия</Button>
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