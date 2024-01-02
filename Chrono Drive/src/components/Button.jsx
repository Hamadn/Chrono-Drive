export default function Button({
  onClickHandler,
  value,
  title,
  children,
  type = "button",
  bgColor = "bg-red-700",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
      onClick={onClickHandler}
      value={value}
    >
      {children}
    </button>
  );
}
