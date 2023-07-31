import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
        const [user, loading, error] = useAuthState(auth);

        const logout = () => {
                signOut(auth);
                localStorage.removeItem('accessToken');
        };
        const menuItems = <>

                <li> <Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/appointment'>Appointment</Link> </li>
                <li> <Link to='/reviews'>Reviews</Link></li>
                <li> <Link to='/contact'>Contact Us</Link></li>
                {
                        user && <li><Link to="/dashboard">Dashboard</Link></li>
                }
                <li>{user ? <button
                        className="btn btn-ghost"
                        onClick={async () => {
                                const success = await logout();
                                if (success) {
                                        alert('You are sign out');
                                }
                        }}
                >Sign Out</button> : <Link to="/login">Login</Link>}</li>

        </>
        return (
                <div className="container mx-auto navbar bg-base-100">
                        <div className="navbar-start">
                                <div className="dropdown">
                                        <label tabindex="0" className="btn btn-ghost lg:hidden ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </label>
                                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                {menuItems}
                                        </ul>
                                </div>
                                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
                        </div>
                        <div className="navbar-end hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                        {menuItems}
                                </ul>
                        </div>
                </div>
        );
};

export default Header;