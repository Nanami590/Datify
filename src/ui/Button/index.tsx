import { FC, ReactNode, memo } from "react";
import { Button as MUIButton, ButtonProps } from "@mui/base";
import classNames from "classnames";

type PropTypes = ButtonProps & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const Button: FC<PropTypes> = ({
  children,
  className,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <MUIButton
      className={classNames("button", `button__${variant}`, className, {
        button__disabled: disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default memo(Button);
