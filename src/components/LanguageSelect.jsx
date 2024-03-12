import { Button, Chip, ScrollShadow, useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import { SearchLanguage } from './SearchLanguages'

export const LanguageSelect = () => {
  const [LanguageSelected, setLanguageSelected] = useState([])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className=' w-full gap-2 flex flex-col max-h-40 p-2 rounded-lg bg-default-50 overflow-auto'>
      <div className=' flex items-center justify-between'>
        <p>Languages</p>
        <Button size='sm' variant='ghost' onPress={onOpen}>Add</Button>
        <SearchLanguage isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
      {LanguageSelect.length > 0 && (
        <ScrollShadow hideScrollBar className=' flex-1 flex flex-wrap gap-1  '>
          <Chip onClose={() => console.log('delete')} variant='flat' />
        </ScrollShadow>
      )}
    </div>
  )
}
