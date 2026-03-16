// import React from 'react'

type headerProps = {
    title: String
}

function Header({title}: headerProps) {
  return (
    <div className="header">
        <h1>{title}</h1>
    </div>
  )
}

export default Header