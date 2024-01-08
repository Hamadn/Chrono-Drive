import { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const inputId = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 text-white" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${className}`}
        ref={ref}
        {...props}
        id={inputId}
      />
    </div>
  );
});

export default Input;
