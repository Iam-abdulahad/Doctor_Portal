import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

          if (error) {
                    return (
                              <div>
                                        <p>Error: {error.message}</p>
                              </div>
                    );
          }
          if (loading) {
                    return <p>Loading...</p>;
          }
          if (user) {
                    return (
                              <div>
                                        <p>Signed In User: {user.email}</p>
                              </div>
                    );
          }


          return (
                    <div>
                              <div className="bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                                        <div className="py-4 px-6">
                                                  <h2 className="text-center font-bold text-2xl mb-4">or</h2>

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