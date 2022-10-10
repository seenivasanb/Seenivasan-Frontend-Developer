import CapsulesReducer, { capsulesInitialState } from "./capsules-reducer";
import LoaderReducer, { LoaderInitialState } from "./loader-reducer";

export const rootInitialState = {
  capsulesState: capsulesInitialState,
  loaderState: LoaderInitialState,
};

const RootReducer = (state, action) => {
  return {
    capsulesState: CapsulesReducer(state.capsulesState, action),
    loaderState: LoaderReducer(state.loaderState, action),
  };
};

export default RootReducer;