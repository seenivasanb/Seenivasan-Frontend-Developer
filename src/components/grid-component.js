import { lazy, memo, Suspense, useContext } from "react";
import StoreContext from "../contexts";
import LoaderComponent from "./loader-component";
const CapsuleComponent = lazy(() => import("./capsule-component"));

const GridComponent = () => {
  const { isBlocked, isDataAvailable, isFailed, listOfCurrentCapsules } =
    useContext(StoreContext);

  return (
    <>
      <div className="mb-16 min-h-[100px] relative">
        {!isBlocked && isDataAvailable && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6 lg:gap-8">
            {listOfCurrentCapsules?.map((capsule) => {
              return (
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center w-full border min-h-[200px]">
                      <LoaderComponent />
                    </div>
                  }
                  key={capsule._id}
                >
                  <CapsuleComponent capsule={capsule} />
                </Suspense>
              );
            })}
          </div>
        )}

        {isBlocked && (
          <div className="bg-white duration-500 flex items-start justify-start left-0 top-0 w-full z-10">
            <div className="w-[250px] h-full m-auto text-2xl text-violet-800">
              <img src="./img/searching.jpg" />
              <div className="mt-4 text-2xl text-pink-600 text-center">
                Searching
                <LoaderComponent />
              </div>
            </div>
          </div>
        )}

        {!isBlocked && !isDataAvailable && !isFailed && (
          <div className="w-[250px] m-auto">
            <img src="./img/data-not-found.jpg" />
            <div className="text-2xl text-pink-600 text-center">
              No data found!
            </div>
          </div>
        )}

        {isFailed && (
          <div className="text-2xl text-pink-600">
            Oops! currently server is unavailable, please try after sometime!
          </div>
        )}
      </div>
    </>
  );
};

export default memo(GridComponent);
