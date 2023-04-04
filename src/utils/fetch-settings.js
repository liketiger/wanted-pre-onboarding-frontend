const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const requestHttp = async (req) => {
  try {
    const res = await fetch(`${BASE_URL}${req.url}`, {
      method: req.method,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (req.url.includes('signup') && res.status === 201) return;

    const response = await res.json();
    if (res.statusCode >= 400) throw Error(response.message);
    return response.access_token;
  } catch (e) {
    console.log(e);
  }
};

export default requestHttp;
