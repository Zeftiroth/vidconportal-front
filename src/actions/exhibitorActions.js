import axios from "axios";

export const GetExhibitor = (props) => async (dispatch) => {
  try {
    dispatch({
      type: "EXHIBITOR_LOADING",
    });
    let token = localStorage.getItem("auth-token");
    const res = await axios.get(`http://vidconportal.herokuapp.com/exhibitors/${props}`, {
      headers: { "x-auth-token": token },
    });
    console.log(props);
    dispatch({
      type: "EXHIBITOR_SUCCESS",
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: "EXHIBITOR_FAIL",
    });
  }
};
