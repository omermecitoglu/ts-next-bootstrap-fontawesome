import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

type FilterSpinnerProps = {
  isActive: boolean,
  children: ReactNode,
};

const FilterSpinner = ({
  isActive,
  children,
}: FilterSpinnerProps) => {
  return (
    <div className="position-relative">
      {children}
      {isActive && (
        <div
          className="position-absolute z-3 top-0 bottom-0 start-0 end-0 rounded overflow-hidden"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className="h-100 d-flex justify-content-center align-items-center">
            <FontAwesomeIcon size="lg" icon={faSpinner} className="fa-spin-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSpinner;

