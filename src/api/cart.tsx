import axios from "axios";
import { apiBaseUrl } from "../global/appBaseUrl";
import withAuthHeader from "./_withAUthHeaders";

const countAPi = async () => {
  const apiUrl = `${process.env.NEXT_API_BASE_URL}carts/count`;
  const { data } = await axios.get(apiUrl, { headers: withAuthHeader() });
  return data.count;
};
const deleteItemAPi = ({ id }: any) => {
  const apiUrl = `${apiBaseUrl}/v1/carts/items/?id=${id}`;
  return axios.delete(apiUrl, { headers: withAuthHeader() });
};
const get = () => {
  const apiUrl = `${apiBaseUrl}/v1/carts`;
  return axios.get(apiUrl, { headers: withAuthHeader() });
};

export default { countAPi, get, deleteItemAPi };
