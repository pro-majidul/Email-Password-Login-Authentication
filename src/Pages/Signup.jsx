import React, { useState } from 'react';
import { auth } from './../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoIosEyeOff } from 'react-icons/io';

const Signup = () => {
    const [errorMassage, setErrorMassage] = useState(' ');
    const [success, setSuccess] = useState(false);
    const [showPassword, setSowPassword] = useState(false)

    const handelSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        setErrorMassage('');
        setSuccess(false)
        console.log(terms , email , password);
        if (!terms) {
            setErrorMassage('please checked terms and conditions');
            return
        }

        if (email.length < 6) {
            setErrorMassage(message)
            return
        }

        const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!regularExpression.test(password)) {
            setErrorMassage('At least One number , one UpperCase , one LowerCase , One Digits and one special charecter');
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess(true)
            })
            .catch(error => {
                console.log(error.message);
                setErrorMassage(error.message);
                setSuccess(false)
            })
    }
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl ml-4 font-bold">Sign up now!</h1>
            <form onSubmit={handelSignUp} className="card-body relative">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder="password"
                        className="input input-bordered" required />
                    <button
                        onClick={() => setSowPassword(!showPassword)}
                        className='absolute right-10 top-44'>
                        {
                            showPassword ? <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye> : <IoIosEyeOff></IoIosEyeOff>
                        }
                    </button >
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer justify-start label">
                        <input type="checkbox" name='terms' className="checkbox checkbox-warning" />
                        <span className="label-text ml-2">Accep our Terms and Conditions</span>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            {
                errorMassage && <h3 className='text-xl text-red-400 font-bold'>{errorMassage}</h3>
            }
            {
                success && <p className='text-xl font-bold text-green-300'> Successfully sign in</p>
            }
        </div>
    );
};

export default Signup;