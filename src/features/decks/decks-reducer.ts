import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.payload.decks }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecks>

export const setDecks = (decks: Deck[]) => ({
  type: 'SET-DECKS', payload: { decks },
})