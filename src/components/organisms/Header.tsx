import React from 'react'
import Logo from '../atoms/Logo'
import LinkButton from '../atoms/LinkButton'
import { ShoppingCart, UserCircle } from 'lucide-react'
import SearchInput from '../molecules/SearchInput'

function Header() {
  return (
    <header
      className='
      flex justify-between items-center p-4 h-14
      text-primary-foreground bg-ebony-clay-950
      bg-opacity-95 backdrop-blur-sm shadow-lg 
      '
    >
      <div>
        <Logo/>
      </div>
      <div
        className='flex gap-12'
      >
        <LinkButton
          text='NEW'
          textColor='white'
          underlineColor='white'
        />
        <LinkButton
          text='OFFERS'
          textColor='white'
          underlineColor='white'
        />
        <LinkButton
          text='POPULAR'
          textColor='white'
          underlineColor='white'
        />
        <LinkButton
          text='EXCLUSIVE'
          textColor='white'
          underlineColor='white'
        />


      </div>
      <div
        className='flex gap-4'
      >
        <SearchInput/> 
        <ShoppingCart/>
        <UserCircle/>
      </div>
    </header>
  )
}

export default Header