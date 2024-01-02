import Input from "../Input";

function Year({ handleChange }) {
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
          value={2015}
          title="2015"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2016}
          title="2016"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2017}
          title="2017"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2018}
          title="2018"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2019}
          title="2019"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2020}
          title="2020"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2021}
          title="2021"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value={2022}
          title="2022"
          name="test3"
        />
      </div>
    </div>
  );
}

export default Year;
