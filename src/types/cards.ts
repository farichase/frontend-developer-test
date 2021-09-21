export interface CardsState {
    cards: any[];
    error: null | string;
}
export enum CardsActionTypes {
    FETCH_CARDS = "FETCH_CARDS",
    FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS",
    FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR",
}
interface FetchCardsAction {
    type: CardsActionTypes.FETCH_CARDS;
}
interface FetchCardsSuccessAction {
    type: CardsActionTypes.FETCH_CARDS_SUCCESS;
    payload: any[];
}
interface FetchCardsErrorAction {
    type: CardsActionTypes.FETCH_CARDS_ERROR;
    payload: string;
}
export type CardsAction = FetchCardsAction | FetchCardsSuccessAction | FetchCardsErrorAction;  
