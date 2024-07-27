import { baseURL } from "../api";

export function containsOnlyDigits(str:string) {
    return /^\d+$/.test(str);
}


export  function buildUrl(query: string, page: number) {
    let phone = "",
      name = "";
    containsOnlyDigits(query) ? (phone = query) : (name = query);
    return (
      `${baseURL}/passenger/?` +
      new URLSearchParams({
        ...(query && {
          where: `{"first_name":{"contains":"${name}"},"phone":{"contains":"${phone}"}}`,
        }),
        sort: "createdAt",
        limit: "10",
        skip: String(page ? page - 1 : page),
      })
    );
  };
  