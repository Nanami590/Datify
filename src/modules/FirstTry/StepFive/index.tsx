import { EMOJI_LIST } from "@/entities/common/constant";
import FirstTryInfo from "../FirstTryInfo";
import { StringHelper } from "@/utils/helpers/Index";
import { FC } from "react";
import Slider from "@/ui/Slider";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FirstTryForm } from "@/entities/common/FirstTry/types";

type PropTypes = {
  value: number;
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepFive: FC<PropTypes> = ({ errors, register, value }) => {
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

      <Slider
        aria-label="distance"
        value={value}
        defaultValue={35}
        {...register("distance", { required: true })}
        error={errors?.distance?.message}
      />
    </div>
  );
};

export default StepFive;
