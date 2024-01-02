const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        className="absolute opacity-0 cursor-pointer"
      />
      <span
        className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%] after:absolute after:hidden after:top-[6.4px] after:left-[6.4px] after:w-2 after:h-2 after:rounded-[50%] after:bg-white"
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
