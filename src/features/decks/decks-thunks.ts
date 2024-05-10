import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDeckAC, setDecks } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecks = () => (dispatch: AppDispatch) => {
  decksApi.fetchDecks().then(response => dispatch(setDecks(response.data.items)))
}

export const addDeckTC = (params: AddDeckParams) => (dispatch: AppDispatch) => decksApi.addDeck(params).then(response => dispatch(addDeckAC(response.data)))