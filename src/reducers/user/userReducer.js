const initialState = [
  {
    loading: false,
    data: [],
    error: "",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "USER_FAIL":
      return {
        ...state,
        loading: false,
        error: "Fail to get USER",
      };

    case "USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default userReducer;
