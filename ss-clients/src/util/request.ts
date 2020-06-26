import {} from 'react';

// export default request;
interface Error {
  status?: string;
  response: XMLHttpRequest;
}
class HttpError extends Error {
  status?: string;
  response: XMLHttpRequest;
  constructor({ status, response }: Error) {
    super();
    this.status = status;
    this.response = response;
  }
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: HttpError = new HttpError({ response: response.statusText });
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url: string, options?: object) {
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  checkStatus(response);
  return await response.json();
}
