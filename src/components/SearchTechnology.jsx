/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, ScrollShadow } from '@nextui-org/react'
import { NoResults } from './NoResults'
import { useDebouncedCallback } from 'use-debounce'
import { ReadmeContext } from './../context/readme'

export const SearchTechnology = ({ isOpen, onOpenChange, technologies }) => {
  const inputRef = useRef(null)

  const { readme: { selectedTechnologies }, addSelectedTechnologies, deleteSelectedTechnologies } = useContext(ReadmeContext)

  const handleToggleTechnology = (technology, selected) => {
    if (selected) {
      deleteSelectedTechnologies(technology.id)
    } else {
      addSelectedTechnologies(technology)
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

  useEffect(() => {
    if (param !== '') { setParam('') }
  }, [onOpenChange])

  const filteredTechnologies = [...technologies].filter((item) =>
    item.title.toLowerCase().includes(param.toLowerCase())
  )

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
                    const selected = selectedTechnologies.some((tech) => tech.id === item.id)
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
                          onClick={() => handleToggleTechnology(item, selected)}
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
