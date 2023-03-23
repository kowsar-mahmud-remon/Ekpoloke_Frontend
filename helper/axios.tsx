import axios from "axios";
import { authConstants } from "../Constants/constants";
import {store} from "../store";
import { api } from "../helper/urlConfig";
const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// axiosInstance.interceptors.request.use((req) => {
//   const { auth } = store.getState();
//   if (auth.token) {
//     req.headers.Authorization = `Bearer ${auth.token}`;
//   }
//   return req;
// });

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status === 401 || status === 403) {
      store.dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // window.location.href = "/"
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
