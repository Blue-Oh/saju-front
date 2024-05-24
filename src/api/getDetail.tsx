import { database } from "./database";

export const getDetail = async (id: string) => {
  console.log(Number(id));
  const data = database.filter((item) => item.id === Number(id));
  return data[0];
};
