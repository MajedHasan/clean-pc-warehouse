import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
    const location = useLocation()

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <>
            <div className='text-center my-5 mx-auto p-4 rounded shadow-lg' style={{ maxWidth: '500px', width: "100%" }}>
                <p className='text-danger'>{error?.message}</p>
                <h2 className='text-danger'>Your Email is not verified!!!</h2>
                <h4 className='text-success mb-4'>Please Verify your email address</h4>
                <button className='btn btn-info text-white'
                    onClick={async () => {
                        await sendEmailVerification()
                        toast("Verification Email sent")
                    }}
                >Send Verification again</button>
            </div>
        </>
    }

    return children;
};

export default RequireAuth;