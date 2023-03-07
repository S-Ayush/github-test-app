import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
  LoginFormSection,
  LoginPageContainer,
  LogoSection,
  MobileImageSection,
  ScooterImageSection,
} from "../../styles/LoginPage.style";
import MobileManImage from "../../assets/mobile-man.png";
import ScooterManImage from "../../assets/Scooter-man.png";
import LoginForm from "../../components/loginComponents/LoginForm";
import Layout from "../../container/layout/Layout";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Layout>
      <LoginPageContainer>
        <LoginFormSection>
          <Grid container columns={2} sx={{ marginBottom: "44px" }}>
            <Grid width="50%">
              <p style={{ fontWeight: "500", fontSize: "20px" }}>
                Welcome to Lorem
              </p>
              <h1 style={{ fontSize: "55px", lineHeight: 0 }}>
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>
            </Grid>
            <Grid width="50%">
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <div>
                  <p style={{ color: "#8D8D8D" }}>
                    {isSignIn ? "No account?" : "Have an account?"}
                  </p>
                  <p
                    onClick={() => setIsSignIn(!isSignIn)}
                    style={{
                      color: "#B87514",
                      lineHeight: "1px",
                      cursor: "pointer",
                    }}
                  >
                    {isSignIn ? "Sign Up" : "Sign In"}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <LoginForm isSignIn={isSignIn} />
        </LoginFormSection>
      </LoginPageContainer>
    </Layout>
  );
}

export default Login;
