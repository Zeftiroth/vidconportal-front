const initialState = [
  {
    loading: false,
    data: [],
    error: "",
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXHIBITOR_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "EXHIBITOR_FAIL":
      return {
        ...state,
        loading: false,
        error: "Fail to get EXHIBITOR",
      };

    case "EXHIBITOR_SUCCESS":
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
