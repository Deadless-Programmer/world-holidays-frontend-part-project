import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const PrivetRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location_path =useLocation();

    if (loading)
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
  if(user){
    return children;
  }

  

  return <Navigate to="/signInUpForm"  state={{from:location_path}} replace></Navigate>
}

export default PrivetRoute