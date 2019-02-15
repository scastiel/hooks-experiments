import React, { useCallback, useState } from 'react'
import { useStore } from '../utils/ministore'
import { selectors, actions } from '../store'

const NameForm = () => {
  const [state, dispatch] = useStore()
  const initialName = selectors.getName(state)
  const [name, setName] = useState(initialName)

  const onChange = useCallback(event => {
    setName(event.target.value)
  }, [])

  const onSubmit = useCallback(
    event => {
      event.preventDefault()
      dispatch(actions.setName(name))
      dispatch(actions.leaveEditMode())
    },
    [name]
  )

  return (
    <form onSubmit={onSubmit}>
      <label>
        What is your name?{' '}
        <input name="name" value={name} onChange={onChange} />
      </label>
      <button type="submit">Ok</button>
    </form>
  )
}

export default NameForm
