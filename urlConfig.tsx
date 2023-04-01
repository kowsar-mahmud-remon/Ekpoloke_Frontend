const baseUrl = "https://ekpoloke-backend-old.onrender.com";
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName:any) => {
  return `${baseUrl}/public/${fileName}`;
};
export const getSearchUrl = (
  text:any,
  sort = "relevance",
  page = 1,
  limit = 20
) => {
  return `/search/product?s=${text
    .split(" ")
    .join("+")}&sort=${sort}&page=${page}&limit=${limit}`;
};
