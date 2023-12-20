import { FC, ReactNode, memo } from "react";
import { Button as MUIButton, ButtonProps } from "@mui/base";
import classNames from "classnames";

type PropTypes = ButtonProps & {
  children: ReactNode;
};

const Button: FC<PropTypes> = ({ children, className, ...props }) => {
  return (
    <MUIButton className={classNames("button", className)} {...props}>
      {children}
    </MUIButton>
  );
};

export default memo(Button);
