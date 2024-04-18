import * as yup from "yup";

export const stepOneSchema = yup
  .object({
    nickname: yup.string().required(),
  })
  .required();

export const stepTwoSchema = yup
  .object({
    birthday: yup.string().required(),
  })
  .required();

export const stepThreeSchema = yup
  .object({ sex: yup.string().required() })
  .required();

export const stepFourSchema = yup
  .object({
    goal: yup.string().required(),
  })
  .required();

export const stepFiveSchema = yup
  .object({
    distance: yup.number().nonNullable().required(),
  })
  .required();

export const stepSixSchema = yup
  .object({
    interests: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          name: yup.string(),
          emoji: yup.string(),
        })
      )
      .min(5)
      .max(5),
  })
  .required();
