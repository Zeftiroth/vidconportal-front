import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../actions/userActions";

function AuthOptions() {
  const userInfo = useSelector((state) => state.userInfo)
  const dispatch = useDispatch();
  let { loginData, setLoginData } = useContext(LoginContext);
  const uid = loginData?.data?.uid?.user?._id;
  console.log(loginData)
  useEffect(() => {
    dispatch(GetUser(uid?._id));
    console.log(userInfo)
  }, [])
  const history = useHistory();
  const login = () => {
    history.push("/authRouting");
  };
  


  const logout = () => {
    setLoginData({
      token: undefined,
      data: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <div>
      {loginData.data ? (
        <button className="btn btn-outline-light px-2" onClick={logout}>
          Log Out {loginData.data.data?.username}
        </button>
      ) : (
        <div>
          <button className="btn btn-outline-light px-2" onClick={login}>
            Login or Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthOptions;
