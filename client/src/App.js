import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { isMobile } from "react-device-detect";
import Home from "./components/pages/home";
import Navbar from "./components/common/navbar";
import Articles from "./components/pages/article-stuff/articles";
import Admin from "./components/admin/admin";
import Profile from "./components/user/profile";
import ArticleForm from "./components/pages/article-stuff/articlePage";
import Mobile from "./components/pages/mobile";
import MyArticles from "./components/pages/article-stuff/myArticles";

function App() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  if (!isMobile) {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route
              path="/myarticles"
              render={(props) => <MyArticles {...props} user={user} />}
            />
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
                  console.log(user.app_metadata);
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
