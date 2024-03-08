import { Input, Tooltip, Button } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { toastError, toastPromise } from './Toast'
import { matchUserAndRepo, validateGitHubRepoLink } from './../logic/validateGitUrl'
import { getLanguages } from './../services/github'

export const AutomaticFill = () => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const isInvalid = useMemo(() => {
    if (value === '') return false
    return !validateGitHubRepoLink(value)
  }, [value])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const [username, repoName] = matchUserAndRepo({ url: value })

    if (!validateGitHubRepoLink(value) & !username && !repoName) {
      toastError({ text: 'Ingresa una url correcta.' })
      return
    }

    // Hace el fetch

    const getLanguagesPromise = getLanguages({ username, repoName })

    toastPromise({
      promise: getLanguagesPromise,
      loading: 'Extrayendo datos...',
      success: 'Datos extraídos!'
    })

    console.log(await getLanguagesPromise)
    console.log('asd')
  }

  return (
    <form className='flex gap-2 w-full' onSubmit={(e) => { handleSubmit(e) }}>
      <Toaster
        position='top-right'
        containerStyle={{
          position: 'absolute',
          top: '15px'
        }}
      />
      <Input
        value={value}
        type='text'
        placeholder='Repositorio Github'
        variant='flat'
        isInvalid={isInvalid}
        color={isInvalid ? 'danger' : isFocused && value !== '' ? 'success' : 'default'}
        errorMessage={isInvalid && 'Ingresa un repositorio valido.'}
        onValueChange={setValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='max-w-xs'
        size='xs'
      />
      <Tooltip
        delay={500}
        color='warning'
        content={
          <div className='px-1 py-2  w-56 '>
            <div className='text-small font-bold'>Atencion!</div>
            <div className='text-tiny'>Esta accion extraer datos del repositorio y reemplaza los del readme.</div>
          </div>
      }
        placement='right'
        showArrow
      >
        <Button variant='ghost' type='submit'>
          Extraer
        </Button>
      </Tooltip>
    </form>
  )
}
