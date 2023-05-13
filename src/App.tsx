import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import SunnysideAgencyLandingPage from "./Pages/SunnysideAgencyLandingPage";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    fontFamily: "Barlow",
  },
  components: {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <SunnysideAgencyLandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
