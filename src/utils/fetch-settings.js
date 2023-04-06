import CONSTANTS from "./constants";

const { API_URL } = CONSTANTS;

const requestHttp = async req => {
  try {
    const res = await fetch(`${API_URL}${req.url}`, {
      method: req.method,
      headers: req.headers ?? {},
      body: req.body ? JSON.stringify(req.body) : null,
    });

    if (req.url === '/auth/signup' && res.status === 201) return;
    if (req.method === 'DELETE' && res.status === 201) return;

    const response = await res.json();
    if (res.statusCode >= 400) throw Error(response.message);
    req.getValue(response);
  } catch (e) {
    console.log(e);
  }
};

export default requestHttp;
