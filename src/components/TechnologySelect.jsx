import { Button, Chip, ScrollShadow, useDisclosure } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { SearchTechnology } from './SearchTechnology'
import * as svgs from '../../public/svgs.json'

export const TechnologySelect = () => {
  const [technology, setTechnology] = useState([])
  const [technologiesSelected, setTechnologiesSelected] = useState([])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    setTechnology(svgs.default)
  }, [])

  const deleteItem = (idToDelete) => {
    setTechnologiesSelected(prevSelected => prevSelected.filter(item => item.id !== idToDelete))
  }

  return (
    <div className='w-full text-sm gap-3 flex flex-col max-h-40 p-2 rounded-lg bg-default-50 overflow-auto'>
      <div className=' flex items-center justify-between'>
        <p>Technologies</p>
        <Button size='sm' variant='ghost' onPress={onOpen}>Add</Button>
        <SearchTechnology isOpen={isOpen} technologies={technology} technologiesSelected={technologiesSelected} setTechnologiesSelected={setTechnologiesSelected} onOpenChange={onOpenChange} />
      </div>
      {technologiesSelected.length > 0 && (
        <ScrollShadow hideScrollBar className=' flex-1 flex flex-wrap gap-2  '>
          {technologiesSelected.map(item => {
            return (<Chip key={item.id} onClose={() => deleteItem(item.id)} variant='flat'>{item.title}</Chip>)
          })}
        </ScrollShadow>
      )}
    </div>
  )
}
