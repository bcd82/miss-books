import { LongText } from "../cmps/LongText.jsx";

export class BookDetails extends React.Component {
  state = {
    isLongTxtShown: false,
  };

  formattedPrice = "";

  render() {
    const { book, onBack } = this.props;
    switch (book.listPrice.currencyCode) {
      case "ILS":
        this.formattedPrice = ` ${book.listPrice.amount}₪`;
        break;
      case "EUR":
        this.formattedPrice = `€${book.listPrice.amount}`;
        break;
      default:
        this.formattedPrice = `$${book.listPrice.amount}`;
        break;
    }

    let formattedLang = "";
    switch (book.language) {
      case "he":
        formattedLang = "Hebrew";
        break;
      case "sp":
        formattedLang = `Spanish`;
        break;
      default:
        formattedLang = `English`;
        break;
    }
    const thisYear = new Date(Date.now()).getFullYear();

    return (
      <section className="book-details">
        <div className="details-img">
        {book.listPrice.isOnSale && <p className=" reading-type sale">ON-SALE</p>}
        {book.pageCount > 500 && <p className="reading-type">Long Reading</p>}
        {(book.pageCount >= 200 && book.pageCount < 500) && <p className="reading-type">Descent Reading</p>}
        {(book.pageCount <= 100 ) && <p className="reading-type">Light Reading</p>}
        <img src={book.thumbnail}></img>
        </div>
        <div className="more-details">
          <h1 className="title">{book.title}</h1>
          <p className="sub-title">{book.subtitle}</p>
          <p className="author">
            By:{" "}
            {book.authors.map((author) => {
              return author + " ";
            })}
          </p>
          <p className="publish-date">
            Year: {book.publishedDate}{" "}
            {thisYear - book.publishedDate >= 10 && "Veteran Book"}
            {thisYear - book.publishedDate <= 1 && "New Book"}
          </p>
          <p
            className={`price ${book.listPrice.amount >= 150 && "red"} ${
              book.listPrice.amount <= 20 && "green"
            }`}
          >
            Price: {this.formattedPrice}{" "}
            {book.listPrice.isOnSale && <span className="sale">ON SALE</span>}
          </p>
          <p>Language: {formattedLang}</p>
          <p>Length: {book.pageCount} pages</p>
          <div className="categories">
            Categories :
            {book.categories.map((category, idx) => (
              <p className="category" key={idx}>
                {category}
              </p>
            ))}
          </div>
          <LongText
            text={book.description}
            isLongTxtShown={this.isLongTxtShown}
          />
          <button onClick={onBack}>Go Back</button>
        </div>
      </section>
    );
  }
}
