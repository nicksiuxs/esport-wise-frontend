import React from "react";

const Input = ({
  id,
  type = "text",
  value,
  label,
  placeholder,
  handleOnChange,
  options,
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

      <div className="mt-2">
        {type !== "select" ? (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder ? placeholder : ""}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        ) : (
          <select
            id={id}
            name={id}
            value={value}
            onChange={handleOnChange}
            className="h-full w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          >
            <option value="" hidden>
              Selecciona un elemento
            </option>
            {options.map((role) => (
              <option key={role.id} value={role.id}>
                {role.value}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default Input;
