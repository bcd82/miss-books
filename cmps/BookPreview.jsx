import { utilService } from "../services/util.service.js";

export function BookPreview({ book, onSelectBook }) {
  const formattedPrice = utilService.getPriceCurrency(book);
 
  return (
    <article onClick={() => onSelectBook(book)} className="book-preview">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-price">{formattedPrice}</p>
      <img src={book.thumbnail} />
    </article>
  );
}
