import { bookService } from "../services/book.service.js";
import { BookList } from "../cmps/BookList.jsx";
import { BookFilter } from "../cmps/BookFilter.jsx";

export class BookApp extends React.Component {
  state = {
    books: null,
    filterBy: null,
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
    const { books } = this.state;
    if(!books) return <div>Loading...</div>
    return (
      <section className="book-app main-layout">
            <BookFilter onSetFilter={this.onSetFilter} />
            <BookList books={books} onSelectBook={this.onSelectBook} />
      </section>
    );
  }
}
