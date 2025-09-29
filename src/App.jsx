import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard'
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          padding: "10px 20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

const SERVER_URL = "http://localhost:5000";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginForm  server={SERVER_URL} email={email} setEmail={setEmail} password={password} setPassword={setPassword} rememberMe={rememberMe} setRememberMe={setRememberMe}  />
    </ThemeProvider>
  );
}

export default App;
