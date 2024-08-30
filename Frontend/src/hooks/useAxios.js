import axios from "axios";
import { useEffect } from "react";
import { UseUserProvider } from "../Users/providers/userProvider";
import { useSnackBarProvider } from "../providers/SnackBarProvider";

export default function useAxios() {
  const snackBar = useSnackBarProvider();
  const { token } = UseUserProvider();

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `jwt ${token}`;

    axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    }, null);
    axios.interceptors.response.use(null, (error) => {
      const expectedError = error.response && error.response.status >= 400;
      if (expectedError) snackBar(error.response.data.message, "error");

      return Promise.reject(error);
    });
  }, [token, snackBar]);
}
