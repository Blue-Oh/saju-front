import { database } from "./database";

export const getList = async (ctg: string) => {
  const data = database.filter((item) => item.symbol === ctg);
  return data;
};
