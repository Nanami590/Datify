import classNames from "classnames";
import { FC, memo, ReactNode, forwardRef, LegacyRef } from "react";
import { Checkbox as CheckboxInput } from "@mui/material";

type PropTypes = {
  id?: string;
  label?: ReactNode;
  error?: string;
  className?: string;
};

const Checkbox: FC<PropTypes> = forwardRef(
  ({ className, error, label, id, ...props }, ref) => (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className={classNames("checkbox__wrapper", className, {
        checkbox__error: error,
      })}
    >
      <CheckboxInput className="checkbox__input" id={id} {...props} />

      {label && (
        <label
          htmlFor={id}
          className={classNames("checkbox__label", {
            "cursor-pointer": id,
          })}
        >
          {label}
        </label>
      )}

      {error && <span className="checkbox__error">{error}</span>}
    </div>
  )
);

export default memo(Checkbox);
