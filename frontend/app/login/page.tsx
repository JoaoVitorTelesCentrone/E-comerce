import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <div className='bg-primary h-screen'>
        <Header />
        <div className="p-10 bg-gray-300 mt-24 w-[500px] mx-auto rounded-xl">
            <h1>Nome</h1>
            <input className='bg-white p-3 rounded-xl ' placeholder='Nome' />
            <h1>Senha</h1>
            <input className='bg-white p-3 rounded-xl' placeholder='Senha' />
            <div className="flex justify-between mt-4">
                <button className="p-2 bg-secondary rounded-xl">Login</button>
                <button className="p-2 bg-secondary rounded-xl ">Google</button>
            </div>
        </div>
    </div>
  )
}

export default Login
