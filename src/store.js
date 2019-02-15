export const initialState = { name: 'Sébastien', editMode: false }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name }
    case 'enterEditMode':
      return { ...state, editMode: true }
    case 'leaveEditMode':
      return { ...state, editMode: false }
    default:
      throw new Error('Invalid action:', action)
  }
}

export const actions = {
  setName: name => ({ type: 'setName', name }),
  enterEditMode: () => ({ type: 'enterEditMode' }),
  leaveEditMode: () => ({ type: 'leaveEditMode' })
}

export const selectors = {
  getName: state => state.name,
  getEditMode: state => state.editMode
}
