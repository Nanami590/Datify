import { FirstTryForm } from "@/entities/common/FirstTry/types";
import Input from "@/ui/Input";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropTypes = {
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepOne: FC<PropTypes> = ({ register, errors }) => {
  return (
    <div>
      <h4>Your datify identity</h4>

      <p>
        Create a unique nickname that represents you.
        <br />
        It's how others will know and remember you.
      </p>

      <Input
        placeholder="Type your nickname"
        className="form__nickname"
        {...register("nickname", { required: true })}
        error={errors?.nickname?.message as undefined}
      />
    </div>
  );
};

export default StepOne;
