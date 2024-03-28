import { EMOJI_LIST } from "@/entities/common/constant";
import FirstTryInfo from "../FirstTryInfo";
import { StringHelper } from "@/utils/helpers/Index";
import { FC, useState } from "react";
import Slider from "@/ui/Slider";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FirstTryForm } from "@/entities/common/FirstTry/types";

type PropTypes = {
  value: number;
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepFive: FC<PropTypes> = ({ errors, register, value }) => {
  const [state, setState] = useState(value || 20);

  const handleChange = (event: Event, value: number | number[]) => {
    register("distance", { required: true }).onChange(event);

    setState(value as number);
  };

  return (
    <div className="first-try__step-five">
      <FirstTryInfo
        title={`Find matches nearby ${StringHelper.getEmoji(
          EMOJI_LIST.LOLLIPOP
        )}`}
        description={
          "Select your preferred distance range to discover matches conveniently. We'll help you find love close by."
        }
      />

      <h6 className="mb-4 mt-6">Distance preference: {state} km</h6>

      <Slider
        min={5}
        max={40}
        value={state}
        defaultValue={20}
        aria-label="distance"
        {...register("distance", { required: true })}
        onChange={handleChange}
        error={errors?.distance?.message}
      />
    </div>
  );
};

export default StepFive;
