export const WIKI_URL = (searchTerm) => `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchTerm}&callback=?`;

export function getUrlParameter(key){
  let params = new URLSearchParams(location.search.slice(1));
  return params.get(key);
}
