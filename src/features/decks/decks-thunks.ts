import { decksApi } from './decks-api.ts'
import { setDecks } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecks = (dispatch: AppDispatch) => decksApi.fetchDecks().then(response => dispatch(setDecks(response.data.items)))