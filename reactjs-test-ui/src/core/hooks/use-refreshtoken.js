import useAuth from "./use-auth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    // const response = await axios.get("/refresh", {
    //   withCredentials: true,
    // });
    // setAuth((prev) => {
    //   console.log(JSON.stringify(prev));
    //   console.log(response.data.accessToken);
    //   return {
    //     ...prev,
    //     roles: response.data.roles,
    //     accessToken: response.data.accessToken,
    //   };
    // });
    // return response.data.accessToken;
    return null;
  };
  return refresh;
};

export default useRefreshToken;
