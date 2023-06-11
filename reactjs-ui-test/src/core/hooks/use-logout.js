const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      window.location = "/login";
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
