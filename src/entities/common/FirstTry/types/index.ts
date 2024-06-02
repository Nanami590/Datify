export type FirstTryFormSexType = "male" | "female" | "other";
export type FirstTryFormGoalType =
  | "dating"
  | "friendship"
  | "casual"
  | "serious_relationship";

export enum FirstTryFormFields {
  NICKNAME = "nickname",
  BIRTHDAY = "birthday",
  SEX = "sex",
  GOAL = "goal",
  DISTANCE = "distance",
  INTERESTS = "interests",
  IMAGES = "images",
  LOCATION = "location",
}

export type FirstTryForm = {
  [FirstTryFormFields.NICKNAME]: string;
  [FirstTryFormFields.BIRTHDAY]: string;
  [FirstTryFormFields.SEX]: FirstTryFormSexType;
  [FirstTryFormFields.GOAL]: FirstTryFormGoalType;
  [FirstTryFormFields.DISTANCE]: number;
  [FirstTryFormFields.INTERESTS]: FirstTryStepSixCardsType[];
  [FirstTryFormFields.IMAGES]: string[];
  [FirstTryFormFields.LOCATION]: GeolocationPosition;
};

export type FirstTryStepThreeGroup = {
  text: string;
  type: FirstTryFormSexType;
};

export type FirstTryStepFourGroup = {
  text: string;
  description: string;
  type: FirstTryFormGoalType;
};

export type FirstTryStepSixCardsType = {
  id: number;
  name: string;
  emoji: string;
};
