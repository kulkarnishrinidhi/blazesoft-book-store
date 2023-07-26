import React from "react";
import { VStack } from "./Flex";

function Input({ label, onChange, value, name, type }) {
  const id = React.useId();
  return (
    <VStack>
      <label htmlFor={id} className="form-label">
        {label}
        {": "}
      </label>
      <input
        id={id}
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="input form-control"
      />
    </VStack>
  );
}

export default Input;
