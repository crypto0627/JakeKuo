import React from 'react'

interface AnimatedMenuIconProps {
  isOpen: boolean
  toggle: () => void
}

const AnimatedMenuIcon: React.FC<AnimatedMenuIconProps> = ({
  isOpen,
  toggle
}) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 border-none bg-transparent cursor-pointer"
      onClick={toggle}
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
      ></span>
    </button>
  )
}

export default AnimatedMenuIcon
