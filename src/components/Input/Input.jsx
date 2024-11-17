import React from "react";

const Input = ({
  id,
  type = "text",
  value,
  label,
  placeholder,
  handleOnChange,
}) => {
  return (
    <>
      {label ? (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
      ) : null}

      <div class="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder ? placeholder : ""}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </>
  );
};

export default Input;
