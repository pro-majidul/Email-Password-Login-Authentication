import React, { useState } from 'react';
import { auth } from './../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
     const [errorMassage , setErrorMassage] = useState(' ')
    const handelSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMassage('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
                setErrorMassage(error.message)
            })
    }
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl ml-4 font-bold">Sign up now!</h1>
            <form onSubmit={handelSignUp} className="card-body">
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
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            {
                errorMassage && <h3 className='text-xl text-red-400 font-bold'>{errorMassage}</h3>
            }
        </div>
    );
};

export default Signup;