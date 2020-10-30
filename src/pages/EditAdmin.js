import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetAdmin } from "../actions/adminActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

function EditAdmin(props) {
    let history = useHistory();
    let adminID = props.match.params.editAdmin
    const dispatch = useDispatch();
    const adminState = useSelector((state) => state.adminM);
    console.log(adminState)
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [email, setEmail] = useState('');
     
     const [access, setAccess] = useState('');
     const [department, setDepartment] = useState("");
    //  const [password, setPassword] = useState("");
    //  const [confirmPassword, setConfirmPassword] = useState("");

     const handleFirstNameInput = (e) => {
       setFirstName(e.target.value);
     };

     const handleLastNameInput = (e) => {
       setLastName(e.target.value);
     };

     const handleEmailInput = (e) => {
       setEmail(e.target.value);
     };

     const handleAccess = (e) => {
         setAccess(e.target.value)
     }

    //  const handlePasswordInput = (e) => {
    //    setPassword(e.target.value);
    //  };

    //  const handleConfirmPasswordInput = (e) => {
    //    setConfirmPassword(e.target.value);
    //  };

     const postReqPackage = {
       adminName: { firstName, lastName },
       email: email,

       access: access,
     };



      const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName == '' && lastName == '' && email == '') {
          alert('Please do not leave blank fields')
        }
        else
        axios
          .post(`http://localhost:5000/admins/update/${adminID}`, {
            adminName: { firstName, lastName },
            email: email,
            
            access: access,
            department: department,
            // password: password,
          })
          .then((res) => {
            console.log(res);
            alert(`Admin ${firstName}` + ` ${lastName} updated successfully`);
            setFirstName("");
            setLastName("");
            setEmail("");
            dispatch(GetAdmin(adminID))
            // history.push("/adminList");
            
            // setPassword("");
            // setConfirmPassword("");
          })
          .catch((err) => {
            console.log(err);
          });
      };

    
    useEffect(() => {
        dispatch(GetAdmin(adminID))
        
    },[])
    // useEffect(() => {
    //   dispatch(GetAdmin(adminID));
    // }, [handleSubmit()]);
    const ShowData = () => {
        // let adminData = admin.data;
        if (!_.isEmpty(adminState.data)) {
            let admin = adminState.data
            return (
              <div>
                <div>
                  First Name: {admin.adminName.firstName} Last Name:{" "}
                  {admin.adminName.lastName}
                </div>
                <div>Email: {admin.email}</div>
                <div>Access: {admin.access}</div>
                <div>Department: {admin.access}</div>
              </div>
            );
        }

        if (adminState.loading) {
            return <p>loading...</p>
        }
        if (adminState.error !== '') {
            return <p>{adminState.error}</p>
        }
        return <p>no admin found</p>

    }

    return (
      <div>
        <div>
          EditAdmin
          {ShowData()}
        </div>
        <form onSubmit={handleSubmit}>
          <div>First Name</div>
          <input
            value={firstName}
            type="text"
            onChange={handleFirstNameInput}
          />
          <div> Last Name </div>
          <input value={lastName} type="text" onChange={handleLastNameInput} />
          <div> Email </div>
          <input value={email} type="text" onChange={handleEmailInput} />
          <div>
            <div> Department </div>
          <input value={department} type="text" onChange={(e) => setDepartment(e.target.value)} />
          <div></div>
            
            <label > Access </label> 
              <select value={access} onChange={handleAccess}>
                <option value="admin">Admin</option>      
                <option value="superAdmin">Super Admin</option>
              </select>
            <div>

            <button type="submit">Save Edit</button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default EditAdmin
