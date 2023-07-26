function Book({ book, handleDelete }) {
    return (
        <li>
            <span>{book.name}</span>
            <span>{book.price}</span>
            <span>{book.category}</span>
            <button onClick={() => { handleDelete(book) }}>Delete</button>
        </li>
    )
}

export default Book