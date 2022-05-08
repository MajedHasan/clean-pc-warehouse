import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)
    const [token] = useToken(user)

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })

        if (user) {
            toast("Account Register successfully")
        }
    }

    if (error || updateError) {
        console.log(error?.message || updateError?.message);
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate("/")
    }

    return (
        <section className="register mx-auto my-5" style={{ maxWidth: "600px", width: "100%" }}>
            <h3 className="text-center">Please Register</h3>
            <div className="register-form shadow rounded p-4 my-4">
                <p className='text-danger text-center'>{error?.message || updateError?.message}</p>
                <form onSubmit={handleRegister}>
                    <input type="text" name='name' placeholder='Enter your name' className='form-control mb-3' required />
                    <input type="email" name='email' placeholder='Enter your email' className='form-control mb-3' required />
                    <input type="password" name='password' placeholder='Enter your password' className='form-control mb-3' required />
                    <input type="submit" value="Register" className='btn btn-info text-white mx-auto d-block' />
                    <p className='mt-3 mb-2'>Already Have an account? <Link to='/login'>Login Now</Link></p>
                </form>
            </div>
            <SocialLogin></SocialLogin>
        </section>
    );
};

export default Register;