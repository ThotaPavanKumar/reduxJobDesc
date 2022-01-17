import { LOG_IN } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOG_IN,
    payload: token
  };
};
