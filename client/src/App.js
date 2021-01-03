import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Articles from "./components/articles";
import Admin from "./components/admin";
import ArticleForm from "./components/articleForm";

function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
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
              if (isAuthenticated && user["https://rbac/role"] === "admin")
                return <Admin {...props} />;
              return <Redirect to="/" />;
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
