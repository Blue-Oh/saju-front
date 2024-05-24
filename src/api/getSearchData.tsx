import { database } from "./database";

export const getSearchData = async (searchKey: string) => {
  const data = database.filter(
    (item) =>
      item.title.includes(searchKey) || item.description.includes(searchKey)
  );
  return data;
};
