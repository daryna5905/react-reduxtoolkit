import { useDispatch, useSelector } from 'react-redux';
import styles from './AddPostForm.module.css';
import { addPost } from '@/store/slices/postsThunk';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

function AddPostForm() {
  const dispatch = useDispatch();
  const { loadingAddPost, addPostError } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const titleInputRef = useRef(null);
  const textInputRef = useRef(null);
  const likesInputRef = useRef(null);
  const dislikesInputRef = useRef(null);
  const authorInputRef = useRef(null);

  const submit = async () => {
    const title = titleInputRef.current.value.trim();
    const text = textInputRef.current.value.trim();
    const authorId = authorInputRef.current.value.trim();
    const likes = +likesInputRef.current.value.trim();
    const dislikes = +dislikesInputRef.current.value.trim();

    if (!title || !text || !authorId) {
      alert('Заповніть пусте поле');
      return;
    }
    const postData = {
      title: title,
      body: text,
      authorId: authorId,
      likesNumber: likes,
      dislikesNumber: dislikes,
    };
    try {
      await dispatch(addPost(postData)).unwrap();
      navigate('/posts');
    } catch (err) {}
  };
  let currentContent;
  if (loadingAddPost) {
    currentContent = <div className={styles.loading}>Loading...</div>;
  } else {
    currentContent = (
      <div className={styles.form}>
        <input
          type='text'
          className={styles.input}
          placeholder='Введіть назву'
          ref={titleInputRef}
        />
        <input
          type='text'
          className={styles.input}
          placeholder='Введіть текст'
          ref={textInputRef}
        />
        <input
          type='text'
          className={styles.input}
          placeholder="Введіть ім'я автора"
          ref={authorInputRef}
        />
        <div className={styles.reactions}>
          <input
            type='number'
            placeholder='Введіть лайки'
            className={styles.input}
            ref={likesInputRef}
          />
          <input
            type='number'
            placeholder='Введіть дизлайки'
            className={styles.input}
            ref={dislikesInputRef}
          />
        </div>
        <button
          className={styles.submitButton}
          onClick={submit}
          disabled={loadingAddPost}
        >
          Додати пост
        </button>
      </div>
    );
  }

  return <>{currentContent}</>;
}

export default AddPostForm;
