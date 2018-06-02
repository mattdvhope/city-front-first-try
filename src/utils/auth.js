import axios from 'axios'

const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ email, password }) => {
  if (!isBrowser) return false

  return axios.post(`${process.env.GATSBY_API_URL}/sessions`, {
    email: email,
    password: password,
  })
  .then(response => {
    console.log(response);
    return setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: email,
    })
  })
  .catch(error => {
    console.log(error);
    return false
  });


  // if (email === `matt@test.tv` && password === `demo`) {
  //   console.log(`Credentials match! Setting the active user.`)
  //   return setUser({
  //     name: `Jim`,
  //     legalName: `James K. User`,
  //     email: email,
  //   })
  // }
  // return false

}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}

