export function BookPreview({book, onSelectBook}) {
    return (
        <article onClick={() => {onSelectBook(book)}} className="book-preview">
            <h2 class="book-title">{book.title}</h2>
            <p class="book-price">{book.listPrice.amount}</p>
        </article>
    )
}