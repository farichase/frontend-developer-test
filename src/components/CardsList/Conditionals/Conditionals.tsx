import React, { useState } from 'react';
import classes from './Conditionals.module.css'

interface Props {
    index: number,
    card: any,
}

const Conditionals = (props: Props) => {
    const [isShowConditional, setIsShowConditional] = useState(true);
    const showConditions = () => {
        setIsShowConditional(true)
    }
    const showRequirements = () => {
        setIsShowConditional(false)
    }
    return (
        <div className={classes.item}>
            <button className={isShowConditional ? classes.activebtn : classes.btn}
                onClick={() => showConditions()}
            >
                Условия
            </button>
            <button className={!isShowConditional ? classes.activebtn : classes.btn}
                onClick={() => showRequirements()}
            >
                Требования
            </button>
            {
                isShowConditional
                    ?
                    <div className={classes.list}>
                        <div>Цель: {props.card.name}</div>
                        <div>Первоначальный взнос: {props.card.rate.initialAmount.from} %</div>
                        <div>Ставка: {props.card.rate.periods[0].rate.from}</div>
                        <div>{
                            props.card.rate.creditAmount.to === undefined
                                ? <div>Сумма: от {props.card.rate.creditAmount.from} руб.</div>
                                : <div>Сумма: {props.card.rate.creditAmount.from} - {props.card.rate.creditAmount.to} руб.</div>
                        }
                        </div>
                        <div>Срок: {props.card.rate.periods[0].term.from} - {props.card.rate.periods[0].term.to} (мес.)</div>
                    </div>
                    :
                    <div className={classes.list}>
                        <div>Возраст на момент получения: {props.card.customerRequirements.age}</div>
                        <div>Возраст на момент погашения: {props.card.customerRequirements.manAgeAtRepayment}</div>
                        <div>Стаж на последнем месте: {props.card.customerRequirements.lastExperience} (мес.)</div>
                        <div>Общий стаж: {props.card.customerRequirements.fullExperience}</div>
                        <div>Ежемесячный доход: {props.card.customerRequirements.salary}</div>
                    </div>
            }
        </div>

    )
}

export default Conditionals