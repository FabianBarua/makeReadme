export const readmeReducer = (state, action) => {
  if (action.type === 'ADD_SELECTED_TECHNOLOGIES') {
    const { newTech } = action.payload
    const updatedSelectedTechnologies = [...state.selectedTechnologies, newTech]
    return {
      ...state,
      selectedTechnologies: updatedSelectedTechnologies
    }
  }

  if (action.type === 'DELETE_SELECTED_TECHNOLOGIES') {
    const { id } = action.payload
    const updatedSelectedTechnologies = state.selectedTechnologies.filter(item => item.id !== id)
    return {
      ...state,
      selectedTechnologies: updatedSelectedTechnologies
    }
  }

  return state
}
