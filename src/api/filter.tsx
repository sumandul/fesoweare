//

import axios from "axios";
import { apiBaseUrl } from "../global/appBaseUrl";

export const filterApi = (url: any) => {
  return axios.get(`${apiBaseUrl}products?${url}`);
};
