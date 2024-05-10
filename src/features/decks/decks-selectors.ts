import { AppRootState } from '../../app/store.ts'

export const selectDecks = (state: AppRootState) => state.decksReducer.decks