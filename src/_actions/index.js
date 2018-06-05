import axios from 'axios';

export const CREATE_SESSION = 'CREATE_SESSION';

export function createSession(values, callback) { // the 'callback' is ONLY called AFTER the axios post has been resolved, thus in 'components/posts_new.js' the navigation to '/' will only occur until AFTER the new post has been added to the posts object, thus we'll see the new post immediately on the '/' screen!!

  console.log(values);

  const request = axios.post(`${process.env.GATSBY_API_URL}/sessions`, values)
    .then(() => callback());

  return {
    type: CREATE_SESSION,
    payload: request
  };

}

