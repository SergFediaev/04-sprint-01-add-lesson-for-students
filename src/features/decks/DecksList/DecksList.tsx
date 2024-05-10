import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { setDecks } from '../decks-reducer.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    decksApi.fetchDecks().then(decks => dispatch(setDecks(decks)))
  }, [dispatch])

  const items = decks.map(deck => <DeckItem key={deck.id} deck={deck} />)

  return <ul className={s.list}>{items}</ul>
}