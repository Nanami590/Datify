/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  FC,
  LegacyRef,
  SyntheticEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import Input from "../Input";
import classNames from "classnames";

type PropTypes = {
  // format: MM.dd.yyyy
  value?: string;
  onChange: (event: SyntheticEvent) => void;
  error?: string;
  className?: string;
  name?: string;
};

const BirthdayInput: FC<PropTypes> = forwardRef(
  ({ onChange, value = "", name, error, className, ...props }, ref) => {
    const firstFieldRef = useRef<null | HTMLInputElement>(null);
    const secondFieldRef = useRef<null | HTMLInputElement>(null);
    const thirdFieldRef = useRef<null | HTMLInputElement>(null);
    const [month, setMonth] = useState(value?.split(".")?.[0] || "");
    const [day, setDay] = useState(value?.split(".")?.[1] || "");
    const [year, setYear] = useState(value?.split(".")?.[2] || "");

    const handleChange =
      (type: "day" | "month" | "year") => (event: SyntheticEvent) => {
        const fieldValue = (event.target as HTMLInputElement).value;
        const length = fieldValue.length;

        const isMonth = type === "month";
        const isDay = type === "day";
        const isYear = type === "year";

        const isAdd = (isMonth && length > 1) || (isDay && length > 1);
        const isRemove = (isDay && !length) || (isYear && !length);
        const value = fieldValue.slice(0, isYear ? 4 : 2);

        const monthInput = getInput(firstFieldRef);
        const dayInput = getInput(secondFieldRef);
        const yearInput = getInput(thirdFieldRef);

        if (isMonth && Number(value) > 12) {
          setMonth((prevState) => prevState);
        } else {
          (isMonth ? setMonth : isDay ? setDay : setYear)(value);
        }

        if (isAdd) {
          (isMonth ? dayInput : yearInput)?.focus();
        }

        if (isRemove) {
          (isYear ? dayInput : monthInput)?.focus();
        }
      };

    useEffect(() => {
      const monthInput = getInput(firstFieldRef);
      const dayInput = getInput(secondFieldRef);
      const yearInput = getInput(thirdFieldRef);

      if (yearInput && dayInput && monthInput) {
        monthInput.maxLength = 2;
        yearInput.maxLength = 4;
        dayInput.maxLength = 2;
      }
    }, [firstFieldRef, secondFieldRef, thirdFieldRef]);

    // for react-hook-form
    useEffect(() => {
      if (month && day && year) {
        // @ts-ignore
        onChange({ target: { value: `${month}.${day}.${year}`, name } });
      } else if (month && day) {
        // @ts-ignore
        onChange({ target: { value: `${month}.${day}`, name } });
      } else if (month) {
        // @ts-ignore
        onChange({ target: { value: month, name } });
      }
    }, [day, month, onChange, year, name]);

    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={classNames("birthday-input", className)}
      >
        <div className="birthday-input__wrapper" {...props}>
          <Input
            ref={firstFieldRef}
            placeholder="MM"
            value={month}
            type="number"
            onChange={handleChange("month")}
            className="birthday-input__input birthday-input__month"
          />

          <Input
            ref={secondFieldRef}
            placeholder="DD"
            value={day}
            type="number"
            onChange={handleChange("day")}
            className="birthday-input__input birthday-input__day"
          />

          <Input
            ref={thirdFieldRef}
            placeholder="YYYY"
            value={year}
            type="number"
            onChange={handleChange("year")}
            className="birthday-input__input birthday-input__year"
          />
        </div>

        {error && <p className="birthday-input__error">{error}</p>}
      </div>
    );
  }
);

function getInput(element: React.MutableRefObject<HTMLInputElement | null>) {
  return element?.current?.getElementsByTagName("input")?.[0];
}

export default BirthdayInput;
