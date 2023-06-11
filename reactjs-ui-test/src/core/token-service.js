import { TOKEN_ACCESS, TOKEN_USER } from "./actions/Type";

export const isLogin = async (userDto) => {
  return fetch("http://localhost:8085/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": " *",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(userDto),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      console.log("Hata Oluştu!");
      console.warn(error);
    });
};


export const setToken = (token) => {
  removeToken();
  sessionStorage.setItem(TOKEN_ACCESS, token);
};

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_ACCESS);
};

export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_ACCESS);
};

export const setUser = (user) => {
  removeUser();
  sessionStorage.setItem(TOKEN_USER, user);
};

export const getUser = () => {
  return sessionStorage.getItem(TOKEN_USER);
};

export const removeUser = () => {
  sessionStorage.removeItem(TOKEN_USER);
};