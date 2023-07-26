import { HStack } from "../common/Flex";

function Book({ book, handleDelete, handleEditBook }) {
  return (
    <>
      <div
        className="book-card-container elevation"
        onClick={() => handleEditBook(book)}
      >
        <HStack vCentered styleProps={{ justifyContent: "space-between" }}>
          <HStack gap={0} vCentered>
            <div className="book-card-header">{book.name}</div>
            <div className="book-card-price">(${book.price})</div>
          </HStack>

          <div>
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(book);
              }}
            >
              Delete
            </button>
          </div>
        </HStack>
        <div className="book-card-category">{book.category}</div>
      </div>
    </>
  );
}

export default Book;
