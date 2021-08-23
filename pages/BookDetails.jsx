import { LongText } from "../cmps/LongText.jsx";
import { utilService } from "../services/util.service.js";

export class BookDetails extends React.Component {
  state = {
    isLongTxtShown: false,
  };

  onToggleTxt = () => {
    this.setState({ isLongTxtShown: !this.state.isLongTxtShown });
  };

  getLaguage = () => {
    switch (this.props.book.language) {
      case "he":
        return "Hebrew";
      case "sp":
        return "Spanish";
      default:
        return "English";
    }
  };

  getPriceClass = () => {
    if (this.props.book.listPrice.amount >= 150) return "red";
    if (this.props.book.listPrice.amount <= 20) return "green";
  };

  getTextForBookYears = () => {
    const thisYear = new Date(Date.now()).getFullYear();
    if (thisYear - this.props.book.publishedDate >= 10) return "Veteran Book";
    if (thisYear - this.props.book.publishedDate <= 1) return "New Book";
  };
  render() {
    const { book, onBack } = this.props;
    const formattedPrice = utilService.getPriceCurrency(book);

    return (
      <section className="book-details">
        <div className="details-img">
          {book.listPrice.isOnSale && (
            <p className=" reading-type sale">ON-SALE</p>
          )}
          {book.pageCount > 500 && <p className="reading-type">Long Reading</p>}
          {book.pageCount >= 200 && book.pageCount < 500 && (
            <p className="reading-type">Descent Reading</p>
          )}
          {book.pageCount <= 100 && (
            <p className="reading-type">Light Reading</p>
          )}
          <img src={book.thumbnail}></img>
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
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
            Year: {book.publishedDate} {this.getTextForBookYears()}
          </p>
          <p className={`price ${this.getPriceClass()}`}>
            Price: {formattedPrice}{" "}
            {book.listPrice.isOnSale && <span className="sale">ON SALE</span>}
          </p>
          <p>Language: {this.getLaguage()}</p>
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
            isLongTxtShown={this.state.isLongTxtShown}
            onClickMore={this.onToggleTxt}
          />
        </div>
      </section>
    );
  }
}
