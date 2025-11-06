import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-red-900 mb-2 text-xl justify-between items-center px-6 py-3'>
      <h1>My Website</h1>
      <div className='flex gap-6'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/product'>Product</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
