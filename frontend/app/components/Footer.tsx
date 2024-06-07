import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 bg-primary mt-8'>
      <ul className="flex justify-around text-secondary">
        <Link href='/'>Teste</Link>
        <Link href='/'>Teste</Link>
        <Link href='/'>Teste</Link>
      </ul>
    </div>
  )
}

export default Footer
