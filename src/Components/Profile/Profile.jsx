import React, { useEffect, useState } from 'react'
import Navbar from '../Landing Page/Navbar'
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [name, setname] = useState({})
  const navigate = useNavigate()

  const { users, setusers, profile, setprofile } = useAuth();
  const found = users.find((items) => { return items.Email == profile })

  useEffect(() => {
    if (found) {
      setname(found)
    }
    else {
      navigate('/login')
    }

  }, [profile])



  return (
    <>
      <div className='bg-gray-300 h-[100vh]'>
        <div className='w-80vw flex flex-col justify-center items-center '>
          <div className=' rounded-full mt-32 px-10 py-10 cursor-pointer hover:bg-gray-500 hover:scale-110 transition-all delay-100' style={{ border: "1px solid gray" }}>
            <i className="fa-regular fa-user cursor-pointer " style={{ fontSize: "80px" }}></i>
          </div>
          <div className='mt-16 flex justify-between w-[30vw]'>
            <div className='flex flex-col gap-8'>
              <h1 className='text-xl font-bold'>Full Name</h1>
              <h1 className='text-xl font-bold'>Email</h1>
            </div>
            <div className='flex flex-col gap-8'>
              <h1 className='text-xl'>{name.fullName}</h1>
              <h1 className='text-xl'>{name.Email}</h1>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
