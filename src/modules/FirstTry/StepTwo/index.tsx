import { FirstTryForm } from "@/entities/common/FirstTry/types";
import BirthdayInput from "@/ui/BirthdayInput";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropTypes = {
  value: string;
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepTwo: FC<PropTypes> = ({ errors, register, value }) => {
  return (
    <div>
      <h4>Let's celebrate you</h4>

      <p>
        Tell us your birthdate. Your proile does not display your birthdate,
        only age.
      </p>

      <BirthdayInput
        value={value}
        className="form__bithday"
        {...register("birthday", { required: true })}
        error={errors?.birthday?.message as undefined}
      />
    </div>
  );
};

export default StepTwo;
