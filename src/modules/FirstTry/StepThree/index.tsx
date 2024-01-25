import { FirstTryForm } from "@/entities/common/FirstTry/types";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropTypes = {
  errors: FieldErrors<FirstTryForm>;
  register: UseFormRegister<FirstTryForm>;
};

const StepThree: FC<PropTypes> = ({ register, errors }) => {
  return (
    <div>
      <h4>Be true to yourself</h4>

      <p>Choose the gender that best represent you.</p>
    </div>
  );
};

export default StepThree;
