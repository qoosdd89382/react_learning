import BookShow from './BookShow';

export default function BookList({ books, onEdit, onDelete }) {
    const renderedBooks = books.map((book) => {
        return <BookShow 
            key={book.id} 
            book={book} 
            onEdit={onEdit}
            onDelete={onDelete} />;
    });

    return <div className="book-list">{renderedBooks}</div>;
}