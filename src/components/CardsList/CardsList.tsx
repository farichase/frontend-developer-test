import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCards, sortAmount, sortRate } from '../../store/actionCreator/cards';
import { useTypedSelector } from '../hooks/useTypedelector';
import classes from './CardsList.module.css'
import Card from './Card/Card';
import Button from '../UI/button/Button';
import Select from '../UI/select/Select';
import Input from '../UI/input/Input';

enum SortOptions {
    SORT = 'Сортировка по',
    NOT_SORT = 'Не сортировать',
    RATE_SORT = 'По возрастанию ставки',
    AMOUNT_SORT = 'По возрастанию суммы' 
}

const CardsList: React.FC = () => {
    const [numberOfElements, setnumberOfElements] = useState(10)
    const [selectedSort, setSelectedSort] = useState('')
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
    const sortCards = (sort: string) => {
        setSelectedSort(sort)
        if (sort === SortOptions.NOT_SORT) dispatch(fetchCards())
        if (sort === SortOptions.RATE_SORT) dispatch(sortRate())
        if (sort === SortOptions.AMOUNT_SORT) dispatch(sortAmount())
    }
    return (
        <section>
            <div className={classes.btns}>
                <Input placeholder='Название организации'/>
                <Select 
                    value={selectedSort}
                    onChange={sortCards}
                    defaultValue={SortOptions.SORT}
                    options={[
                        {value: SortOptions.RATE_SORT},
                        {value: SortOptions.AMOUNT_SORT},
                        {value: SortOptions.NOT_SORT}
                    ]}
                />
            </div>
            <div className={classes.items}>
                {
                    slice.map((card, index) => {
                        return (
                            <Card index={index} card={card} key={index}/>
                        )
                    })
                }
                <Button onClick={() => loadMore()}>Показать еще</Button>
            </div>
        </section>
    )
}
export default CardsList