import FavoriteIcon from "@mui/icons-material/Favorite";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROUTES } from "entities/common/constant";
import Checkbox from "ui/Checkbox";
import Input from "ui/Input";
import Button from "ui/Button";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, "Password is too short - should be 8 chars minimum."),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match"),
    agreedment: yup.boolean().required(),
  })
  .required();

type InputsType = {
  email: string;
  password: string;
  agreedment: boolean;
  repeatPassword: string;
};

const SignUpView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <main className="login-page">
      <FavoriteIcon className="login-page__logo" />

      <h1>Datify</h1>

      <h6 className="fw-400 text-center">Create an account</h6>

      <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">
        <Input
          placeholder="Type your email"
          {...register("email", { required: true })}
          className="login-page__form__email"
          error={errors?.email?.message as undefined}
        />

        <Input
          type="password"
          placeholder="Type your password"
          {...register("password", { required: true })}
          className="login-page__form__password"
          error={errors?.password?.message as undefined}
        />

        <Input
          type="password"
          placeholder="Repeat password"
          {...register("repeatPassword", { required: true })}
          className="login-page__form__password"
          error={errors?.repeatPassword?.message as undefined}
        />

        <Checkbox
          id={"agreedment"}
          label={
            <>
              I agree to datify
              <Link to={ROUTES.PRIVACY_POLICY} className="ml-1">
                Privacy Policy
              </Link>
            </>
          }
          error={errors.agreedment?.message as unknown as string}
          {...register("agreedment")}
        />

        <Button className="login-page__form__submit" type="submit">
          Sign Up
        </Button>
      </form>

      <span className="desc-1">
        Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </span>
    </main>
  );
};

export default SignUpView;
