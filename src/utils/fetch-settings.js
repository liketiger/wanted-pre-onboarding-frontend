// const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';
// // const BASE_URL = 'http://localhost:8000';

// const requestHttp = async req => {
//   try {
//     const res = await fetch(`${BASE_URL}${req.url}`, {
//       method: req.method,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(req.body),
//     });

//     if (req.url.includes('signup') && res.status === 201) return;
    
//     const response = await res.json();
//     if (res.statusCode >= 400) throw Error(response.message);

//     return response.access_token;
//   } catch(e) {
//     console.log(e);
//   }
// };

// // requestHttp({ method: 'POST', url: '/auth/signin', body: {email: 'edward@naver.com', password: '12345678'}}).then(data => console.log(data))

// // const postSignUp = async data => {
// //   const res = await fetch(`${BASE_URL}/auth/signup`, {
// //     method: 'POST',
// //     headers: {
// //       'Access-Control-Allow-Origin': '*',
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// //   });
// //   return await res.json();
// // };

// // const postSignIn = async data => {
// //   const res = await fetch(`${BASE_URL}/auth/signin`, {
// //     method: 'POST',
// //     headers: {
// //       'Access-Control-Allow-Origin': '*',
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// //   });
// //   const token = await res.json();
// //   return { token: token.access_token, statusCode: res.status };
// // };

// export default requestHttp;
