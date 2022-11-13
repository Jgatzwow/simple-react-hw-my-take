import axios from "axios";

export function postRequestHW(checkboxVal: boolean) {
  return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {
    success: checkboxVal,
  });
}
