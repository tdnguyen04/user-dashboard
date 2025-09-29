import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useNavigate } from "react-router";

export default function LoginForm({
  server,
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe
}) {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Basic validation
    if (!email || !password) {
      console.error("Email and password are required");
      // In a real app, you would show a user-facing error here
      return;
    }
    console.log({
      email: email,
      password: password,
      rememberMe: rememberMe,
    });

    try {
      const response = await axios.post(server + "/api/v1/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        // redirect to dashboard
        navigate('/dashboard')
      }
      else if (response.status === 401) {
        // display wrong email or password
      }
      else {
        // redirect to error page
      }
    } catch (error) {
      console.log(error)
    }

  };
  return <Container component="main" maxWidth="xs">
        <Box sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
          <Avatar sx={{
        m: 1,
        bgcolor: "primary.main"
      }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{
        mt: 1
      }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
            <TextField margin="normal" required fullWidth name="password" id="password" label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <FormControlLabel control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />} label="Remember me" />
            <Button fullWidth variant="contained" type="submit" sx={{
          mt: 3,
          mb: 2,
          py: 1
        }}>
              Sign in
            </Button>
            <Grid container>
              <Grid size="grow">
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid>
                <Typography variant="body2" component="span">
                  Don't have an account?{" "}
                </Typography>
                <Link href="#" variant="body2">
                  Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>;
}
  