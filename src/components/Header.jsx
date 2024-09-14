import React from 'react'
import Container from './Container'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {

  return (
    <div className='border-b border-slate-400'>
        <Container>
            <p className='text-center h-20 px-4  text-red-50 sm:px-0  sm:h-auto   py-3 text-xl sm:text-2xl font-serif font-semibold'>
              <TypeAnimation sequence={[
                `MEMORY OF HAPPY 4TH ANNIVERSARY`,
               
              ]} cursor={false} speed={10}  />
            </p>
        </Container>
    </div>
  )
}

export default Header