import PaginationBlock from '@/components/Pagination/PaginationBlock';
import PostsList from '@/components/PostsList/PostsList';
import { fetchPosts } from '@/store/slices/postsThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PostsPage.module.css';

function PostsPage() {
  const dispatch = useDispatch();
  const { posts, meta, loading, error } = useSelector((state) => state.posts);
  let currentContent;

  useEffect(() => {
    dispatch(fetchPosts(meta));
  }, []);

  const pageSelect = (page) => dispatch(fetchPosts({ ...meta, page }));

  if (loading)
    currentContent = <div className={styles.loading}>Loading...</div>;
  else if (error) currentContent = <div>Error</div>;
  else
    currentContent = (
      <div className={styles.postsPage}>
        <PostsList posts={posts} />
        <div className={styles.pagination}>
          <PaginationBlock
            page={meta.page}
            totalPagesNumber={meta.totalPagesNumber}
            pageSelect={pageSelect}
          />
        </div>
      </div>
    );
  return <>{currentContent}</>;
}

export default PostsPage;
