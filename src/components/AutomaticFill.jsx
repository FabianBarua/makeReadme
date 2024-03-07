import { Input, Tooltip, Button } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { toastError, toastPromise } from './Toast'
import { validateGitHubRepoLink } from './../logic/validateGitUrl'

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

  async function getRepoLanguages (username, repoName) {
    const url = `https://api.github.com/repos/${username}/${repoName}/languages`

    const resp = await toastPromise({
      promise: fetch(url),
      loading: 'Fetching languages...',
      success: 'Languages fetched successfully!',
      error: 'Error in fetching languages.'
    })

    if (resp instanceof Error) {
      console.error('Error:', resp.message)
    } else {
      console.log('Response:', resp)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (value === '') {
      toastError({ text: 'Ingresa la url del repositorio.' })
      return
    }
    if (isInvalid) {
      toastError({ text: 'Ingresa una url correcta.' })
      return
    }

    const matchResult = value.match(/github\.com\/([^/]+)\/([^/]+)/)
    const username = matchResult && matchResult[1]
    const repoName = matchResult && matchResult[2]

    if (username && repoName) {
      getRepoLanguages(username, repoName)
    } else {
      toastError({ text: 'Hubo un error.' })
    }
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
        delay={1000}
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
