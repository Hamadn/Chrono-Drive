import "./Category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <div className="text-black">
        <label className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%] after:absolute after:hidden after:top-[6.4px] after:left-[6.4px] after:w-2 after:h-2 after:rounded-[50%] after:bg-white"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="Coupe"
          title="Coupe"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SUV"
          title="SUV"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Convertible"
          title="Convertible"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sedan"
          title="Sedan"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
