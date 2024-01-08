import Input from "../Input";

function Engine({ handleChange }) {
  return (
    <div>
      <div className="text-black">
        <label className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test3"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%] after:absolute after:hidden after:top-[6.4px] after:left-[6.4px] after:w-2 after:h-2 after:rounded-[50%] after:bg-white"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="V12"
          title="V12"
          name="test3"
        />
        <Input handleChange={handleChange} value="V8" title="V8" name="test3" />
        <Input handleChange={handleChange} value="V6" title="V6" name="test3" />
        <Input handleChange={handleChange} value="V4" title="V4" name="test3" />
        <Input handleChange={handleChange} value="V3" title="V3" name="test3" />
        <Input
          handleChange={handleChange}
          value="Electric"
          title="Electric"
          name="test3"
        />
      </div>
    </div>
  );
}

export default Engine;
