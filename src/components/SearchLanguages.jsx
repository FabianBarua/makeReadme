/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from '@nextui-org/react'
import { useState } from 'react'

export const SearchLanguage = ({ isOpen, onOpenChange }) => {
  const [value, setValue] = useState('')

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
      <ModalContent className=' h-unit-8xl'>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-2'>
              <p>Search technology</p>
              <Input
                placeholder='Javascript...'
                value={value}
                onValueChange={setValue}
              />
            </ModalHeader>
            <ModalBody />
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
