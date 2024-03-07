import { IconGitHub } from './Icons'
import { Button } from '@nextui-org/react'

export const GitLink = () => {
  return (
    <Button
      isIconOnly color='default'
      variant='light'
      aria-label='Change theme'
    >
      <a href='https://github.com/FabianBarua/makeReadme' className=' w-full h-full flex justify-center items-center'>
        <IconGitHub className='w-6 h-6' />
      </a>
    </Button>
  )
}
