'use client'
import React from 'react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'

const SearchInput = () => {

  const placeholders = ['Search for tech', 'Find your style', 'Explore futuristic gear', 'Seek the latest innovations'];

  return (
    <div
      className='h-10 w-72'
    >
      <PlaceholdersAndVanishInput
        onChange={(e) => console.log(e.target.value)}
        placeholders={placeholders}
        onSubmit={(e) => console.log(e)}
      />
    </div>
  )
}

export default SearchInput