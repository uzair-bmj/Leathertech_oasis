import React, { useState } from 'react';
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function Login() {
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const { users, setusers, verifyuser, setverifyuser, profile, setprofile } = useAuth();
    const [emailauth, setemailauth] = useState('');
    const [passauth, setpassauth] = useState('');
    const [userexist, setuserexist] = useState(false);


    const navigate = useNavigate();

    const person = {
        fullName: fullname,
        Email: email,
        pass: password
    };

    function signup(e) {
        e.preventDefault()
        const userfind = users.find((items) => items.Email === person.Email);

        if (!userfind) {
            if (email.includes("@gmail.com")) {
                if (password.length >= 6) {
                    console.clear();
                    users.push(person);

                    console.log(users);
                    navigate("/");
                    setemail('');
                    setfullname('');
                    setPassword('');
                    setemailauth('');
                    setpassauth('');
                    setprofile(person.Email)
                    console.log(person)
                    setverifyuser(true)


                } else {
                    setpassauth("Password must have at least 6 characters");
                }
            } else {
                setemailauth("Invalid Email");
            }
        } else {
            setuserexist(true);
        }
    }

    return (
        <>
            <div className='bg-gray-300 h-screen flex justify-center items-center mt-6'>
                <form action="" onSubmit={signup}>
                    <div className='bg-gray-100 py-10 px-10 rounded-xl shadow-lg flex flex-col gap-y-7 login relative w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw]' >
                        <h1 className='text-2xl text-center font-medium'>SIGNUP</h1>
                        <input type="text" className='py-2 px-4 rounded ]'  placeholder='Full Name' value={fullname} onChange={(e) => setfullname(e.target.value)} />
                        <p className='absolute text-red-700 top-[48%] left-11 text-sm'>{emailauth}</p>
                        <p className='absolute text-blue-700 top-[48%] left-11 text-sm'>{userexist}</p>
                        <input type="email" className='py-2 px-4 rounded  '  placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
                        <input type="password" className='py-2 px-4 rounded  '  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className='absolute text-blue-700 top-[64%] text-sm'>{passauth}</p>
                        <p>Already a user? <Link to="/login"><a href="" className='text-blue-600'>Login</a></Link></p>
                        <input className='px-4 py-2 sbtn rounded-full font-bold cursor-pointer' type='submit' onClick={signup} value="Signup" />
                    </div>
                </form>

                {
                    userexist && (
                        <>
                            <div className='modal-wrapper'></div>
                            <div className='container rounded shadow-lg py-4 px-4 max-w-[15rem]'>
                                <h1 className='text-xl font-medium'>User Already Exists</h1>
                                <button className='modalbtn py-1 mt-2 px-4 text-xl rounded-xl font-medium' onClick={() => setuserexist(false)}>OK</button>
                            </div>



                        </>
                    )
                }


            </div >
        </>
    );
}
