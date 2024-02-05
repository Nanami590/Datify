import { FirstTryForm } from "@/entities/common/FirstTry/types";
import Input from "@/ui/Input";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";

type PropTypes = {
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepOne: FC<PropTypes> = ({ register, errors }) => {
  return (
    <div>
      <FirstTryInfo
        title={"Your datify identity"}
        description={
          <>
            Create a unique nickname that represents you.
            <br />
            It's how others will know and remember you.
          </>
        }
      />

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
