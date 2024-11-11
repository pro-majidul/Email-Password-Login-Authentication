import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.init";
import { useRef, useState } from "react";

const Login = () => {
    const [successlogin, setSuccessLogin] = useState('')
    const [errorMassage, setErrorMassage] = useState('')
    const emailRef = useRef()
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccessLogin('')
        setErrorMassage('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (!result.user.emailVerified) {
                    setErrorMassage('please Varified your email address')
                }
                else {

                    setSuccessLogin('SuccessFully Login')
                }
            })
            .catch(error => {
                console.log(error.message);
                setSuccessLogin('')
                setErrorMassage(error.message)
            })
    }

    const handelforgetpassword = () => {
        console.log('handel email password reset added');
        const email = emailRef.current.value;
        if (!email) {
            return alert('please provide a valide email address')
        }
        else{
            sendPasswordResetEmail(auth , email)
            .then(()=> alert('pasword reset send your email'))
            .catch(error => console.log(error))
        }
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handelforgetpassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            successlogin && <p className="text-green-400 font-bold text-xl">{successlogin}</p>
                        }
                        {
                            errorMassage && <p>{errorMassage}</p>
                        }
                        <p> New user . Please <NavLink to='/signup'>Sign Up</NavLink> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;