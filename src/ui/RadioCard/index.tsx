import classNames from "classnames";
import { FC, ReactNode } from "react";

type PropTypes = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "active" | "inactive";
};

const RadioCard: FC<PropTypes> = ({
  type,
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames("radio-card", `radio-card__${type}`, className)}
    >
      {children}
    </div>
  );
};

export default RadioCard;
