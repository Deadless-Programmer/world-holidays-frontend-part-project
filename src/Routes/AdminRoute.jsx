import React from 'react'
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location_path =useLocation();
    const [isAdmin, isAdminLoading] =useAdmin();

    if (loading ||  isAdminLoading )
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <BeatLoader  color="#FFA500" loading={true} size={15} />
          </div>
        ); 
  if(user && isAdmin ){
    return children;
  }

  

  return <Navigate to="/signInUpForm"  state={{from:location_path}} replace></Navigate>
}

export default AdminRoute