import axios from "axios";

export const GetUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOADING",
    });
    let token = localStorage.getItem("auth-token");
    
    const res = await axios.get(`http://localhost:5000/users/`, 
    // {
    //   headers: { "x-auth-token": token },
    // }
    );
    console.log(res)
    dispatch({
      type: "USER_SUCCESS",
      payload: res,

     
    });
  } catch (err) {
    dispatch({
      type: "USER_FAIL",
    });
  }
};
