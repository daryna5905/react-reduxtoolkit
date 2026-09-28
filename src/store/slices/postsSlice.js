import { createSlice } from '@reduxjs/toolkit';
import { addPost, deletePost, fetchPosts } from './postsThunk';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    meta: {
      page: 1,
      limit: 10,
      totalPagesNumber: 0,
    },
    loading: false,
    error: null,
    isDeleting: false,
    deleteError: { errorText: null, errorid: null },
    loadingAddPost: false,
    addPostError: null,
  },
  reducers: {
    clear: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const data = action.payload;
        state.meta.page = data.meta.page;
        state.meta.totalPagesNumber = data.meta.totalPagesNumber;
        state.posts = data.posts;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isDeleting = true;
        state.deleteError = {
          errorText: null,
          errorid: null,
        };
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isDeleting = false;
        state.deleteError.errorText = action.payload.message;
        state.deleteError.errorid = action.payload.id;
      })
      .addCase(addPost.pending, (state) => {
        state.loadingAddPost = true;
        state.addPostError = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loadingAddPost = false;
        state.addPostError = null;
        state.posts.unshift(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loadingAddPost = false;
        state.addPostError = action.payload;
      });
  },
});

export const { clear } = postSlice.actions;
export default postSlice.reducer;
