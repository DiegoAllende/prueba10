export const utilHttp = () => {

  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: '*/*',
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Empresa' : 1
    }
    // const controller = new AbortController();
    // options.signal = controller.signal;
    // options.mode = "no-cors";
    options.method = options.method || "GET";
    options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    return fetch(endpoint, options)
      .then(res => {
        return res.ok ? res.json() : Promise.reject({
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error"
        })
      })
  }

  const get = (url, options = {}) => {
    customFetch(url, options)
  };

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options)
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options)
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options)
  };

  return { get, post, put, del };
}
