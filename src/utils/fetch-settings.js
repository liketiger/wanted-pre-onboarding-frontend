import CONSTANTS from "./constants";

const { API_URL } = CONSTANTS;

const requestHttp = async req => {
  try {
    const res = await fetch(`${API_URL}${req.url}`, {
      method: req.method,
      headers: req.headers ?? {},
      body: req.body ? JSON.stringify(req.body) : null,
    });

    if (req.url === '/auth/signup' && res.ok) return;
    if (req.method === 'DELETE' && res.ok) return;

    const response = await res.json();

    if (!res.ok) {
      req.getValue(response, false);
      throw Error('API Error');
    }    
    req.getValue(response, true);
  } catch (e) {
    console.log(e);
  }
};

export default requestHttp;
