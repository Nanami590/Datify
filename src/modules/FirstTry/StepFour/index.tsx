import {
  FirstTryForm,
  FirstTryFormGoalType,
  FirstTryStepFourGroup,
} from "@/entities/common/FirstTry/types";
import { FC } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import RadioCard from "@/ui/RadioCard";
import { StringHelper } from "@/utils/helpers";
import { EMOJI_LIST } from "@/entities/common/constant";

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
      text: `Dating ${StringHelper.getEmoji(EMOJI_LIST.SMIRKING_FACE)}`,
      type: "dating",
      description:
        "Seeking love and meaningful connections? \n Choose dating for geniune relationships.",
    },
    {
      text: `Friendship ${StringHelper.getEmoji(EMOJI_LIST.RAISING_HANDS)}`,
      type: "friendship",
      description:
        "Expand yor social circle and make new friends. \n Opt for friendship today.",
    },
    {
      text: `Casual ${StringHelper.getEmoji(EMOJI_LIST.LAUGHTER_FACE)}`,
      type: "casual",
      description:
        "Looking for fun and relaxed encounters? Select casual for carefree connections.",
    },
    {
      text: `Serious Relationship ${StringHelper.getEmoji(EMOJI_LIST.RING)}`,
      type: "serious_relationship",
      description:
        "Ready for commitment and a lasting partnership? Pick serious relationship.",
    },
  ];

  return (
    <div className="first-try__step-four">
      <FirstTryInfo
        title={`Your relationship goals ${StringHelper.getEmoji(
          EMOJI_LIST.ARROW_HEART
        )}`}
        description={
          "Choose the type of relationship you're seeking on Datify. Love, friendship, or something in between - it's your choice."
        }
      />

      <div className="first-try__step-four__button-group">
        {buttonGroup.map(({ text, type, description }) => (
          <RadioCard
            key={type}
            onClick={handleClick(type)}
            type={getVariant(type, value)}
            className="first-try__step-four__button-group__card"
          >
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
  return key === value ? "active" : "inactive";
}

export default StepFour;
