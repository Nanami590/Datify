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
