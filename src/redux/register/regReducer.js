import { REGISTER } from "./actionTypes";

let init = {
  payload: ""
};

export const regReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
      // console.log("payload",payload)

      return {
        ...state,
        isAuth: true,
        token: payload
      };

    default:
      return state;
  }
};
