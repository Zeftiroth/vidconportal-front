const initialState = [
  {
    loading: false,
    data: [],
    error: "",
    
  },
];

const adminAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADMIN_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "ADD_ADMIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload + "Fail to get register admin",
      };

    case "ADD_ADMIN_SUCCESS":
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

export default adminAddReducer;
