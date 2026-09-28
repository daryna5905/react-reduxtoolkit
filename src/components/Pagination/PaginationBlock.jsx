import styles from './PaginationBlock.module.css';

function PaginationBlock({ page, totalPagesNumber, pageSelect }) {
  const goPrev = () => pageSelect(page - 1);
  const goNext = () => pageSelect(page + 1);
  return (
    <div>
      {!!totalPagesNumber && (
        <>
          <button
            onClick={goPrev}
            disabled={page === 1}
            className={styles.item}
          >
            Попередня
          </button>
          {Array.from({ length: totalPagesNumber }).map((_, index) => (
            <button
              onClick={() => pageSelect(index + 1)}
              className={styles.item}
              key={index}
              style={{ borderColor: index + 1 === page ? 'red' : 'grey' }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={goNext}
            className={styles.item}
            disabled={page === totalPagesNumber}
          >
            Наступна
          </button>
        </>
      )}
    </div>
  );
}

export default PaginationBlock;
