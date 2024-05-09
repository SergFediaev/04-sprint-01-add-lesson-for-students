import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'

export const DecksList = () => {
  useEffect(() => {
    const decks = decksApi.fetchDecks()
    console.log(decks)
  }, [])

  return <ul className={s.list}></ul>
}
