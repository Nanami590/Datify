// import { ROUTES } from "@/entities/common/constant";
import { FirstTryStepOne, FirstTryStepTwo } from "@/modules/FirstTry";
import Button from "@/ui/Button";
import LineStepper from "@/ui/LineStepper";
import { FC, useMemo, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  stepFiveSchema,
  stepFourSchema,
  stepOneSchema,
  stepSevenSchema,
  stepSixSchema,
  stepThreeSchema,
  stepTwoSchema,
} from "./schema";
import {
  FirstTryForm,
  FirstTryFormFields,
} from "@/entities/common/FirstTry/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StepThree from "@/modules/FirstTry/StepThree";
import StepFour from "@/modules/FirstTry/StepFour";
import StepFive from "@/modules/FirstTry/StepFive";
import { ObjectSchema } from "yup";
import StepSix from "@/modules/FirstTry/StepSix";
import StepSeven from "@/modules/FirstTry/StepSeven";
import StepEight from "@/modules/FirstTry/StepEight";
import { getLocation } from "@/utils/helpers/getLocation";
import { USER_STORAGE_DATA } from "@/entities/common/constant";

const defaultValues = {
  [FirstTryFormFields.BIRTHDAY]: undefined,
  [FirstTryFormFields.DISTANCE]: 30,
  [FirstTryFormFields.GOAL]: undefined,
  [FirstTryFormFields.IMAGES]: [],
  [FirstTryFormFields.INTERESTS]: undefined,
  [FirstTryFormFields.LOCATION]: undefined,
  [FirstTryFormFields.NICKNAME]: "",
  [FirstTryFormFields.SEX]: undefined,
};

// TODO add captcha if we add to host https://www.npmjs.com/package/react-google-recaptcha (and add max step)
const FirstTry: FC = () => {
  // const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstTryForm>({
    defaultValues,
    resolver: yupResolver(
      getSchemaByStep(step) as ObjectSchema<{ [key: string]: string }>
    ) as unknown as Resolver<FirstTryForm>,
  });

  const handleChangeStep = (value: 1 | -1) => () => {
    const isBack = value === -1;

    setStep((prevState) => {
      if (prevState <= 1 && isBack) {
        // TODO navigate to prev page
        return 1;
      }

      return prevState + value;
    });
  };

  const handleLocationSuccess =
    (data: FirstTryForm) => (location: GeolocationPosition) => {
      // TODO send at backend all data
      // TODO navigate
      console.log(location, data);
      localStorage.setItem(USER_STORAGE_DATA, JSON.stringify(data));
    };

  const handleLocationFailure = () => {
    // TODO add logic
    console.log("getting location failure");
  };

  const onSubmit: SubmitHandler<FirstTryForm> = (data) => {
    if (step < 8) {
      handleChangeStep(1)();
    } else if (data) {
      getLocation(handleLocationSuccess(data), handleLocationFailure);
    }
  };

  const buttonText = useMemo(() => {
    if (step === 8) {
      return "Allow Location";
    }

    if (step === 6) {
      return `Continue ${
        getValues(FirstTryFormFields.INTERESTS)?.length || 0
      }/5`;
    }

    return "Continue";
  }, [step, getValues(FirstTryFormFields.INTERESTS)?.length]);

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
            value={getValues(FirstTryFormFields.BIRTHDAY)}
            register={register}
            errors={errors}
          />
        )}
        {step === 3 && (
          <StepThree
            value={getValues(FirstTryFormFields.SEX)}
            setValue={setValue}
            errors={errors}
          />
        )}
        {step === 4 && (
          <StepFour
            value={getValues(FirstTryFormFields.GOAL)}
            setValue={setValue}
            errors={errors}
          />
        )}
        {step === 5 && (
          <StepFive
            value={getValues(FirstTryFormFields.DISTANCE)}
            register={register}
            errors={errors}
          />
        )}
        {step === 6 && (
          <StepSix
            errors={errors}
            setValue={setValue}
            value={getValues(FirstTryFormFields.INTERESTS)}
          />
        )}
        {step === 7 && (
          <StepSeven
            errors={errors}
            setValue={setValue}
            value={getValues(FirstTryFormFields.IMAGES)}
          />
        )}
        {step === 8 && <StepEight />}

        <Button
          disabled={
            step === 6 &&
            (getValues(FirstTryFormFields.INTERESTS)?.length < 5 ||
              !getValues("interests"))
          }
          className="first-try-page__form__submit"
          type="submit"
        >
          <span>{buttonText}</span>
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
    case 7:
      return stepSevenSchema;

    default:
      return stepOneSchema;
  }
}

export default FirstTry;
