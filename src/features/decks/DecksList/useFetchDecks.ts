import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecks } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecks())
  }, [dispatch])

  return { decks }
}