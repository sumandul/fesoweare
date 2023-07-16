import { ADD_CUSTOMER } from "../constant";

export const cutomerRegistration = (data = [], action: any) => {
  console.log(action.data, "data from reducer");
  switch (action.type) {
    case ADD_CUSTOMER:
      return "HELLO";
    default:
      return data;
  }
};
