export type FirstTryFormSexType = "male" | "female" | "other";
export type FirstTryFormGoalType =
  | "dating"
  | "friendship"
  | "casual"
  | "serious_relationship";

export type FirstTryForm = {
  nickname: string;
  birthday: string;
  sex: FirstTryFormSexType;
  goal: FirstTryFormGoalType;
  distance: number;
  interests: string[];
  images: number[];
  location: unknown;
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
