export function BookPreview({ book, onSelectBook }) {
  let formattedPrice = "";
  switch (book.listPrice.currencyCode) {
    case "ILS":
      formattedPrice = ` ${book.listPrice.amount}₪`;
      break;
    case "EUR":
      formattedPrice = `€${book.listPrice.amount}`;
      break;
    default:
      formattedPrice = `$${book.listPrice.amount}`;
      break;
  }

  return (
    <article onClick={() => onSelectBook(book)} className="book-preview">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-price">{formattedPrice}</p>
      <img src={book.thumbnail} />
    </article>
  );
}
