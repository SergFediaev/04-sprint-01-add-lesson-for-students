import { decksApi } from './decks-api.ts'
import { addDeckAC, setDecks } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecks = () => (dispatch: AppDispatch) => decksApi.fetchDecks().then(response => dispatch(setDecks(response.data.items)))

export const addDeckTC = (name: string) => (dispatch: AppDispatch) => decksApi.addDeck(name).then(response => dispatch(addDeckAC(response.data)))