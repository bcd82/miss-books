import { LongText } from "../cmps/LongText.jsx";
import { bookService } from "../services/book.service.js";
import { utilService } from "../services/util.service.js";

export class BookDetails extends React.Component {
  state = {
    isLongTxtShown: false,
    book : null
  };

  componentDidMount = () =>{
    this.loadBook()
  }
  loadBook = () =>{
    const id = this.props.match.params.bookId
    bookService.getBookById(id)
      .then(book => {
        // if (!book) this.props.history.push('/')
        this.setState({ book })
      })
  }
  onToggleTxt = () => {
    this.setState({ isLongTxtShown: !this.state.isLongTxtShown });
  };

  getLaguage = () => {
    switch (this.state.book.language) {
      case "he":
        return "Hebrew";
      case "sp":
        return "Spanish";
      default:
        return "English";
    }
  };

  getPriceClass = () => {
    if (this.state.book.listPrice.amount >= 150) return "red";
    if (this.state.book.listPrice.amount <= 20) return "green";
  };

  getTextForBookYears = () => {
    const thisYear = new Date(Date.now()).getFullYear();
    if (thisYear - this.state.book.publishedDate >= 10) return "Veteran Book";
    if (thisYear - this.state.book.publishedDate <= 1) return "New Book";
  };

  getReadingType = () => {
    if (this.state.book.pageCount >= 200 && this.state.book.pageCount < 500)
      return "Descent Reading";
    if (this.state.book.pageCount <= 100) return "Light Reading";
    return "Long Reading";
  };

  render() {
    const { book } = this.state;
    if(!book) return <h1>Loading</h1>
    const formattedPrice = utilService.getPriceCurrency(book);

    return (
      <section className="book-details">
        <div className="details-img">
          {book.listPrice.isOnSale && (
            <p className=" reading-type sale">ON-SALE</p>
          )}
          {!(book.pageCount > 100 && book.pageCount < 200) && (
            <p className="reading-type">{this.getReadingType()}</p>
          )}
          <img src={book.thumbnail}></img>
          {/* <button className="back-btn" onClick={onBack}>
            Back
          </button> */}
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
