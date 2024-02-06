import {
  FirstTryForm,
  FirstTryFormGoalType,
  FirstTryStepFourGroup,
} from "@/entities/common/FirstTry/types";
import { FC } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import RadioCard from "@/ui/RadioCard";

type PropTypes = {
  value: FirstTryFormGoalType;
  errors: FieldErrors<FirstTryForm>;
  setValue: UseFormSetValue<FirstTryForm>;
};

const StepFour: FC<PropTypes> = ({ errors, setValue, value }) => {
  const handleClick = (value: FirstTryFormGoalType) => () => {
    setValue("goal", value, { shouldValidate: true });
  };

  const buttonGroup: FirstTryStepFourGroup[] = [
    {
      text: "Dating",
      type: "dating",
      description:
        "Seeking love and meaningful connections? \n Choose dating for geniune relationships.",
    },
    {
      text: "Friendship",
      type: "friendship",
      description:
        "Expand yor social circle and make new friends. \n Opt for friendship today.",
    },
    {
      text: "Casual",
      type: "casual",
      description:
        "Looking for fun and relaxed encounters? Select casual for carefree connections.",
    },
    {
      text: "Serious Relationship",
      type: "serious_relationship",
      description:
        "Ready for commitment and a lasting partnership? Pick serious relationship.",
    },
  ];

  return (
    <div className="first-try__step-four">
      <FirstTryInfo
        title={"Your relationship goals"}
        description={
          "Choose the type of relationship you're seeking on Datify. Love, friendship, or something in between - it's your choice."
        }
      />

      <div className="first-try__step-four__button-group">
        {buttonGroup.map(({ text, type, description }) => (
          <RadioCard key={type}>
            <h6>{text}</h6>

            <p>{description}</p>
          </RadioCard>
        ))}
      </div>

      {!!errors?.sex?.message && (
        <p className="birthday-input__error">{errors.sex.message}</p>
      )}
    </div>
  );
};

function getVariant(key: FirstTryFormGoalType, value: FirstTryFormGoalType) {
  return key === value ? "primary" : "secondary";
}

export default StepFour;
