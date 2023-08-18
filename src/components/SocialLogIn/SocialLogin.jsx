import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message)
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">

      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G</button>
      </div>
    </div>
  );
};

export default SocialLogin;