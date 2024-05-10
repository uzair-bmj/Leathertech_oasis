import React, { useContext, useEffect, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import Navbar from "../Landing Page/Navbar"
import Footer from "../Landing Page/Footer"
import { Authentication } from '../../Context/AuthContext'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Login() {

    const [loginemail, setloginemail] = useState('');
    const [loginpassword, setloginpassword] = useState('');
    const [error, seterror] = useState(false);
    const { users, setusers, verifyuser, setverifyuser, profile, setprofile, } = useAuth();
    const { loading, setLoading } = useContext(Authentication);

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    const navigate = useNavigate()

    const finduser = users.find((items) => { return items.Email == loginemail && items.pass == loginpassword })

    function login(e) {
        e.preventDefault()
        setLoading(true)
        if (finduser) {
            navigate('/');
            setloginemail('');
            setloginpassword('');
            setverifyuser(true)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
        else {
            seterror(true)
        }
    }

    return (
        <>
            <Navbar />

            <div className='bg-gray-300 h-screen flex justify-center items-center  md:mt-8'>
                <form action="">
                    <div className=' bg-gray-100  py-10 px-10 rounded-xl shadow-lg flex flex-col gap-y-7 login w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[35vw]' data-aos = "fade-up">
                        <h1 className='text-2xl text-center font-medium' data-aos = "fade-up">LOGIN</h1>
                        <input type="email" className='py-2 px-4 rounded ' required placeholder='Email' onChange={(e) => setloginemail(e.target.value)}  data-aos = "fade-up"/>
                        <input type="Password" className='py-2 px-4 rounded ' required placeholder='Password' onChange={(e) => setloginpassword(e.target.value)} data-aos = "fade-up" />
                        <p className='text-sm md:text-md'>Don't have an account? <Link to="/signup"><a href="" className='text-blue-600'>Signup</a></Link></p>
                        <input className='px-4 py-2 btn rounded-full font-bold cursor-pointer hover:text-white ' type='submit' value='Login' onClick={login} data-aos = "fade-up" />
                    </div>
                </form>
                {
                    error && (
                        <>
                            <div className='modal-wrapper'></div>
                            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                                <h1 className='text-xl font-medium'>Invalid Email or Password</h1>
                                <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => seterror(false)}>OK</button>
                            </div>

                        </>
                    )
                }
            </div>

            <Footer />
        </>

    )
}
