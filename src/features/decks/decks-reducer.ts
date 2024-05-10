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
    case 'DECKS/SET-DECKS':
      return { ...state, decks: action.payload.decks }
    case 'DECKS/ADD-DECK':
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecks> | ReturnType<typeof addDeckAC>

export const setDecks = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS', payload: { decks },
} as const)

export const addDeckAC = (deck: Deck) => ({ type: 'DECKS/ADD-DECK', payload: { deck } } as const)