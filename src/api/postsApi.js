import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const loadPosts = async ({ page = 1, limit = 10 }) => {
  const res = await axios.get(`${baseUrl}/posts`, {
    params: {
      page,
      limit,
    },
  });
  return res.data;
};

export const deletePostApi = async ({ id }) => {
  const res = await axios.delete(`${baseUrl}/posts/${id}`);
  return id;
};

export const addPostApi = async ({
  authorId,
  title,
  body,
  likesNumber = 0,
  dislikesNumber = 0,
}) => {
  const res = await axios.post(`${baseUrl}/posts`, {
    authorId,
    title,
    body,
    likesNumber,
    dislikesNumber,
  });
  return res.data;
};
