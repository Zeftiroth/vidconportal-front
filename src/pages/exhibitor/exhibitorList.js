import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

function ExhibitorList() {
  const [exhiList, setExhiList] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  let { loginData, setLoginData } = useContext(LoginContext);
  console.log(loginData);
  let history = useHistory();
  const dispatch = useDispatch();
  let token = localStorage.getItem("auth-token");
  const FetchUserList = async () => {
    await axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "exhibitors"
        // , {
        //     headers: { "x-auth-token": token },
        // }
      )
      .then((res) => {
        console.log(res.data);
        let tempData = res.data;
        setExhiList(tempData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    FetchUserList();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let delID = e.target.id;
    await axios
      .delete(process.env.REACT_APP_BACKEND_URL + `exhibitors/delete`, {
        headers: { "x-auth-token": token },

        params: { user: delID },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    history.push(`/participantProfile/${e.target.id}`);
  };
  return (
    <>
      <div>
        <div>User List</div>
        <div>
          {!_.isEmpty(exhiList) ? (
            exhiList.map((user) => {
              return (
                <>
                  <div id={user._id}>
                    {user.username}

                    <button id={user._id} onClick={handleDelete}>
                      Delete
                    </button>
                  </div>
                  <div>
                    <button id={user._id} onClick={handleRedirect}>
                      Profile
                    </button>
                  </div>
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

export default ExhibitorList;
