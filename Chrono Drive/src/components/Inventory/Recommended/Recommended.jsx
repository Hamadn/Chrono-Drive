import Button from "../../Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="p-6">
      <h2 className="my-5 text-xl text-black">Recommended</h2>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClickHandler={handleClick}
          value=""
          title="All Cars"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          All Cars
        </Button>
        <Button
          onClickHandler={handleClick}
          value="Ferrari"
          title="Ferrari"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          Ferrari
        </Button>
        <Button
          onClickHandler={handleClick}
          value="Lamborghini"
          title="Lamborghini"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600  hover:bg-red-700 hover:text-white"
        >
          Lamborghini
        </Button>
        <Button
          onClickHandler={handleClick}
          value="McLaren"
          title="McLaren"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          McLaren
        </Button>
        <Button
          onClickHandler={handleClick}
          value="Audi"
          title="Audi"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          Audi
        </Button>
        <Button
          onClickHandler={handleClick}
          value="Nissan"
          title="Nissan"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          Nissan
        </Button>
        <Button
          onClickHandler={handleClick}
          value="Tesla"
          title="Tesla"
          bgColor="transparent"
          textColor="black"
          className="border-2 border-red-600 hover:bg-red-700 hover:text-white"
        >
          Tesla
        </Button>
      </div>
    </div>
  );
};

export default Recommended;
