const USER = { userName: 'Mock User', logo: null, email: 'mock@mock.email' }
const AUTH_TOKEN = {
  accessToken: 'Mock-Access-Token',
  refreshToken: 'Mock-Refresh-Token',
}

module.exports = [
  {
    id: 'signup', // route id
    url: '/api/signup', // url in express format
    method: 'POST', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: AUTH_TOKEN, // body to send
        },
      },
    ],
  },
  {
    id: 'login', // route id
    url: '/api/login', // url in express format
    method: 'POST', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: AUTH_TOKEN, // body to send
        },
      },
    ],
  },
  {
    id: 'resetPassword', // route id
    url: '/api/reset-password', // url in express format
    method: 'POST', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: AUTH_TOKEN, // body to send
        },
      },
    ],
  },
  {
    id: 'get-user', // route id
    url: '/api/user/:id', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // variant id
        type: 'json', // variant handler id
        options: {
          status: 200, // status to send
          body: USER, // body to send
        },
      },
    ],
  },
]
