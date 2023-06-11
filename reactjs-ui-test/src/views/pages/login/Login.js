import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { connect } from "react-redux";
import { isLogin, setToken, setUser } from "src/core/token-service";
import useAuth from "src/core/hooks/use-auth";
import { TOASTR_MESSAGE } from "src/core/actions/Type";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      Login(e);
    }
  }

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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <div className="align-items-center">
                      <h5 className="text-center">SINAV SONUÇ SORGULAMA</h5>
                    </div>
                    <br />
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>

                      <CFormInput
                        type="text"
                        placeholder="Kullanıcı adı"
                        name="username"
                        value={username}
                        onChange={changeHandler}
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Şifre"
                        name="password"
                        value={password}
                        onChange={changeHandler}
                        autoComplete="current-password"
                        onKeyDown={handleKeyDown}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12} className="text-center">
                        <CButton
                          color="primary"
                          onClick={Login}
                          className="px-4"
                        >
                          Giriş Yap
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
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
