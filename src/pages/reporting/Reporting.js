import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { useHistory } from "react-router-dom";
import axios from "axios";

function Reporting() {
  let token = localStorage.getItem("auth-token");
  const [exhibitorList, setExhibitorList] = useState([]);
  const fetchData = async () => {
    try {
      let exList = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `exhibitors`,
        {
          headers: { "x-auth-token": token },
        }
      );
      let tlist = exList.data;
      setExhibitorList(tlist);
      console.log(exList.data);
    } catch (error) {
      console.log(error);
    }
  };
  const checkState = () => {
    console.log(exhibitorList);
  };
  if (exhibitorList.length > 0) {
    checkState();
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div>This is the reporting page</div>
        <div>
          {exhibitorList.length > 0 ? (
            <div>
              <table>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Diet</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                </tr>
              </table>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reporting;
