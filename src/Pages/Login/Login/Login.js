import React, { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const Login = () => {

    const emailRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth)
    const [token] = useToken(user)

    const handleSignIn = async event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        await signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast("Send Password Reset in your email")
        }
        else {
            toast("Please enter your email")
        }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error || passwordResetError) {
        console.log(error || passwordResetError);
    }

    if (token) {
        navigate(from, { replace: true })
    }

    return (
        <section className="login mx-auto my-5" style={{ maxWidth: "600px", width: "100%" }}>
            <h3 className="text-center">Please Login</h3>
            <p className="text-center text-danger">{error?.message || passwordResetError?.message}</p>
            <div className="login-form shadow rounded p-4 my-4">
                <form onSubmit={handleSignIn}>
                    <input type="email" name='email' placeholder='Enter your email' ref={emailRef} className='form-control mb-3' />
                    <input type="password" name='password' placeholder='Enter your password' className='form-control mb-3' />
                    <input type="submit" value="Login" className='btn btn-info text-white mx-auto d-block' />
                    <p className='mt-3 mb-2'>Need an account? <Link to='/register'>Register Now</Link></p>
                    <p >Forget your password? <span className='text-warning' style={{ cursor: "pointer" }} onClick={resetPassword}>Reset Now</span></p>
                </form>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Login;