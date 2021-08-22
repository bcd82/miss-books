export function BookDetails({ book, onBack, onDeleteBook }) {
  return (
    <section className='book-details'>
      <h1>book details go here</h1>
      <button onClick={onBack}>Go Back</button>
    </section>
  );
}
