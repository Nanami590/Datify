import HomeView from "./Home";
import AboutUsView from "./AboutUs";
import ViewNotFound from "./ViewNotFound";
import CounterView from "./Counter";
import SignInView from "./Signin";
import { ROUTES } from "../entities/common/constant";
import SignUpView from "./Signup";

const routes = [
  {
    path: ROUTES.HOME,
    element: <HomeView />,
  },
  {
    path: ROUTES.SIGN_IN,
    element: <SignInView />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUpView />,
  },
  {
    path: ROUTES.COUNTER,
    element: <CounterView />,
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutUsView />,
  },
  {
    path: ROUTES.PRIVACY_POLICY,
    element: <>Privacy policy</>,
  },
  {
    path: "*",
    element: <ViewNotFound />,
    name: "ViewNotFound",
  },
];

export default routes;
