import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
          ] = useCreateUserWithEmailAndPassword(auth);

          let signInError;

          if (error) {
                    signInError = <p className='text-red-500'><small>{error?.message}</small></p>
          }
          if (loading) {
                    return (
                              <div className='min-h-screen text-center justify-items-center '>
                                        <span class="loading loading-ball loading-lg"></span>
                              </div>
                    );
          }
          if (user) {
                    return (
                              <div>
                                        <p>Registered User: {user.user.email}</p>
                              </div>
                    );
          }
          return (
                    <div>
                              <div className="bg-gray-100 min-h-screen flex flex-col justify-center sm:py-12">
                                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                                                  <h1 className="font-bold text-center text-2xl mb-5">Sign Up</h1>
                                                  <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                                                            <div className="px-5 py-7">
                                                                      <form>
                                                                                <label
                                                                                          className="font-semibold text-sm text-gray-600 pb-1 block"
                                                                                >Name</label>
                                                                                <input
                                                                                          type="text"
                                                                                          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                                                                />
                                                                                <label
                                                                                          className="font-semibold text-sm text-gray-600 pb-1 block"
                                                                                >Email</label>
                                                                                <input
                                                                                          type="text"
                                                                                          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                                                                          value={email}
                                                                                          onChange={(e) => setEmail(e.target.value)}
                                                                                />
                                                                                <label
                                                                                          className="font-semibold text-sm text-gray-600 pb-1 block"
                                                                                >Password</label>
                                                                                <input
                                                                                          type="password"
                                                                                          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                                                                          value={password}
                                                                                          onChange={(e) => setPassword(e.target.value)}
                                                                                />
                                                                                 {signInError}
                                                                                <button
                                                                                          type="submit"
                                                                                          className="transition duration-200 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 focus:bg-blue-700 focus:outline-none rounded-lg px-3 py-2 text-white w-full"
                                                                                          onClick={() => createUserWithEmailAndPassword(email, password)}
                                                                                >Register</button>
                                                                      </form>
                                                            </div>
                                                            <div className="py-5 mx-8">
                                                                      <div className="grid grid-cols-2 gap-1">
                                                                                <div className="text-center sm:text-left whitespace-nowrap">
                                                                                          <Link to="/" className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Forgot password?</Link>
                                                                                </div>
                                                                                <div className="text-center sm:text-right whitespace-nowrap">
                                                                                          <Link to="/login" className="transition duration-200 hover:text-blue-500 text-gray-600 text-sm font-semibold">Log in</Link>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <SocialLogin></SocialLogin>
                                                  </div>
                                        </div>
                              </div>

                    </div>
          );
};

export default SignUp;