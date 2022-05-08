import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)
    }

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to)
        let match = useMatch({ path: resolved.pathname, end: true })
        return (
            <Link
                style={{ color: match ? '#0dcaf0' : '#000000', fontWeight: match ? 'bold' : 'normal' }}
                to={to} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Clean PC House</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <CustomLink className="nav-link active" aria-current="page" to="/inventory">Inventory</CustomLink>
                            </li>
                            {
                                user &&
                                <>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to="/manageitems">Manage Items</CustomLink>
                                    </li>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to="/additem">Add Item</CustomLink>
                                    </li>
                                    <li className="nav-item">
                                        <CustomLink className="nav-link" to="/myitem">My Items</CustomLink>
                                    </li>
                                </>
                            }
                            <li className="nav-item me-5">
                                <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                            </li>
                            {
                                user ? <>
                                    <li className="nav-item">
                                        <span className="nav-link" to="/myitem">{user?.displayName}</span>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger mx-2" onClick={handleLogout}>Logout</button>
                                    </li>
                                </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <CustomLink className="nav-link" to="/login">Login</CustomLink>
                                        </li>
                                        <li className="nav-item">
                                            <CustomLink className="nav-link" to="/register">Register</CustomLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;