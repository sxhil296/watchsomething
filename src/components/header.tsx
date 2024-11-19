import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='fixed px-4 py-2 w-full top-0 bg-yellow-600'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>WatchSomething</h1>
        <Button>Share</Button>
      </div>
    </header>
  )
}

export default Header
