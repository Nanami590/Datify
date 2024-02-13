import classNames from "classnames";
import { FC, LegacyRef, forwardRef, memo } from "react";
import { Slider as SliderField, SliderProps } from "@mui/base";

type PropTypes = Omit<SliderProps, "min" | "max"> & {
  value?: number;
  error?: string;
  className?: string;
  min?: string | number;
  max?: string | number;
};

const Slider: FC<PropTypes> = forwardRef(
  ({ error, className, value, min = 0, max = 100, ...props }, ref) => (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className={classNames("slider-field__wrapper", className)}
    >
      <SliderField
        value={value}
        min={Number(min)}
        max={Number(max)}
        className="slider-field__input"
        {...props}
      />

      {error && <span className="slider-field__error">{error}</span>}
    </div>
  )
);

export default memo(Slider);
