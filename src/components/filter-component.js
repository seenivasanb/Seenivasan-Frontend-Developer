import { lazy, memo, Suspense, useContext, useEffect, useState } from "react";
import StoreContext from "../contexts";
import _debounce from "lodash.debounce";
import LoaderComponent from "./loader-component";

const InputFieldComponent = lazy(() => import("./input-component"));

const FilterComponent = () => {
  const { getCapsules, isBlocked, isDataAvailable, isFailed } =
    useContext(StoreContext);
  const [queryString, setQueryString] = useState({});
  const defaultFieldErrorStatus = {
    status: false,
    type: false,
    reuse_count: false,
  };
  const [errorQueryString, setErrorQueryString] = useState(
    defaultFieldErrorStatus
  );

  /**
   * Handling search functionality with 500ms debounce to reduce the number of API calls
   * @memberof Menu
   * @param keyword [String] - default value empty string
   */
  const handleSearch = _debounce((e) => {
    const fieldKey = e.target.name;
    const fieldValue = e.target.value;
    if (queryString[fieldKey] !== fieldValue) {
      setQueryString((prevState) => {
        return { ...prevState, [fieldKey]: e.target.value };
      });
    }
  }, 500);

  const setFieldErrors = () => {
    if (!isFailed && !isDataAvailable) {
      const errorKeys = Object.keys(errorQueryString);
      let fieldStatus = {};
      errorKeys.forEach((key) => {
        let isValid = true;
        if (queryString[key]?.length > 0) isValid = false;
        fieldStatus = { ...fieldStatus, [key]: isValid };
      });
      setErrorQueryString((prevState) => {
        return { ...prevState, ...fieldStatus };
      });
    } else {
      setErrorQueryString(defaultFieldErrorStatus);
    }
  };

  useEffect(() => {
    setFieldErrors();
  }, [isBlocked]);

  useEffect(() => {
    getCapsules(queryString);
  }, [queryString]);

  return (
    <section className="border border-slate-300 rounded-lg filter-panel mb-14 p-3 md:p-6">
      <div className="flex flex-col md:flex-row items-center ">
        <h5 className="font-semibold text-slate-500 text-xl md:text-base lg:text-lg whitespace-nowrap">
          Filter By:
        </h5>
        {Object.keys(defaultFieldErrorStatus).map((field) => (
          <Suspense
            fallback={
              <div className="text-slate-500 ml-4 w-full">
                <LoaderComponent />
              </div>
            }
            key={field}
          >
            <InputFieldComponent
              hasError={
                !isDataAvailable &&
                !errorQueryString[field] &&
                !isBlocked &&
                !isFailed
              }
              onChange={handleSearch}
              name={field}
              disabled={isBlocked || errorQueryString[field]}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default memo(FilterComponent);
