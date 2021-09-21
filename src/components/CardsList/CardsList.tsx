import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCards, sortAmount, sortRate } from '../../store/actionCreator/cards';
import { useTypedSelector } from '../hooks/useTypedelector';
import classes from './CardsList.module.css'
import Card from './Card/Card';

enum Buttons {
    CARDS = 'CARDS',
    CARDS_SORT_RATE = 'CARDS_SORT_RATE',
    CARDS_SORT_AMOUNT = 'CARDS_SORT_AMOUNT' 
}

const CardsList: React.FC = () => {
    const [numberOfElements, setnumberOfElements] = useState(10)
    const [activeButton, setActiveButton] = useState('cards')
    const { cards, error } = useTypedSelector(state => state.cards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCards())
    }, [])
    if (error) {
        return <h1>{error}</h1>
    }
    const slice = cards.slice(0, numberOfElements)
    const loadMore = () => {
        setnumberOfElements(numberOfElements + 10)
    }
    const sortCardRate = () => {
        setActiveButton(Buttons.CARDS_SORT_RATE)
        dispatch(sortRate())
    }
    const sortCardAmount = () => {
        setActiveButton(Buttons.CARDS_SORT_AMOUNT)
        dispatch(sortAmount())
    }
    const sortOut = () => {
        setActiveButton(Buttons.CARDS)
        dispatch(fetchCards())
    }
    return (
        <section>
            <div className={classes.btns}>
                <button className={
                        activeButton === Buttons.CARDS_SORT_RATE 
                        ? classes.activebtn 
                        : classes.btn
                    } onClick={() => sortCardRate()}>
                    Сортировать по возрастанию ставки
                </button>
                <button className={
                        activeButton === Buttons.CARDS_SORT_AMOUNT 
                        ? classes.activebtn 
                        : classes.btn
                    } onClick={() => sortCardAmount()}>
                    Сортировать по возрастанию суммы
                </button>
                <button className={
                        activeButton === Buttons.CARDS 
                        ? classes.activebtn 
                        : classes.btn
                    } onClick={() => sortOut()}>
                    Вернуть первоначальный вид
                </button>
            </div>
            <div className={classes.items}>
                {
                    slice.map((card, index) => {
                        return (
                            <Card index={index} card={card} />
                        )
                    })
                }
                <button className={classes.btn} onClick={() => loadMore()}>
                    Показать еще
                </button>

            </div>
        </section>
    )
}
export default CardsList