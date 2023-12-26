import Button from "@/ui/Button";
import LineStepper from "@/ui/LineStepper";
import { FC, useState } from "react";

// TODO add captcha if we add to host https://www.npmjs.com/package/react-google-recaptcha (and add max step)
const FirstTry: FC = () => {
  const [step, setStep] = useState(1);

  const handleChangeStep = (step: 1 | -1) => () =>
    setStep((prevState) => prevState + step);

  return (
    <main className="first-try-page">
      <LineStepper current={step} max={8} />

      <Button onClick={handleChangeStep(1)}>Continue</Button>
    </main>
  );
};

export default FirstTry;
