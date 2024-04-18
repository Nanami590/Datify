import { EMOJI_LIST } from "@/entities/common/constant";
import FirstTryInfo from "../FirstTryInfo";
import { StringHelper } from "@/utils/helpers/Index";
import { FC, SyntheticEvent, useState } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import {
  FirstTryForm,
  FirstTryStepSixCardsType,
} from "@/entities/common/FirstTry/types";
import Input from "@/ui/Input";
import { FirstTryStepSixCards } from "@/entities/common/FirstTry/constant";
import RadioCard from "@/ui/RadioCard";

type PropTypes = {
  value: FirstTryStepSixCardsType[];
  errors: FieldErrors<FirstTryForm>;
  setValue: UseFormSetValue<FirstTryForm>;
};

// TODO get FirstTryStepSixCards from api?
const StepSix: FC<PropTypes> = ({ errors, setValue, value = [] }) => {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState<FirstTryStepSixCardsType[]>(value);

  const handleSearch = (event: SyntheticEvent) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  const handleChange = (item: FirstTryStepSixCardsType) => () => {
    setCards((prevState) => {
      const hasItem = prevState.filter(
        (element) => element.id === item.id
      ).length;
      const value = hasItem
        ? prevState.filter((element) => element.id !== item.id)
        : [...prevState, item];

      if (cards.length === 5 && !hasItem) {
        return cards;
      } else {
        setValue("interests", value, { shouldValidate: true });

        return value;
      }
    });
  };

  return (
    <div className="first-try__step-six">
      <FirstTryInfo
        title={`Discover like-minded people ${StringHelper.getEmoji(
          EMOJI_LIST.SMILING_FACE_WITH_HANDS
        )}`}
        description={
          "Share your interests, passions and hobbies. We'll connect you with people who share your enthusiasm."
        }
      />

      <Input
        className="first-try__step-six__search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />

      <div className="first-try__step-six__badge-container">
        {FirstTryStepSixCards.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <RadioCard
            className="first-try__step-six__badges"
            key={item.id}
            onClick={handleChange(item)}
            type={
              cards.find((element) => element.id === item.id)
                ? "active"
                : "inactive"
            }
          >
            <span>{item.name}</span>
            <span>{item.emoji}</span>
          </RadioCard>
        ))}
      </div>

      {errors && (
        <p className="first-try__step-six__error">
          {errors?.interests?.message}
        </p>
      )}
    </div>
  );
};

export default StepSix;
