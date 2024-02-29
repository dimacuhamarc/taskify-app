import axios from 'axios';

export const API_URL = 'https://taskify-ipmy.onrender.com';

// export const SignInHandler = async (user) => {
//   try {
//     const response = await axios.post(`${API_URL}/signin`, {
//       user: {
//         email: user.email,
//         password: user.password
//       }
//     })
//     const userData = response.data.status.data.user;
//     const userHeader = response.headers['authorization'];
//     // console.log(userData);
//     // console.log(userHeader);
//     sessionStorage.setItem('user', JSON.stringify(userData));
//     sessionStorage.setItem('token', userHeader);
//     return response.data.status;
//   } catch (error) {
//     // console.log(error.response.status, error.message, error.response.data.error);
//     // alert(error.response.data.error);
//     return (error.response.data.error).toString();
//   }
// }

export const SignOutHandler = async () => {
  try {
    const response = await axios.delete(`${API_URL}/signout`, {
      headers: {
        'authorization': sessionStorage.getItem('token')
      }
    })
    // console.log(sessionStorage.getItem('token'));
    // console.log(response);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    console.log(response.data.status);
    location.reload();
    return response.data.status;
  } catch (error) {
    // console.log(error.response.data.status, error.message, error.response.data.message);
    return error.response.data.message;
  }
}

// export const SignUpHandler = async (user) => {
//   try {
//     const response = await axios.post(`${API_URL}/signup`, {
//       user: {
//         email: user.email,
//         password: user.password,
//         name: user.name
//       }
//     })
//     console.log(response.data);
//     return response.data.status;
//   } catch (error) {
//     console.log(error.response.status, error.message, error.response.data.error);
//     return (error.response.data.error).toString();
//   }
// }