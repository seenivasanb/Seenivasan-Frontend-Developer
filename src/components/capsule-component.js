import { memo, useContext } from "react";
import PropTypes from "prop-types";
import StoreContext from "../contexts";

const CapsuleComponent = ({ capsule }) => {
  const { status, capsule_serial, type, details } = capsule;
  const { showCapsulePopup } = useContext(StoreContext);

  return (
    <div
      className="border rounded-lg overflow-hidden cursor-pointer duration-300 flex flex-col hover:shadow-lg items-center"
      onClick={() => showCapsulePopup(capsule)}
    >
      <div className="bg-gradient-to-l from-indigo-800 to-pink-800 flex h-48 items-center justify-center relative w-full">
        <span
          className={`absolute -bottom-4 font-bold left-1/2 px-8 py-2 rounded-full shadow-md text-white -translate-x-1/2 
        ${status === "active" ? " bg-green-600" : ""}
        ${status === "destroyed" ? " bg-red-600" : ""}
        ${status === "retired" ? " bg-sky-600" : ""}
        ${status === "unknown" ? " bg-amber-500" : ""}
        `}
        >
          {capsule?.status?.toUpperCase()}
        </span>
        <h2 className="font-bold my-4 text-6xl text-white">
          {capsule_serial ? capsule_serial : "XXX"}
        </h2>
      </div>
      <div className="p-6 pt-10 w-full">
        <h3 className="font-semibold text-xl">{type ? type : ""}</h3>
        {details && (
          <div className="mt-3 text-sm text-slate-500">{details}</div>
        )}
      </div>
    </div>
  );
};

CapsuleComponent.propTypes = {
  capsule: PropTypes.shape({
    status: PropTypes.string,
    capsule_serial: PropTypes.string,
    type: PropTypes.string,
    details: PropTypes.string,
  }),
};

export default memo(CapsuleComponent);
