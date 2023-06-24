import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
          const [user, loading] = useAuthState(auth);
          const location = useLocation();

          if (loading) {
                    return (
                              <div className='min-h-screen text-center justify-items-center '>
                                        <span class="loading loading-ball loading-lg"></span>
                              </div>
                    );
          }

          if (!user) {
                    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
          }
          return children;
};

export default RequireAuth;