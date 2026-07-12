function PaginationButtons({
  productsPerPage,
  currentPage,
  totalPosts,
  paginate,
}) {
  const numberOfPages = Math.ceil(totalPosts / productsPerPage);
  var pagesNumber = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesNumber.push(i);
  }

  return (
    <div className="pagination-buttons">
      {pagesNumber.map((_, i) => {
        return (
          <a  href="#pagination-container" key={i + 1} value={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}{" "}
          </a>
        );
      })}
    </div>
  );
}

export default PaginationButtons;
