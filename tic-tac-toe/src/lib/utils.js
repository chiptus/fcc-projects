export function convertObjectToQueryString(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
}
