import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { isMobile } from "react-device-detect";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Articles from "./components/articles";
import Admin from "./components/admin";
import Profile from "./components/profile";
import ArticleForm from "./components/articleForm";
import Mobile from "./components/mobile";

function App() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  if (!isMobile) {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/articles/:id" component={ArticleForm} />
            <Route path="/articles" component={Articles} />
            <Route
              path="/admin"
              render={(props) => {
                if (isAuthenticated && user["https://rbac/role"] === "Admin")
                  return <Admin {...props} />;
                return loginWithRedirect();
              }}
            />
            <Route
              path="/profile"
              render={(props) => {
                if (isAuthenticated) {
                  return <Profile {...props} />;
                }
                return loginWithRedirect();
              }}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Mobile />
      </div>
    );
  }
}

export default App;
