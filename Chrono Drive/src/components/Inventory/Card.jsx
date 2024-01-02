const Card = ({
  Img,
  Make,
  Model,
  Star,
  Reviews,
  Year,
  NewPrice,
  Engine,
  Doors,
}) => {
  return (
    <>
      <div className="max-w-md cursor-pointer rounded-md bg-black/75 border border-black p-1 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img
          className="w-full rounded-md object-cover object-center max-h-[46%]"
          src={Img}
          loading="lazy"
          alt="product"
        />
        <div>
          <div className="my-6 flex items-center justify-between px-4">
            <p className="font-bold text-white">
              {Make} {Model}
            </p>
            <p className=" bg-red-700 px-2 py-0.5 text-xl font-semibold text-white rounded-md">
              {NewPrice}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-md font-semibold text-white">Year</p>
            <p className="rounded-md bg-white px-2 py-0.5 text-md font-semibold text-black">
              {Year}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-white">Engine</p>
            <p className="rounded-md bg-white px-2 py-0.5 text-md font-semibold text-black">
              {Engine}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-md font-semibold text-white flex">Doors</p>
            <p className="rounded-md px-2 py-0.5 text-md font-semibold bg-white">
              {Doors}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-md font-semibold flex text-gray-500">
              {Star} {Star} {Star} {Star}
            </p>
            <p className="rounded-md bg-white px-2 py-0.5 text-md font-semibold text-black">
              {Reviews}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
