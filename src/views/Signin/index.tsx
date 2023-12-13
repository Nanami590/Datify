import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/base";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROUTES } from "../../entities/common/constant";
import Checkbox from "../../ui/Checkbox";
import Input from "../../ui/Input";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    remember: yup.boolean(),
  })
  .required();

type InputsType = {
  email: string;
  password: string;
  remember?: boolean;
};

const SignInView = () => {
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

      <p className="text">Please enter your email & password to sign in</p>

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

        <div>
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

      <span className="desc-2">
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </span>
    </main>
  );
};

export default SignInView;
