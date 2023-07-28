import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

          let signInError;
          const [token] = useToken(user);
          const navigate = useNavigate();
          const location = useLocation();
          let from = location.state?.from?.pathname || "/";

          useEffect(() => {
                    if (token) {
                              navigate(from, { replace: true });
                    }
          }, [token, from, navigate])

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

          return (
                    <div>
                              <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                                        <div className="py-4 px-6">
                                                  <h2 className="text-center font-bold text-2xl mb-4">or</h2>
                                                  {signInError}
                                                  <button
                                                            onClick={() => signInWithGoogle()}
                                                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                                                            Sign in with Google
                                                  </button>

                                        </div>
                              </div>

                    </div>
          );
};

export default SocialLogin;