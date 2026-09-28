import { useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';
import styles from './PostsList.module.css';
function PostsList({ posts }) {
  const { isDeleting } = useSelector((state) => state.posts);
  return (
    <div className={`${styles.postList} ${isDeleting ? styles.deleting : ''}`}>
      {!posts || posts.length === 0 ? (
        <div>Список постів порожній</div>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default PostsList;
