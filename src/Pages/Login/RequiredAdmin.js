import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
          const [user, loading] = useAuthState(auth);
          const [admin, adminLoading] = useAdmin(user);
          const location = useLocation();

          if (loading || adminLoading) {
                    return (
                              <div className='min-h-screen text-center justify-items-center '>
                                        <span class="loading loading-ball loading-lg"></span>
                              </div>
                    );
          }

          if (!user || !admin) {
                    signOut(auth);
                    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
          }
          return children;
};

export default RequireAdmin;