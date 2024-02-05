import classNames from "classnames";
import { FC, ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

const RadioCard: FC<PropTypes> = ({ className, children }) => {
  return <div className={classNames("radio-card", className)}>{children}</div>;
};

export default RadioCard;
