import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Input } from "@mui/base";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type InputsType = {
  email: string;
  password: string;
};

const LoginView = () => {
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

      <p className="text">Let's dive in into your account</p>

      <form onSubmit={handleSubmit(onSubmit)} className="login-page__form">
        <Input
          placeholder="Type your email"
          {...register("email", { required: true })}
          className="login-page__form__email"
          error={!!errors.email}
        />
        {errors.email && <span>This field is required</span>}

        <Input
          type="password"
          placeholder="Type your password"
          {...register("password", { required: true })}
          className="login-page__form__password"
          error={!!errors.password}
        />
        {errors.password && <span>This field is required</span>}

        <Button className="login-page__form__submit" type="submit">
          Log In
        </Button>
      </form>

      <span className="desc-2">
        Don't have an account? <a href="#">Sign Up</a>
      </span>
    </main>
  );
};

export default LoginView;
