import { AUTH_LOGIN, ERROR_ACTION } from "./types";
import AuthService from "../services/auth.service";

export const loginAction = (loginForm, { options }) => async (dispatch) => {
  try {
    const { data, error } = await AuthService.login(loginForm);
    if (error) {
      dispatch({
        type: ERROR_ACTION,
        payload: data,
      });
      return Promise.resolve(error);
    } else {
      dispatch({
        type: AUTH_LOGIN,
        payload: data,
      });
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      return Promise.resolve(data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
