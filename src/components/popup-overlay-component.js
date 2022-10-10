import { memo, useContext } from "react";
import StoreContext from "../contexts";

const PopupOverlayComponent = () => {
  const { isPopupVisibile, hideCapsulePopup, selectedCapsule } =
    useContext(StoreContext);

  const convertToDate = (timeStamp) => {
    const date = new Date(timeStamp);
    return (
      toDoubleDigit(date.getUTCDate()) +
      "/" +
      toDoubleDigit(date.getUTCMonth() + 1) +
      "/" +
      date.getUTCFullYear()
    );
  };

  const toDoubleDigit = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div className={`popup-overlay-panel ${!isPopupVisibile ? "hidden" : ""}`}>
      <div className="bg-black/50 flex fixed h-full justify-center items-center left-0 top-0 w-full z-20">
        <div className="rounded-xl bg-gradient-to-l from-indigo-700 to-pink-700 relative p-3 pt-0 shadow-lg shadow-pink-500/50">
          <div className="bg-white w-[85vw] md:w-[40vw]">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-l from-indigo-700 to-pink-700 flex h-36 md:h-48 justify-start items-center pl-6 md:pl-10 relative w-full">
                <span
                  className={`absolute animate-bounce bottom-0 flex font-bold justify-center items-center h-[80px] md:h-[120px] right-4 md:right-14 rounded-full shadow-md uppercase text-white tracking-wide w-[80px] md:w-[120px] 
                ${selectedCapsule.status === "active" ? " bg-green-600" : ""}
                ${selectedCapsule.status === "destroyed" ? " bg-red-600" : ""}
                ${selectedCapsule.status === "retired" ? " bg-blue-600" : ""}
                ${selectedCapsule.status === "unknown" ? " bg-amber-500" : ""}`}
                >
                  {selectedCapsule.status ? selectedCapsule.status : "N/A"}
                </span>
                <h2 className="font-bold my-2 md:my-4 text-6xl md:text-8xl text-white">
                  {selectedCapsule.capsule_serial
                    ? selectedCapsule.capsule_serial
                    : "N/A"}
                </h2>
              </div>
              <div className="border-b px-6 md:px-12 py-6 md:py-8 w-full">
                <h3 className="font-semibold text-xl md:text-2xl">
                  Dragon 1.0
                </h3>
                {selectedCapsule.details && (
                  <div className="mt-3 text-sm md:text-base text-slate-500">
                    {selectedCapsule.details}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 grid-flow-row gap-x-10 md:gap-x-20 gap-y-8 place-self-start my-4 md:my-8 px-6 md:px-12">
                <div>
                  <div className="font-semibold mb-2 text-sm">Missions</div>
                  <div className="text-sm min-w-[20vw]">
                    {selectedCapsule?.missions?.map((mission) => (
                      <span
                        key={mission.name}
                        className="bg-slate-500 cursor-pointer inline-block mr-2 mb-2 last:mb-0 px-3 py-1 rounded-full text-white whitespace-nowrap"
                      >
                        {mission.name} ({mission.flight})
                      </span>
                    ))}
                    {!selectedCapsule.missions ||
                      (selectedCapsule.missions.length === 0 && "N/A")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm">Landings</div>
                  <div className="text-slate-500">
                    {selectedCapsule.landings !== null
                      ? selectedCapsule.landings
                      : "N/A"}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm">Reuse Count</div>
                  <div className="text-slate-500">
                    {selectedCapsule.reuse_count
                      ? selectedCapsule.reuse_count
                      : "N/A"}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm">Launched On</div>
                  <div className="text-slate-500">
                    {selectedCapsule.original_launch
                      ? convertToDate(selectedCapsule.original_launch)
                      : "N/A"}
                  </div>
                </div>
              </div>

              <div
                onClick={() => hideCapsulePopup()}
                className="absolute bg-pink-500 cursor-pointer duration-300 flex font-bold h-[48px] md:h-[70px] justify-center items-center rounded-full -right-3 md:-right-6 hover:shadow-xl shadow-lg text-white text-2xl -top-6 w-[48px] md:w-[70px]"
              >
                &#x2715;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PopupOverlayComponent);
