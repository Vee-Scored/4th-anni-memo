import React from 'react'

const Container = ({children,classes}) => {
  return (
    <div className={`max-w-5xl   px-5  mx-auto ${classes}`}>
        {children}
    </div>
  )
}

export default Container