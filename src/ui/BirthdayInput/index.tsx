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

type PropTypes = {
  // format: MM.dd.yyyy
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  name?: string;
};

// TODO add styles
// TODO add errors
const BirthdayInput: FC<PropTypes> = forwardRef(
  ({ onChange, value = "", ...props }, ref) => {
    const firstFieldRef = useRef<null | HTMLInputElement>(null);
    const secondFieldRef = useRef<null | HTMLInputElement>(null);
    const thirdFieldRef = useRef<null | HTMLInputElement>(null);
    const [month, setMonth] = useState(value?.split(".")?.[0] || "");
    const [day, setDay] = useState(value?.split(".")?.[1] || "");
    const [year, setYear] = useState(value?.split(".")?.[2] || "");

    console.log("props", props);

    const handleChange =
      (type: "day" | "month" | "year") => (event: SyntheticEvent) => {
        const fieldValue = (event.target as HTMLInputElement).value;
        const length = fieldValue.length;

        const isMonth = type === "month";
        const isDay = type === "day";
        const isYear = type === "year";

        const isAdd = (isMonth && length > 1) || (isDay && length > 1);
        const isRemove = (isDay && !length) || (isYear && !length);

        const monthInput = getInput(firstFieldRef);
        const dayInput = getInput(secondFieldRef);
        const yearInput = getInput(thirdFieldRef);

        (isMonth ? setMonth : isDay ? setDay : setYear)(fieldValue);

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

    useEffect(() => {
      if (month && day && year) {
        onChange(`${month}.${day}.${year}`);
      } else if (month && day) {
        onChange(`${month}.${day}`);
      } else if (month) {
        onChange(`${month}`);
      }
    }, [day, month, onChange, year]);

    return (
      <div ref={ref as LegacyRef<HTMLDivElement>} className="birthday-input">
        <Input
          ref={firstFieldRef}
          placeholder="MM"
          value={month}
          onChange={handleChange("month")}
          className="birthday-input__input birthday-input__month"
        />

        <Input
          ref={secondFieldRef}
          placeholder="DD"
          value={day}
          onChange={handleChange("day")}
          className="birthday-input__input birthday-input__day"
        />

        <Input
          ref={thirdFieldRef}
          placeholder="YYYY"
          value={year}
          onChange={handleChange("year")}
          className="birthday-input__input birthday-input__year"
        />
      </div>
    );
  }
);

function getInput(element: React.MutableRefObject<HTMLInputElement | null>) {
  return element?.current?.getElementsByTagName("input")?.[0];
}

export default BirthdayInput;
