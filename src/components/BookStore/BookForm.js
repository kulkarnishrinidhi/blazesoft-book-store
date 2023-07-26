import React, { useState } from "react";
import { HStack, VStack } from "../common/Flex";
import Input from "../common/Input";
import { REASONS } from "../../constants/books";

const DEFAULT_BOOK_DETAILS = {
  name: "",
  price: 0,
  category: "",
  description: "",
};

function BookForm({ handleAddBook, handleClose, reason, book }) {
  const [bookDetails, setBookDetails] = useState(() => {
    return reason === REASONS.EDIT ? book : DEFAULT_BOOK_DETAILS;
  });

  const handleInputChange = (e) => {
    setBookDetails({
      ...bookDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = reason === REASONS.ADD ? Math.random() : book.id;
    handleAddBook({ ...bookDetails, id });
  };

  return (
    <form onSubmit={onSubmit}>
      <VStack>
        <Input
          name="name"
          value={bookDetails.name}
          type="text"
          onChange={handleInputChange}
          label={"Book Name"}
        />
        <Input
          name="price"
          value={bookDetails.price}
          type="number"
          onChange={handleInputChange}
          label={"Price"}
        />
        <Input
          name="category"
          value={bookDetails.category}
          type="text"
          onChange={handleInputChange}
          label={"Category"}
        />
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={bookDetails.description}
          onChange={handleInputChange}
          className="form-control"
        />

        <HStack styleProps={{ marginTop: 10, justifyContent: "center" }}>
          <input className="btn btn-info" type="submit" />
          <button
            className="btn btn-danger"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </button>
        </HStack>
      </VStack>
    </form>
  );
}

export default BookForm;
