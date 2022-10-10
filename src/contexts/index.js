import { createContext, useReducer } from "react";
import RootReducer, { rootInitialState } from "../reducers";
import { fetchCapsules } from "../services";

const StoreContext = createContext();
export const StoreConsumer = StoreContext.Consumer;
export default StoreContext;

export const StoreProvider = ({ children }) => {
  const [
    {
      capsulesState: {
        currentPageNumber,
        isPopupVisibile,
        listOfCapsules,
        listOfCurrentCapsules,
        noOfCapsulesPerPage,
        noOfPages,
        selectedCapsule,
      },
      loaderState: { isPending, status },
    },
    dispatch,
  ] = useReducer(RootReducer, rootInitialState);

  const getCapsules = async ({ ...fields }) => {
    try {
      dispatch({ type: "ENABLE_LOADER" });
      const response = await fetchCapsules({ ...fields });
      if (response.status) {
        dispatch({
          type: "LOAD_LIST_OF_CAPSULES",
          payload: {
            listOfCapsules: response.data,
          },
        });
      }
      if (response.data === "FAILED") {
        dispatch({ type: "FAILED_LOADER" });
      } else {
        dispatch({ type: "DISABLE_LOADER" });
      }
    } catch (error) {
      dispatch({ type: "FAILED_LOADER" });
    }
  };

  const updateCurrentPage = (pageNumber) => {
    dispatch({
      type: "UPDATE_CURRENT_PAGE",
      payload: { pageNumber },
    });
  };

  const showCapsulePopup = (capsule) => {
    dispatch({
      type: "SHOW_CAPSULE_POPUP",
      payload: capsule,
    });
  };

  const hideCapsulePopup = () => {
    dispatch({
      type: "HIDE_CAPSULE_POPUP",
    });
  };

  return (
    <StoreContext.Provider
      value={{
        currentPageNumber: currentPageNumber,
        getCapsules: getCapsules,
        hideCapsulePopup,
        isBlocked: isPending === true,
        isFailed: status === "FAILED",
        isDataAvailable: listOfCapsules?.length > 0,
        isPopupVisibile: isPopupVisibile,
        listOfCapsules: listOfCapsules,
        listOfCurrentCapsules: listOfCurrentCapsules,
        noOfCapsulesPerPage: noOfCapsulesPerPage,
        noOfPages: noOfPages,
        selectedCapsule,
        showCapsulePopup,
        updateCurrentPage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
