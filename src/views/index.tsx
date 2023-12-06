import HomeView from "./Home";
import AboutUsView from "./AboutUs";
import ViewNotFound from "./ViewNotFound";
import CounterView from "./Counter";
import LoginView from "./Login";

const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "counter",
    element: <CounterView />,
  },
  {
    path: "about",
    element: <AboutUsView />,
  },
  {
    path: "*",
    element: <ViewNotFound />,
    name: "ViewNotFound",
  },
];

export default routes;
