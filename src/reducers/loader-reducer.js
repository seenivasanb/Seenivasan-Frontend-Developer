export const LoaderInitialState = {
  isPending: false,
  status: "",
};

const LoaderReducer = (state, action) => {
  switch (action.type) {
    case "ENABLE_LOADER": {
      return { ...state, isPending: true, status: "" };
    }

    case "DISABLE_LOADER": {
      console.log("blocked");
      return { ...state, isPending: false };
    }

    case "FAILED_LOADER": {
      return { ...state, isPending: false, status: "FAILED" };
    }

    default:
      return state;
  }
};

export default LoaderReducer;
