import classNames from "classnames";
import { FC, ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
  type?: "active" | "inactive";
};

const RadioCard: FC<PropTypes> = ({ className, children, type }) => {
  return (
    <div className={classNames("radio-card", `radio-card__${type}`, className)}>
      {children}
    </div>
  );
};

export default RadioCard;
