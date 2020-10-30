import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import LoginContext from "../../context/LoginContext";


function UserList() {
    const [userList, setUserList] = useState([])
    const userInfo = useSelector((state) => state.userInfo);
    console.log(userInfo);
    let { loginData, setLoginData } = useContext(LoginContext);
    console.log(loginData);
    let history = useHistory();
    const dispatch = useDispatch();
    let token = localStorage.getItem("auth-token");
    const FetchUserList = async () => {
        await axios.get(process.env.REACT_APP_BACKEND_URL + "users"
        // , {
        //     headers: { "x-auth-token": token },
        // }
        ).then((res) =>{
            console.log(res.data)
            let tempData = res.data
            setUserList(tempData)

        }).catch((err) =>{
            console.log(err.message)
            
        })
    }
    useEffect(() => {
        FetchUserList()

    },[])
    
    return (
      <>
        <div>
          <div>User List</div>
          <div>
            {!_.isEmpty(userList) ? (
              userList.map( (user) => {
                return (
                  <>
                    <div id={user._id}>{user.username}</div>
                  </>
                );
              })
            ) : (
              <>
                <div>Loading...</div>
              </>
            )}
          </div>
        </div>
      </>
    );
}

export default UserList
