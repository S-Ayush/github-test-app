import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import {
  ContentDispaly,
  Header,
  SeachContainer,
  UserInfoContainer,
} from "../../styles/Navbar.style";
import RouteDefinitions from "../../router/RouteDefinition";
import SearchBar from "../searchBarComponents/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userApis from "../../services/userApis";
import UserAction from "../../redux/actions/userActions";
import StarActions from "../../redux/actions/starActions";

const NavBar = () => {
  const user = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const currentPath = useLocation().pathname;

  useEffect(() => {
    if (!user.isLogin) {
      userApis.getUserData().then((res) => {
        console.log(res);
        dispatch(UserAction.setLoginData({ isLogin: true, ...res.data.user }));
        dispatch(StarActions.setStaredRepos(res.data.staredRepos ?? []));
      });
    }
  }, [currentPath]);
  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    window.location.pathname = "/login";
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <Header>
      <ContentDispaly>
        <ThemeProvider theme={theme}>
          <SeachContainer onClick={(e) => e.stopPropagation()}>
            <SearchBar />
          </SeachContainer>
          {user.isLogin && (
            <UserInfoContainer>
              <p style={{ color: "black" }}>
                Welcome, {user?.name}&nbsp;&nbsp;
              </p>
              <Button
                style={{ marginLeft: "30px" }}
                variant="contained"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </UserInfoContainer>
          )}
        </ThemeProvider>
      </ContentDispaly>
    </Header>
  );
};
export default NavBar;
