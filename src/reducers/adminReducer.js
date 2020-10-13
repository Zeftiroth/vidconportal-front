
const initialState = [
    {

        loading: false,
        data: [],    
        error: ''
    


    
    }

]

const adminReducer = (state=initialState, action) => {
    switch (action.type) {
      case "ADMIN_LOADING":
        return {
          ...state,
          loading: true,
          error: "",
        };

      case "ADMIN_FAIL":
        return {
          ...state,
          loading: false,
          error: "Fail to get admin list",
        };

      case "ADMIN_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: "",
        };

      default:
        return state;
    }
}

export default adminReducer