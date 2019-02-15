import React, {
  createContext,
  useReducer,
  useContext,
  useCallback
} from 'react'

const StoreContext = createContext()

export const Provider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const newDispatch = useCallback(async action => {
    if (typeof action === 'function') {
      await action(dispatch)
    } else {
      dispatch(action)
    }
  }, [])
  return (
    <StoreContext.Provider value={[state, newDispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
