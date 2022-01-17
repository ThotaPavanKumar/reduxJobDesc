// import { loadData, saveData } from "../../utils/localStorage";
import { LOG_IN } from "./actionTypes";

// let token =
// let token = loadData("token");
// let user = loadData("user");

let init = {
  isAuths: false,
  token: ""
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      console.log("payload", payload.token);
      // saveData("token", payload);
      return {
        ...state,
        isAuths: true,
        token: payload
      };

    default:
      return state;
  }
};
