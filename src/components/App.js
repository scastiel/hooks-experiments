import React from 'react'
import { useStore } from '../utils/ministore'
import { selectors } from '../store'
import NameForm from './NameForm'
import Greetings from './Greetings'

const App = () => {
  const [state] = useStore()
  const editMode = selectors.getEditMode(state)

  return editMode ? <NameForm /> : <Greetings />
}

export default App
