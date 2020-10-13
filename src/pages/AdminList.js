import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetAdminList } from "../actions/adminActions";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminList() {
  const dispatch = useDispatch();
  const adminList = useSelector((state) => state.adminL);
  console.log(adminList.data);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(GetAdminList());
  };

  const handleAdminDelete = (e) => {
    e.preventDefault();
    let id = e.target.id;

    let answer = prompt("Are you sure you want to delete this Admin? y/n");
    answer.toLowerCase();
    if (answer === "y") {
      axios
        .delete(`http://localhost:5000/admins/delete/${id}`)
        .then((response) => {
          console.log(response);
          alert(`Successfully deleted admin`);
          FetchData();
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert(`Delete Action canceled`);
  };

  const showAdminList = () => {
    if (!_.isEmpty(adminList.data)) {
      return (
        <div>
          {adminList.data.map((admin) => {
            return (
              <div>
                <div>
                  {admin.adminName.firstName} {admin.adminName.lastName}{" "}
                  <Link to={`/editAdmin/${admin._id}`}>Edit</Link>{" "}
                  <Link id={admin._id} onClick={handleAdminDelete}>
                    Delete
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        // <p>
        // have data
        // </p>
      );
    }

    if (adminList.loading) {
      return <p>Loading...</p>;
    }

    if (adminList.error !== "") {
      return <p>{adminList.error}</p>;
    } else return <p>no admin found</p>;
  };
  return (
    <div>
      <div>Admin List</div>
      <div>{showAdminList()}</div>
    </div>
  );
}

export default AdminList;
