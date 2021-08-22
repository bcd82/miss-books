import { bookService } from "../services/book.service.js";
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";
import { BookDetails } from "./BookDetails.jsx";

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
    selectedBook: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  onSelectBook = (book) => {
    this.setState({ selectedBook: book });
  };

  // onDeleteBook = (bookId) => {
  //   bookService.deleteBook(bookId);
  //   this.onSelectBook(null);
  //   this.loadBooks();
  // };

  render() {
    const { books, selectedBook } = this.state;
    if (!books.length) return <div>Loading...</div>;
    return (
      <section className="book-app">
        <h2>Books Project</h2>
        {!selectedBook && (
          <React.Fragment>
            <BookFilter onSetFilter={this.onSetFilter} />
            <BookList books={books} onSelectBook={this.onSelectBook} />
          </React.Fragment>
        )}
        {selectedBook && (
          <BookDetails
            book={selectedBook}
            onBack={() => this.onSelectBook(null)}
          />
        )}
      </section>
    );
  }
}
