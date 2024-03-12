import { MakeIcon } from './components/Icons'
import { ThemeSwitcher } from './components/Switch'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { GitLink } from './components/GitLink'
import { AutomaticFill } from './components/AutomaticFill'
import { LanguageSelect } from './components/LanguageSelect'

function App () {
  return (
    <>
      <Navbar className='border-b-1 border-divider'>
        <NavbarBrand>
          <MakeIcon />
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <GitLink />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className=' py-6 px-11 flex-1 flex'>
        <section className=' max-w-72 flex  gap-2 flex-col flex-1 '>
          <AutomaticFill />
          <LanguageSelect />
        </section>
      </main>
    </>
  )
}

export default App
