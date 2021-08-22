export function BookPreview({book, onSelectBook}) {
    return (
        <article onClick={() => {onSelectBook(book)}} className="book-preview">
            <h1>Preview Goes here</h1>
        </article>
    )
}