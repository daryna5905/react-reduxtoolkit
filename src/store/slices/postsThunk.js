import { loadPosts, deletePostApi, addPostApi } from '@/api/postsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return await loadPosts({ page, limit });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deletePost = createAsyncThunk(
  'post/delete',
  async ({ id }, { rejectWithValue }) => {
    try {
      return await deletePostApi({ id });
    } catch (error) {
      return rejectWithValue({
        message: error.message || 'Не вдалося видалити',
        id,
      });
    }
  },
);

export const addPost = createAsyncThunk(
  'post/add',
  async (
    { authorId, title, body, likesNumber, dislikesNumber },
    { rejectWithValue },
  ) => {
    try {
      return await addPostApi({
        authorId,
        title,
        body,
        likesNumber,
        dislikesNumber,
      });
    } catch (error) {
      console.log(error);

      return rejectWithValue(error.message);
    }
  },
);
