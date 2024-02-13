import {
  FirstTryForm,
  FirstTryFormSexType,
  FirstTryStepThreeGroup,
} from "@/entities/common/FirstTry/types";
import Button from "@/ui/Button";
import { FC } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import { StringHelper } from "@/utils/helpers/Index";
import { EMOJI_LIST } from "@/entities/common/constant";

type PropTypes = {
  value: FirstTryFormSexType;
  errors: FieldErrors<FirstTryForm>;
  setValue: UseFormSetValue<FirstTryForm>;
};

const StepThree: FC<PropTypes> = ({ errors, setValue, value }) => {
  const handleClick = (value: FirstTryFormSexType) => () => {
    setValue("sex", value, { shouldValidate: true });
  };

  const buttonGroup: FirstTryStepThreeGroup[] = [
    { text: "Man", type: "male" },
    { text: "Woman", type: "female" },
    { text: "Other", type: "other" },
  ];

  return (
    <div className="first-try__step-three">
      <FirstTryInfo
        title={`Be true to yourself ${StringHelper.getEmoji(EMOJI_LIST.STAR)}`}
        description={"Choose the gender that best represent you."}
      />

      <div className="first-try__step-three__button-group">
        {buttonGroup.map(({ text, type }) => (
          <Button
            key={type}
            variant={getVariant(type, value)}
            onClick={handleClick(type)}
          >
            {text}
          </Button>
        ))}
      </div>

      {!!errors?.sex?.message && (
        <p className="birthday-input__error">{errors.sex.message}</p>
      )}
    </div>
  );
};

function getVariant(key: FirstTryFormSexType, value: FirstTryFormSexType) {
  return key === value ? "primary" : "secondary";
}

export default StepThree;
