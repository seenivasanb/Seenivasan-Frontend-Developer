export const capsulesInitialState = {
  listOfCapsules: [],
  listOfCurrentCapsules: [],
  currentPageNumber: 0,
  noOfCapsulesPerPage: 6,
  noOfPages: 0,
  isPopupVisibile: false,
  selectedCapsule: {},
};

const getListOfCapsules = (pageNumber, noOfCapsulesPerPage, listOfCapsules) => {
  const startFrom = pageNumber * noOfCapsulesPerPage;
  return listOfCapsules?.slice(startFrom, startFrom + noOfCapsulesPerPage);
};

const CapsulesReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_LIST_OF_CAPSULES": {
      const { listOfCapsules } = action.payload;
      const { noOfCapsulesPerPage } = state;
      const currentPageNumber = 0;
      const listOfCurrentCapsules = getListOfCapsules(
        currentPageNumber,
        noOfCapsulesPerPage,
        listOfCapsules
      );
      const noOfPages = Math.ceil(listOfCapsules.length / noOfCapsulesPerPage);
      return {
        ...state,
        listOfCurrentCapsules,
        listOfCapsules,
        noOfPages,
        currentPageNumber,
      };
    }

    case "UPDATE_CURRENT_PAGE": {
      const { pageNumber } = action.payload;
      const { noOfCapsulesPerPage, listOfCapsules } = state;
      const listOfCurrentCapsules = getListOfCapsules(
        pageNumber,
        noOfCapsulesPerPage,
        listOfCapsules
      );
      return { ...state, listOfCurrentCapsules, currentPageNumber: pageNumber };
    }

    case "SHOW_CAPSULE_POPUP": {
      console.log(action.payload);
      return {
        ...state,
        isPopupVisibile: true,
        selectedCapsule: action.payload,
      };
    }

    case "HIDE_CAPSULE_POPUP": {
      return { ...state, isPopupVisibile: false, selectedCapsule: {} };
    }

    default:
      return state;
  }
};

export default CapsulesReducer;
