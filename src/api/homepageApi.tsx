import axios from "axios";
import { apiBaseUrl } from "../global/appBaseUrl";

export default async function homepageAPI() {
  const url = `${apiBaseUrl}/ktmkart/frontend/home`;
  const { data } = await axios.get(url);

  return data;
}
