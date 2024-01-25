import { ROUTES } from "@/entities/common/constant";
import { FirstTryStepOne, FirstTryStepTwo } from "@/modules/FirstTry";
import Button from "@/ui/Button";
import LineStepper from "@/ui/LineStepper";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepOneSchema, stepTwoSchema } from "./schema";
import { FirstTryForm } from "@/entities/common/FirstTry/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StepThree from "@/modules/FirstTry/StepThree";

// TODO add captcha if we add to host https://www.npmjs.com/package/react-google-recaptcha (and add max step)
const FirstTry: FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  // TODO function for get step schema
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstTryForm>({
    resolver: yupResolver(getSchemaByStep(step)),
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

  console.log(errors, step);

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
            register={register}
            errors={errors}
            value={getValues("birthday")}
          />
        )}
        {step === 3 && <StepThree register={register} errors={errors} />}

        <Button className="first-try-page__form__submit" type="submit">
          Continue
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

    default:
      return stepOneSchema;
  }
}

export default FirstTry;
