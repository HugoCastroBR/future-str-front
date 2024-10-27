import React from 'react'

const OutlineButton = ({
  children,
}:{
  children:React.ReactNode
}) => {
  return (
    <button className="flex gap-2 shadow-[0_0_0_3px_#000000_inset] px-2 py-1 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
      {children}
    </button>
  )
}

export default OutlineButton