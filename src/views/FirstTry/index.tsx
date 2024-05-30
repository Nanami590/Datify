import { ROUTES } from "@/entities/common/constant";
import { FirstTryStepOne, FirstTryStepTwo } from "@/modules/FirstTry";
import Button from "@/ui/Button";
import LineStepper from "@/ui/LineStepper";
import { FC, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  stepFiveSchema,
  stepFourSchema,
  stepOneSchema,
  stepSixSchema,
  stepThreeSchema,
  stepTwoSchema,
} from "./schema";
import { FirstTryForm } from "@/entities/common/FirstTry/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StepThree from "@/modules/FirstTry/StepThree";
import StepFour from "@/modules/FirstTry/StepFour";
import StepFive from "@/modules/FirstTry/StepFive";
import { ObjectSchema } from "yup";
import StepSix from "@/modules/FirstTry/StepSix";
import StepSeven from "@/modules/FirstTry/StepSeven";

// TODO add captcha if we add to host https://www.npmjs.com/package/react-google-recaptcha (and add max step)
const FirstTry: FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(7);
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstTryForm>({
    resolver: yupResolver(
      getSchemaByStep(step) as ObjectSchema<{ [key: string]: string }>
    ) as unknown as Resolver<FirstTryForm>,
  });

  const handleChangeStep = (step: 1 | -1) => () =>
    setStep((prevState) => prevState + step);

  const onSubmit: SubmitHandler<FirstTryForm> = (data) => {
    console.log("data", data, step);

    if (step < 8) {
      handleChangeStep(1)();
    } else if (data) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <main className="first-try-page">
      <div className="first-try-page__headline">
        <ArrowBackIcon onClick={handleChangeStep(-1)} />

        <LineStepper
          className={"first-try-page__headline__stepper"}
          current={step}
          max={8}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="first-try-page__form">
        {step === 1 && <FirstTryStepOne register={register} errors={errors} />}
        {step === 2 && (
          <FirstTryStepTwo
            value={getValues("birthday")}
            register={register}
            errors={errors}
          />
        )}
        {step === 3 && (
          <StepThree
            value={getValues("sex")}
            setValue={setValue}
            errors={errors}
          />
        )}
        {step === 4 && (
          <StepFour
            value={getValues("goal")}
            setValue={setValue}
            errors={errors}
          />
        )}
        {step === 5 && (
          <StepFive
            value={getValues("distance")}
            register={register}
            errors={errors}
          />
        )}
        {step === 6 && (
          <StepSix
            errors={errors}
            setValue={setValue}
            value={getValues("interests")}
          />
        )}
        {step === 7 && (
          <StepSeven
            errors={errors}
            setValue={setValue}
            value={getValues("images")}
          />
        )}

        <Button
          disabled={
            step === 6 &&
            (getValues("interests")?.length < 5 || !getValues("interests"))
          }
          className="first-try-page__form__submit"
          type="submit"
        >
          <span>Continue</span>

          {step === 6 ? (
            <span className="ml-1">
              {getValues("interests")?.length || 0}/5
            </span>
          ) : (
            ""
          )}
        </Button>
      </form>
    </main>
  );
};

function getSchemaByStep(step: number) {
  switch (step) {
    case 1:
      return stepOneSchema;
    case 2:
      return stepTwoSchema;
    case 3:
      return stepThreeSchema;
    case 4:
      return stepFourSchema;
    case 5:
      return stepFiveSchema;
    case 6:
      return stepSixSchema;

    default:
      return stepOneSchema;
  }
}

export default FirstTry;
