import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./views";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter(routes);

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9310fa",
      },
      secondary: {
        main: "#ffa033",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
