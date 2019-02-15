import React, { useCallback } from 'react'
import { useStore } from '../utils/ministore'
import { selectors, actions } from '../store'

const Greetings = () => {
  const [state, dispatch] = useStore()
  const name = selectors.getName(state)

  const onEditNameClick = useCallback(() => {
    dispatch(actions.enterEditMode())
  }, [])

  return (
    <p>
      Hello <strong>{name}</strong>!
      <button onClick={onEditNameClick}>Edit name</button>
    </p>
  )
}

export default Greetings
