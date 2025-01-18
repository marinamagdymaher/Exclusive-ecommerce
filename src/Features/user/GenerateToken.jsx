export const generateToken = (payload) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };
  const base64UrlEncode = (obj) => {
    return btoa(JSON.stringify(obj))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };
  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);
  const signature = btoa('your-256-bit-secret'); // Replace with your secret key
  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

export const decodeToken = (token) => {
  const base64UrlDecode = (str) => {
    return JSON.parse(atob(str.replace(/-/g, '+').replace(/_/g, '/')));
  };
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token');
  }
  const payload = base64UrlDecode(parts[1]);
  return payload;
};

export const setTokenLocalStorage=(token)=>{
  return localStorage.setItem("token", token);
}

export const getTokenLocalStorage=()=>{
  return localStorage.getItem("token") ;
  // localStorage.getItem("token", token);
}
