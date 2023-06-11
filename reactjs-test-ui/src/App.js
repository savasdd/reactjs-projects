import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./core/context/require-auth";
import "./scss/style.scss";
import PersistLogin from "./views/pages/login/PersistLogin";
import Unauthorized from "./views/pages/login/Unauthorized";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    const ROLES = {
      User: "SINAV_ROLU",
      Editor: 1984,
      Admin: 5150,
    };

    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path="*" name="Home" element={<DefaultLayout />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
