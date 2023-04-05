const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const requestHttp = async req => {
  try {
    const res = await fetch(`${BASE_URL}${req.url}`, {
      method: req.method,
      headers: req.headers ?? {},
      body: req.body ? JSON.stringify(req.body) : null,
    });

    if (req.url.includes('signup') && res.status === 201) return;
    if (req.url.includes('delete') && res.status === 201) return;

    const response = await res.json();
    if (res.statusCode >= 400) throw Error(response.message);
    req.getValue(response);
  } catch (e) {
    console.log(e);
  }
};

export default requestHttp;
