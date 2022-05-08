import React from 'react';
import googleImg from '../../../images/social/google.png';
import githubImg from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth)
    const [token] = useToken(googleUser || githubUser)

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleError || githubError) {
        console.log(googleError || githubError);
    }

    if (token) {
        navigate(from, { replace: true })
    }

    return (
        <div className='socialLogin my-4'>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">OR</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <p className='text-center text-danger'>{googleError?.message || githubError?.message}</p>
            <div>
                <button className="btn btn-info d-flex w-50 mx-auto my-2 align-items-center justify-content-center"
                    onClick={() => signInWithGoogle()}
                >
                    <img src={googleImg} style={{ width: "30px", borderRadius: "50%" }} alt="" />
                    <span className='px-2 text-white'>Google Sign In</span>
                </button>
                <button className="btn btn-dark d-flex w-50 mx-auto my-2 align-items-center justify-content-center"
                    onClick={() => signInWithGithub()}
                >
                    <img src={githubImg} style={{ width: "30px", borderRadius: "50%", boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)', background: '#FFFFFF' }} alt="" />
                    <span className='px-2 text-white'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;