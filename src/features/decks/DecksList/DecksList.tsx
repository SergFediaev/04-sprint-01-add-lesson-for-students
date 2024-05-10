import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  const items = decks.map(deck => <DeckItem key={deck.id} deck={deck} />)

  return <ul className={s.list}>{items}</ul>
}