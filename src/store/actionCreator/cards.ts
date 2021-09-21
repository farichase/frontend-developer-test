import axios from "axios"
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react"
import { CardsAction, CardsActionTypes } from "../../types/cards"

export const fetchCards = () => {
    return async (dispatch: Dispatch<CardsAction>) => {
        try {
            dispatch({type: CardsActionTypes.FETCH_CARDS})
            const response = await axios.get("http://localhost:8080/cards/")
            dispatch({type: CardsActionTypes.FETCH_CARDS_SUCCESS, payload: response.data.data})
        } catch (e) {
            dispatch({
                type: CardsActionTypes.FETCH_CARDS_ERROR, 
                payload: 'Не удалось загрузить карточки'
            })
        }
    }
}
export const sortRate = () => {
    return async (dispatch: Dispatch<CardsAction>) => {
        try {
            dispatch({type: CardsActionTypes.FETCH_CARDS})
            const response = await axios.get("http://localhost:8080/cards/")
            const data = response.data.data.sort(
                (a: any, b: any) => 
                (+a.rate.periods[0].rate.from > +b.rate.periods[0].rate.from ? 1 : -1)
            )
            dispatch({type: CardsActionTypes.FETCH_CARDS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: CardsActionTypes.FETCH_CARDS_ERROR, 
                payload: 'Не удалось загрузить карточки'
            })
        }
    }
} 
export const sortAmount = () => {
    return async (dispatch: Dispatch<CardsAction>) => {
        try {
            dispatch({type: CardsActionTypes.FETCH_CARDS})
            const response = await axios.get("http://localhost:8080/cards/")
            const data = response.data.data.sort(
                (a: any, b: any) => 
                (+a.rate.creditAmount.from > +b.rate.creditAmount.from ? 1 : -1)
            )
            dispatch({type: CardsActionTypes.FETCH_CARDS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: CardsActionTypes.FETCH_CARDS_ERROR, 
                payload: 'Не удалось загрузить карточки'
            })
        }
    }
} 