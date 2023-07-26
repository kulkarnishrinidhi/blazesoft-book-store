function Book({ book, handleDeleteBook, handleEditBook }) {
    return (
        <li onClick={() => handleEditBook(book)}>
            <span>{book.name}</span>
            <span>{book.price}</span>
            <span>{book.category}</span>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleDeleteBook(book)
                }}
            >Delete</button>
        </li>
    )
}

export default Book