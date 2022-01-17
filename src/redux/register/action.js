import { REGISTER } from "./actionTypes";

export const regSuccess = (token) => {
  return {
    type: REGISTER,
    payload: token
  };
};
