import { FirstTryForm } from "@/entities/common/FirstTry/types";
import BirthdayInput from "@/ui/BirthdayInput";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropTypes = {
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepTwo: FC<PropTypes> = ({ errors, register }) => {
  return (
    <div>
      <h4>Your datify identity</h4>

      <p>
        Create a unique nickname that represents you.
        <br />
        It's how others will know and remember you.
      </p>

      {/* TODO fix */}
      <BirthdayInput
        className="form__nickname"
        {...register("birthday", { required: true })}
        error={errors?.birthday?.message as undefined}
      />
    </div>
  );
};

export default StepTwo;
