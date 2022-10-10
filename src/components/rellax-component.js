import { memo, useEffect } from "react";
import Rellax from "rellax";
import PropTypes from "prop-types";

const RellaxComponent = ({
  speed,
  center,
  wrapper,
  round,
  vertical,
  horizontal,
  children,
}) => {
  useEffect(() => {
    new Rellax(
      `#${children.props.id}`,
      {
        speed,
        center,
        wrapper,
        round,
        vertical,
        horizontal,
      },
      []
    );
  });

  return children;
};

RellaxComponent.propType = {
  speed: PropTypes.number,
  center: PropTypes.bool,
  wrapper: PropTypes.any,
  round: PropTypes.bool,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
};

RellaxComponent.defaultProps = {
  speed: 0,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
};

export default memo(RellaxComponent);
