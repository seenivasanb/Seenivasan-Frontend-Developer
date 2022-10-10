import { memo, useContext } from "react";
import StoreContext from "../contexts";

const PagenationComponent = () => {
  const {
    currentPageNumber,
    isBlocked,
    isDataAvailable,
    listOfCapsules,
    listOfCurrentCapsules,
    noOfCapsulesPerPage,
    noOfPages,
    updateCurrentPage,
  } = useContext(StoreContext);

  return (
    <>
      {isDataAvailable && !isBlocked && (
        <section className="mb-14">
          <div className="flex flex-initial mb-8">
            <button
              className={`cursor-pointer duration-300 font-bold mr-3 md:mr-4 rounded p-2 md:p-4 shadow-sm hover:shadow-md text-xl md:text-3xl text-center w-16 md:w-20 ${
                currentPageNumber === 0
                  ? "bg-slate-500 pointer-events-none text-white"
                  : "bg-slate-50 cursor-pointer hover:shadow-lg text-slate-500"
              }`}
              onClick={() =>
                updateCurrentPage(
                  currentPageNumber > 0
                    ? currentPageNumber - 1
                    : currentPageNumber
                )
              }
            >
              &lt;&lt;
            </button>
            {noOfPages > 0 &&
              Array(noOfPages)
                ?.fill(0)
                .map((x, i) => {
                  return (
                    <button
                      key={i}
                      className={`duration-300 font-bold flex-auto mr-3 md:mr-4 rounded p-2 px-3 md:p-4 shadow-sm hover:shadow-md text-xl md:text-2xl text-center ${
                        i === currentPageNumber
                          ? "bg-slate-500 pointer-events-none text-white"
                          : "bg-slate-50 cursor-pointer hover:shadow-lg text-slate-500"
                      }`}
                      onClick={() => updateCurrentPage(i)}
                    >
                      {i + 1}
                    </button>
                  );
                })}
            <button
              className={`cursor-pointer duration-300 font-bold rounded p-2 md:p-4 shadow-sm hover:shadow-md text-xl md:text-3xl text-center w-16 md:w-20 ${
                currentPageNumber === noOfPages - 1
                  ? "bg-slate-500 pointer-events-none text-white"
                  : "bg-slate-50 cursor-pointer hover:shadow-lg text-slate-500"
              }`}
              onClick={() =>
                updateCurrentPage(
                  currentPageNumber < noOfPages - 1
                    ? currentPageNumber + 1
                    : currentPageNumber
                )
              }
            >
              &gt;&gt;
            </button>
          </div>

          <div className="text-2xl text-right">
            <span className="font-bold text-2xl text-indigo-700">
              {listOfCurrentCapsules.length !== 1 && (
                <span>
                  {currentPageNumber * noOfCapsulesPerPage + 1}
                  <span className="font-normal text-slate-500"> to </span>
                </span>
              )}
              <span>
                {listOfCurrentCapsules.length < noOfCapsulesPerPage
                  ? listOfCapsules.length
                  : currentPageNumber * noOfCapsulesPerPage +
                    noOfCapsulesPerPage}
              </span>
            </span>
            <span className="mx-1"> of </span>
            <span className="font-bold text-2xl text-pink-700">
              {listOfCapsules.length}
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(PagenationComponent);
