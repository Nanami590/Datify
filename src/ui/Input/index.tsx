import classNames from "classnames";
import { FC, memo, forwardRef } from "react";
import { Input as InputField, InputProps } from "@mui/base";

type PropTypes = InputProps & {
  id?: string;
  label?: string;
  error?: string;
  className?: string;
};

const Input: FC<PropTypes> = forwardRef(
  ({ id, label, error, className, ...props }, ref) => (
    <div ref={ref} className={classNames("input-field__wrapper", className)}>
      {label && (
        <label
          htmlFor={id}
          className={classNames("input-field__label", {
            "cursor-pointer": id,
          })}
        >
          {label}
        </label>
      )}

      <InputField className={"input-field__input"} error={!!error} {...props} />

      {error && <span className="input-field__error">{error}</span>}
    </div>
  )
);

export default memo(Input);
