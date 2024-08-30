import React from 'react'

const Footer = ({length}) => {
// const year = new Date()
  return (
    <footer className='copy'>{length}  List {length === 1 ? "item" : "items"}
    </footer>
  )
}

export default Footer