import axios from "axios";

export const GetAdminList = () => async dispatch => {
    try {
        dispatch({
            type:"ADMIN_LOADING"
        });
        const res = await axios.get(`http://localhost:5000/admins`);

        dispatch({
          type: "ADMIN_SUCCESS",
          payload: res.data
        });

    }

    catch (err) {
        dispatch({
            type: "ADMIN_FAIL"
        })
    }

}

export const GetAdmin = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ADMIN_M_LOADING",
    });
    const res = await axios.get(`http://localhost:5000/admins/${id}`);
    // console.log(res.data)
    dispatch({
      type: "ADMIN_M_SUCCESS",
      payload: res.data,
      
      admin: id
    });
  } catch (err) {
    dispatch({
      type: "ADMIN_M_FAIL",
    });
  }
};

// export const AddAdmin = (props) => async (dispatch) => {
//     try {
//         dispatch({
//             type: "ADD_ADMIN_LOADING",
        
//         })
//         const result = await axios.post(`http://localhost:5000/admins/add`, {
//           adminName:  props.firstName, props.lastName ,
//           email: props.email,

//           access: access,
//         });
//     }
// }