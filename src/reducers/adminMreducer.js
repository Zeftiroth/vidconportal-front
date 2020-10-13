const initialState = [
  {
    loading: false,
    data: {},
    error: "",
  },
];

const adminMReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADMIN_M_LOADING":
        return {
          ...state,
          loading: true,
          error: "",
        };
      case "ADMIN_M_FAIL":
        return {
          ...state,
          loading: false,
          error: "no admin found",
        };
      case "ADMIN_M_SUCCESS":
        return {
          ...state,
          loading: false,
          error: "",
          data: action.payload
        };
      default:
        return state;
    }
}

export default adminMReducer