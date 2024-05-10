import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  async fetchDecks() {
    return await instance.get<FetchDecksResponseType>('/v2/decks')
  },
} as const

type FetchDecksResponseType = {
  items: Deck[]
  pagination: Pagination
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type Author = {
  id: string
  name: string
}