import http from "../http-common";

class AuthService {
  login = async (loginForm) => {
    const { data, error } = await http.post("auth/login", loginForm);
    return { data, error };
  };
}

export default new AuthService();
