import Input from "../Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="text-black">
        <label className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%] bg-gradient-to-b from-blue-900 to-red-900 after:absolute after:hidden after:top-[6.4px] after:left-[6.4px] after:w-2 after:h-2 after:rounded-[50%] after:bg-white"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="yellow"
          title="Yellow"
          name="test1"
          color="yellow"
        />

        <label className="sidebar-label-container block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="checkmark bg-white border-2 border-black absolute top-0 left-0 h-5 w-5 rounded-[50%] after:absolute after:hidden after:top-[6.4px] after:left-[6.4px] after:w-2 after:h-2 after:rounded-[50%] after:bg-white"></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
