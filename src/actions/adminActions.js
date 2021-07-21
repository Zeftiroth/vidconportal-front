import axios from "axios";

export const GetAdminList = () => async dispatch => {
    try {
        dispatch({
            type:"ADMIN_LOADING"
        });
        const res = await axios.get(`http://vidconportal.herokuapp.com/admins`);

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
    const res = await axios.get(`http://vidconportal.herokuapp.com/admins/${id}`);
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

export const AddAdmin = (props) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_ADMIN_LOADING",
        
        })
        const result = await axios.post(`http://vidconportal.herokuapp.com/admins/add`, {
          adminName:  props.adminName, 
          email: props.email,
          password: props.password,

          
        });

        dispatch({
          type: "ADD_ADMIN_SUCCESS",
          payload: result.data
        })

    } catch (err) {
      dispatch({
        type: "ADD_ADMIN_ERROR",
        payload: err.message
      })
    }
}