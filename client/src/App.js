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
import NewArticle from "./components/pages/article-stuff/newArticle";

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
              render={(props) => {
                if (
                  isAuthenticated &&
                  (user["https://rbac/role"] === "Auteur" ||
                    user["https://rbac/role"] === "Admin")
                )
                  return <MyArticles {...props} user={user} />;
                return loginWithRedirect();
              }}
            />
            <Route
              path="/newarticle"
              render={(props) => {
                if (
                  isAuthenticated &&
                  (user["https://rbac/role"] === "Auteur" ||
                    user["https://rbac/role"] === "Admin")
                )
                  return <NewArticle {...props} user={user} />;
                return loginWithRedirect();
              }}
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
