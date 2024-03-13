/* eslint-disable react/prop-types */
import { createContext } from 'react'
import { useReadme } from '../hooks/useReadme'

export const ReadmeContext = createContext()

export const ReadmeProvider = ({ children }) => {
  const { readme, addSelectedTechnologies, deleteSelectedTechnologies } = useReadme()

  return (
    <ReadmeContext.Provider value={{ readme, addSelectedTechnologies, deleteSelectedTechnologies }}>
      {children}
    </ReadmeContext.Provider>
  )
}
