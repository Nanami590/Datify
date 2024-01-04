export type FirstTryForm = {
  nickname: string;
  birthday: string;
  sex: "male" | "female" | "other";
  goal: "dating" | "friendship" | "casual" | "serious_relationship";
  distance: number;
  interests: string[];
  images: number[];
  location: unknown;
};
