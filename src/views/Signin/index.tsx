import FavoriteIcon from "@mui/icons-material/Favorite";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "entities/common/constant";
import Checkbox from "ui/Checkbox";
import Input from "ui/Input";
import Button from "ui/Button";
import { schema } from "./schema";

type InputsType = {
  email: string;
  password: string;
  remember?: boolean;
};

const SignInView = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(schema),
  });
  // TODO dispatch sign in
  const onSubmit: SubmitHandler<InputsType> = (data) => {
    if (data) {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <main className="login-page">
      <FavoriteIcon className="login-page__logo" />

      <h1 className="mb-8 mt-8">Datify</h1>

      <h6 className="mb-4 fw-400 text-center">
        Please enter your email & password to sign in
      </h6>

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

        <div className="login-page__form__forgot-wrapper">
          <Checkbox
            id={"remember"}
            label="Remember me"
            error={errors.remember?.message}
            {...register("remember")}
          />

          <Link to={ROUTES.FORGOT_PASSWORD}>Forgot password?</Link>
        </div>

        <Button className="login-page__form__submit" type="submit">
          Log In
        </Button>
      </form>

      <span className="desc-1">
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </span>
    </main>
  );
};

export default SignInView;
