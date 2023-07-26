import React from "react";
import { REASONS } from "../../constants/books";
import { HStack } from "../common/Flex";

function Header({ handleOpenModal }) {
  return (
    <HStack vCentered styleProps={{ justifyContent: "space-between" }}>
      <h1 className="mt-0">Book Store</h1>
      <div>
        <button
          className="btn btn-info"
          onClick={() => {
            handleOpenModal(REASONS.ADD);
          }}
        >
          Add Book
        </button>
      </div>
    </HStack>
  );
}

export default React.memo(Header);
