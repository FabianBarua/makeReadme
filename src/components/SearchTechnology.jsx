/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, ScrollShadow } from '@nextui-org/react'
import { NoResults } from './NoResults'
import { useDebouncedCallback } from 'use-debounce'

export const SearchTechnology = ({ isOpen, onOpenChange, technologies, technologiesSelected, setTechnologiesSelected }) => {
  const inputRef = useRef(null)

  const handleToggleTechnology = (id, selected) => {
    if (selected) {
      const updatedTechnologies = technologiesSelected.filter((tech) => tech.id !== id)
      setTechnologiesSelected(updatedTechnologies)
    } else {
      const selectedTech = technologies.find((tech) => tech.id === id)
      setTechnologiesSelected([...technologiesSelected, selectedTech])
    }
    inputRef.current.focus()
  }

  const debounced = useDebouncedCallback(
    (value) => {
      setParam(value.target.value)
    },
    300
  )

  const [param, setParam] = useState('')

  const filteredTechnologies = technologies.filter((item) =>
    item.title.toLowerCase().includes(param.toLowerCase())
  )

  useEffect(() => { setParam('') }, [onOpenChange])

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
      <ModalContent className='h-unit-8xl'>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-2'>
              <p>Search technology</p>
              <Input
                placeholder='Search...'
                onChange={(e) => { debounced(e) }}
                ref={inputRef}
              />
            </ModalHeader>
            <ModalBody className='overflow-auto'>
              <ScrollShadow hideScrollBar className='w-full h-full flex flex-col gap-2'>
                {filteredTechnologies.length > 0
                  ? filteredTechnologies.map((item) => {
                    const selected = technologiesSelected.some((tech) => tech.id === item.id)
                    return (
                      <div
                        key={item.id}
                        className='w-full py-2 bg-default-100 text-default-900 p-2 rounded-lg flex justify-between items-center'
                      >
                        <p>{item.title}</p>
                        <Button
                          size='sm'
                          variant='flat'
                          color={selected ? 'danger' : 'default'}
                          onClick={() => handleToggleTechnology(item.id, selected)}
                        >
                          {selected ? 'Remove' : 'Add'}
                        </Button>
                      </div>
                    )
                  })
                  : <NoResults />}
              </ScrollShadow>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onPress={onClose}>
                Finish
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
