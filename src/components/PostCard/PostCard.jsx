import { useDispatch, useSelector } from 'react-redux';
import styles from './PostCard.module.css';
import { deletePost } from '@/store/slices/postsThunk';

function PostCard({ post }) {
  const { isDeleting, deleteError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return (
    <div className={styles.postCard}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <div className={styles.postBody}>{post.body}</div>
      <div className={styles.cardFooter}>
        <div className={styles.likeBtn}>Likes: {post.likesNumber}</div>
        <div className={styles.dislikeBtn}>Dislikes: {post.dislikesNumber}</div>
        <button
          className={styles.deleteButton}
          onClick={() => dispatch(deletePost({ id: post.id }))}
          disabled={isDeleting}
        >
          Delete Post
        </button>
        <div className={styles.author}>{post.authorId}</div>
        {deleteError && deleteError.errorid === post.id && (
          <div className={styles.error}>Error</div>
        )}
      </div>
    </div>
  );
}

export default PostCard;
