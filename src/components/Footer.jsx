import React from 'react'
import Container from './Container'
import { TypeAnimation } from 'react-type-animation'

const Footer = () => {

  return (
    <div className='border-b mt-auto border-slate-400 border-t border-t-slate-300'>
        <Container>
            <p className='text-center h-20 px-4  text-red-50 sm:px-0  sm:h-auto   py-3 text-xl sm:text-2xl font-semibold'>
              <TypeAnimation sequence={[
                `Let's Be together forever`,
               
              ]} cursor={false} speed={10}  />
            </p>
        </Container>
    </div>
  )
}

export default Footer