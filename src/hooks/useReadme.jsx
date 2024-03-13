/* eslint-disable no-unused-vars */
import { useReducer } from 'react'
import { readmeReducer } from './../reducers/readmeReducer'

const INITIAL_STATE = {
  selectedTechnologies: []
}

export const useReadme = () => {
  const [state, dispatch] = useReducer(readmeReducer, INITIAL_STATE)

  const addSelectedTechnologies = (newTech) => {
    return dispatch({ type: 'ADD_SELECTED_TECHNOLOGIES', payload: { newTech } })
  }

  const deleteSelectedTechnologies = (id) => {
    return dispatch({ type: 'DELETE_SELECTED_TECHNOLOGIES', payload: { id } })
  }

  return { readme: state, addSelectedTechnologies, deleteSelectedTechnologies }
}
