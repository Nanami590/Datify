import { FirstTryForm } from "@/entities/common/FirstTry/types";
import BirthdayInput from "@/ui/BirthdayInput";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import { StringHelper } from "@/utils/helpers/Index";
import { EMOJI_LIST } from "@/entities/common/constant";

type PropTypes = {
  value: string;
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepTwo: FC<PropTypes> = ({ errors, register, value }) => {
  return (
    <div>
      <FirstTryInfo
        title={`Let's celebrate you ${StringHelper.getEmoji(EMOJI_LIST.CAKE)}`}
        description={
          "Tell us your birthdate. Your proile does not display your birthdate, only age."
        }
      />

      <BirthdayInput
        value={value}
        className="form__bithday"
        {...register("birthday", { required: true })}
        error={errors?.birthday?.message}
      />
    </div>
  );
};

export default StepTwo;
