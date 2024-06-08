import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-10 pt-4'>
      <h1 className='text-3xl font-bold text-secondary'>Logo</h1>
      <ul className='flex justify-around mx-12'>
        <Link href='/about' className='mx-4 text-xl text-secondary font-medium cursor-pointer hover:font-extrabold'>About us</Link>
        <Link href='/' className='mx-4 text-xl text-secondary font-medium cursor-pointer hover:font-extrabold'>Products</Link>
        <Link href='/login' className='mx-4 text-xl text-secondary font-medium cursor-pointer hover:font-extrabold'>Login</Link >
        <Link href='/' className='mx-4 text-xl text-secondary font-medium cursor-pointer hover:font-extrabold'>Carrinho</Link>
      </ul>
    </div>
  )
}

export default Header
