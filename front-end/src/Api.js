export const API_URL = 'http://localhost:3001';

export function LOGIN(body) {
  return {
    method: 'post',
    url: `${API_URL}/login`,
    data: body,
  };
}

export function GET_SELLERS() {
  return {
    method: 'get',
    url: `${API_URL}/users/sellers`,
  };
}

export function CREATE_USER(body, token) {
  return {
    method: 'post',
    url: `${API_URL}/users/create`,
    headers: {
      Authorization: token,
    },
    data: body,
  };
}

export function REGISTER(body) {
  return {
    method: 'post',
    url: `${API_URL}/users/register`,
    data: body,
  };
}

export function GET_PRODUCTS() {
  return {
    method: 'get',
    url: `${API_URL}/products`,
  };
}

export function MAKE_SALE(body, token) {
  return {
    method: 'post',
    url: `${API_URL}/customer/sell`,
    data: body,
    headers: {
      Authorization: token,
    },
  };
}
