import { memo } from "react";
import PropTypes from "prop-types";

const InputFieldComponent = ({ hasError, ...props }) => {
  const nameArray = props.name.split("_");
  const capitalizedName = nameArray
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");
  return (
    <div className="mt-3 md:mt-0 md:ml-6 md:flex-auto w-full">
      <input
        type="text"
        placeholder={capitalizedName}
        className={`border border-slate-300 duration-300 focus:outline-none  focus:ring-1 h-14 px-5 rounded tracking-wide w-full
          ${
            hasError
              ? "border-pink-600 focus:border-pink-600 focus:ring-pink-600"
              : "border-slate-300 focus:ring-indigo-600 focus:border-indigo-600"
          }
          `}
        {...props}
      />
    </div>
  );
};

InputFieldComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

export default memo(InputFieldComponent);
