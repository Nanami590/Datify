import classNames from "classnames";
import { FC, memo } from "react";

type PropTypes = {
  max: number;
  current: number;
  className?: string;
};

const LineStepper: FC<PropTypes> = ({ current, max, className }) => (
  <div className={classNames("line-stepper", className)}>
    <div
      style={{ width: `${(current / max) * 100}%` }}
      className="line-stepper__line"
    />
  </div>
);

export default memo(LineStepper);
