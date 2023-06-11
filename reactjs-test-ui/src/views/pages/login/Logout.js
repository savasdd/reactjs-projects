import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { isLogin, setToken, setUser } from "src/core/token-service";
import useAuth from "src/core/hooks/use-auth";

const Logout = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const Login = (e) => {
    e.preventDefault();
    const dto = {
      username: data.username[0],
      password: data.password[0],
    };

    const response = isLogin(dto);
    response.then((resp) => {
      const accessToken = resp.access_token;
      const roles = ["SINAV_ROLU"];
      const user = data.username[0];
      const pwd = data.password[0];
      setAuth({ user, pwd, roles, accessToken });
      setToken(accessToken);
      setUser(data.username[0]);
      navigate(from, { replace: true });
    }).catch((error) => {
      console.log("Hata!");
      //dispatch({ type: TOASTR_MESSAGE, data: { type: 'success', message: 'Kayıt Yapıldı!' } });
    });
  };

  return (
    <div>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
