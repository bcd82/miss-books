import { utilService } from "../services/util.service.js";
const { withRouter } = ReactRouterDOM;

function _BookPreview({ book, onSelectBook }) {
  const formattedPrice = utilService.getPriceCurrency(book);

//   const goToBook = () => {
//     props.history.push(`/book/${book.id}`);
//   };

  return (
    <article  className="book-preview">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-price">{formattedPrice}</p>
      <img src={book.thumbnail} />
    </article>
  );
}

export const BookPreview = _BookPreview;
