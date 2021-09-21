import { CardsState, CardsActionTypes, CardsAction } from "../../types/cards"
const initalState: CardsState = {
    cards: [],
    error: null
}

export const cardsReducer = (state = initalState, action : CardsAction) : CardsState => {
    switch(action.type) {
        case CardsActionTypes.FETCH_CARDS:
            return {cards: [], error: null}
        case CardsActionTypes.FETCH_CARDS_SUCCESS:
            return {cards: action.payload, error: null}
        case CardsActionTypes.FETCH_CARDS_ERROR:
            return {cards: [], error: action.payload}
        default:
            return state
    }
}